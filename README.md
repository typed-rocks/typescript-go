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

### Hardware

Macbook Pro M2, 16GB RAM, 10 Cores

### Configuration

I run `tsc` with the `--diagnostics` flag to also gather information about the memory used. `tsgo` is ran using the built binary from `hereby build` from the typescript-go repository.

## Results

| Test                             | Current | Native  | Less Memory | Speedup | Dir Path      |
| -------------------------------- | ------- | ------- | ----------- | ------- | ------------- |
| 100k union                       | 0.43s   | 0.143s  | 80913K      | 3.01x   | 100k          |
| 100k union 1 Thread              | 0.43s   | 0.202s  | 79982K      | 2.13x   | 100k          |
| 1 Million Union Type             | 1.66s   | 7.463s  | 506423K     | 0.22x   | million       |
| 1 Million Union Type 1 Thread    | 1.66s   | 7.531s  | 507583K     | 0.22x   | million       |
| 4x 1 Million Union Type          | 5.59s   | 7.943s  | 951708K     | 0.7x    | million_multi |
| 4x 1 Million Union Type 1 Thread | 5.59s   | 29.534s | 1725211K    | 0.19x   | million_multi |
| Recursive Type                   | 5.25s   | 2.951s  | 360428K     | 1.78x   | union         |
| Recursive Type 1 Thread          | 5.25s   | 3.109s  | 347255K     | 1.69x   | union         |

## Test Descriptions

## Run tests yourself

1. Install typescript-go: https://github.com/microsoft/typescript-go?tab=readme-ov-file#how-to-build-and-run
2. Run the tests:
   ```bash
   node runtests.js /path/to/the/tsgo/binary;
   ```
