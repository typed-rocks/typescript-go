const { execSync } = require("child_process");

const tsgoPath = process.argv[2];

function runTsgo(path, singleThread = false) {
  const singleThreaded = singleThread ? " --singleThreaded" : "";
  return execSync(`(cd ${path} && ${tsgoPath} ${singleThreaded})`).toString();
}

function runTsc(path) {
  try {
    return execSync(`(cd ${path} && tsc --diagnostics)`).toString();
  } catch (e) {
    return e.stdout.toString();
  }
}

function extractResults(result) {
  const lines = result.split("\n");
  // find memory used and total time
  let memoryUsed = undefined;
  let totalTime = undefined;
  for (const line of lines) {
    const trimmed = line.replace(/\s+/g, '');
    if (trimmed.startsWith("Memoryused:")) {
      memoryUsed = trimmed.split(":")[1];
    } else if (trimmed.startsWith("Totaltime:")) {
      totalTime = trimmed.split(":")[1];
    }
  }
  return { memoryUsed, totalTime };
}

const result = [
  { name: "100k union", path: "100k" },
  { name: "Recursive Type", path: "union" },
  { name: "1 Million Union Type", path: "million" },
  { name: "4x 1 Million Union Type", path: "million_multi" },
]
  .map(({ name, path }) => {
    const tsGo = extractResults(runTsgo(path));
    console.log(`start running ${name} with tsgo`);
    console.log(`done  running ${name} with tsgo`);
    const tsGoSingle = extractResults(runTsgo(path, true));
    console.log(`start running ${name} single threaded with tsgo`);
    console.log(`done  running ${name} single threaded with tsgo`);
    const tsc = extractResults(runTsc(path));
    console.log(`start running ${name} with tsc`);
    console.log(`done  running ${name} with tsc`);
    return [
      { name, path, current: tsc, native: tsGo },
      { name: name + " 1 Thread", path, current: tsc, native: tsGoSingle },
    ];
  })
  .flat();


const printable = result.map(({ name, current, native, path }) => {
  const speedup = round(removeLast(current.totalTime) / removeLast(native.totalTime)) + 'x';
  const memorySaved = round(removeLast(current.memoryUsed) - removeLast(native.memoryUsed)) + 'K';
  return `| ${name.padEnd(35)} | ${current.totalTime.padEnd(7)} | ${native.totalTime.padEnd(8)} | ${memorySaved.padEnd(13)} | ${speedup.padEnd(7)} | ${path.padEnd(20)} |`;
});




function removeLast(str) {
  return +str.substring(0, str.length - 1);
}

function round(num) {
  return (Math.round(num * 100) / 100) + '';
}
console.log(`| ${"Test".padEnd(35)} | Current | ${"Native".padEnd(8)} | ${"Less Memory".padEnd(13)} | Speedup | ${'Dir Path'.padEnd(20)} |`);
console.log(`| ${"-".repeat(35)} | ${"-".repeat(7)} | ${"-".repeat(8)} | ${"-".repeat(13)} | ${"-".repeat(7)} | ${'-'.repeat(20)} |`);
console.log(printable.join('\n'));
