# Test results

## Macbook Pro M2, 16GB Ram, 10 Cores

| Test                          | Current | Native | Less Memory | Speedup | Dir Path         |
|-------------------------------|---------|--------|-------------|---------|------------------|
| 100k Union                    | 0.43    | 0.14   | 82000K      | 3x      | 100k             |
| 100k Union 1 Thread           | 0.43    | 0.22   | 81200K      | 1.95x   | 100k             |
| 1 Million Union Type          | 1.57    | 7.29   | 494000K     | 0.215x  | million          |
| 1 Million Union Type 1 Thread | 1.57    | 7.32   | 495000K     | 0.214x  | million          |
| 4x 1 Million Union            | 5.43    | 8.35   | 943000K     | 0.65x   | million_multiple |
| 4x 1 Million Union 1 Thread   | 5.43    | 28.46  | 1717000K    | 0.19x   | million_multiple |
| Recursive Type                | 5.64    | 2.73   | 165000K     | 2.06x   | union            |
| Recursive Type 1 Thread       | 5.64    | 2.87   | 153000K     | 1.96x   | union            |