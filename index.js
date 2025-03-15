const fs = require('fs');

for(let i = 0; i < 4; i++) {
  let s = 'type SingleHuge'+ i +' = ';

  const size = 1_000_000;
  for(let i = 0; i < size; i++) {
    if(i === (size - 1)) {
      s += '"h' + i + '";';
    } else {
      s += '"h' + i + '" |';
    }
    
  }

  fs.writeFileSync('single_million_' + i + '.ts', s);
  
}