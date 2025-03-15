# Existing Tests

| Codebase               | Size (LOC) | Current | Native | Speedup |
| ---------------------- | ---------- | ------- | ------ | ------- |
| VS Code                | 1,505,000  | 77.8s   | 7.5s   | 10.4x   |
| Playwright             | 356,000    | 11.1s   | 1.1s   | 10.1x   |
| TypeORM                | 270,000    | 17.5s   | 1.3s   | 13.5x   |
| date-fns               | 104,000    | 6.5s    | 0.7s   | 9.5x    |
| tRPC (server + client) | 18,000     | 5.5s    | 0.6s   | 9.1x    |
| rxjs (observable)      | 2,100      | 1.1s    | 0.1s   | 11.0x   |

# Edge-case Tests

## Description

These tests are just there to handle edge cases like huge unions or deeply nested structures. As seen in the results `tsgo` is way faster in almost all cases.

## How are they run?

### Hardware

Macbook Pro M2, 16GB RAM, 10 Cores

### Configuration

I run `tsc` with the `--diagnostics` flag to also gather information about the memory used. `tsgo` is ran using the built binary from `hereby build` from the typescript-go repository.

## Results

| Test                          | Current | Native | Less Memory | Speedup | Dir Path         |
| ----------------------------- | ------- | ------ | ----------- | ------- | ---------------- |
| 100k Union                    | 0.43    | 0.14   | 82000K      | 3x      | 100k             |
| 100k Union 1 Thread           | 0.43    | 0.22   | 81200K      | 1.95x   | 100k             |
| 1 Million Union Type          | 1.57    | 7.29   | 494000K     | 0.215x  | million          |
| 1 Million Union Type 1 Thread | 1.57    | 7.32   | 495000K     | 0.214x  | million          |
| 4x 1 Million Union            | 5.43    | 8.35   | 943000K     | 0.65x   | million_multiple |
| 4x 1 Million Union 1 Thread   | 5.43    | 28.46  | 1717000K    | 0.19x   | million_multiple |
| Recursive Type                | 5.64    | 2.73   | 165000K     | 2.06x   | union            |
| Recursive Type 1 Thread       | 5.64    | 2.87   | 153000K     | 1.96x   | union            |

## Test Descriptions

## Run tests yourself

1. Install typescript-go: https://github.com/microsoft/typescript-go?tab=readme-ov-file#how-to-build-and-run
2. alias tsgo to the path of the /built/local/tsgo binary
3. Run the tests:
   ```bash
   (cd DIR_PATH && tsgo && tsgo --singleThreaded && tsc --diagnostics);
   ```
