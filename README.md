# Edge-case Tests

## Description

These tests are just there to handle edge cases like huge unions or deeply nested structures. As seen in the results `tsgo` is way faster in almost all cases.

## How are they run?

### Hardware

Macbook Pro M2, 16GB RAM, 10 Cores

### Configuration

I run `tsc` with the `--diagnostics` flag to also gather information about the memory used. `tsgo` is ran using the built binary from `hereby build` from the typescript-go repository.

## Results

| Test                                | Current | Native   | Less Memory   | Speedup | Dir Path             |
| ----------------------------------- | ------- | -------- | ------------- | ------- | -------------------- |
| 100k union                          | 0.44s   | 0.127s   | 81222K        | 3.46x   | 100k                 |
| 100k union 1 Thread                 | 0.44s   | 0.198s   | 80284K        | 2.22x   | 100k                 |
| Recursive Type                      | 2.24s   | 1.935s   | 191889K       | 1.16x   | union                |
| Recursive Type 1 Thread             | 2.24s   | 2.064s   | 192994K       | 1.09x   | union                |
| 1 Million Union Type                | 1.86s   | 7.867s   | 506634K       | 0.24x   | million              |
| 1 Million Union Type 1 Thread       | 1.86s   | 7.650s   | 507940K       | 0.24x   | million              |
| 4x 1 Million Union Type             | 6.97s   | 8.852s   | 958015K       | 0.79x   | million_multi        |
| 4x 1 Million Union Type 1 Thread    | 6.97s   | 30.616s  | 1731459K      | 0.23x   | million_multi        |

## Test Descriptions

## Run tests yourself

1. Install typescript-go: https://github.com/microsoft/typescript-go?tab=readme-ov-file#how-to-build-and-run
2. Run the tests:
   ```bash
   node runtests.js /path/to/the/tsgo/binary;
   ```
