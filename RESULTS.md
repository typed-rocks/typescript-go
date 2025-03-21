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

## Macbook Pro M3 Max, 36GB Ram, 14 (10 performance and 4 efficiency)

| Test                                | Current | Native   | Less Memory   | Speedup | Dir Path             |
| ----------------------------------- | ------- | -------- | ------------- | ------- | -------------------- |
| 100k union                          | 0.43s   | 0.108s   | 87378K        | 3.98x   | 100k                 |
| 100k union 1 Thread                 | 0.43s   | 0.176s   | 86510K        | 2.44x   | 100k                 |
| Recursive Type                      | 2.03s   | 1.711s   | 206044K       | 1.19x   | union                |
| Recursive Type 1 Thread             | 2.03s   | 1.797s   | 206320K       | 1.13x   | union                |
| 1 Million Union Type                | 1.44s   | 6.678s   | 506135K       | 0.22x   | million              |
| 1 Million Union Type 1 Thread       | 1.44s   | 6.884s   | 507503K       | 0.21x   | million              |
| 4x 1 Million Union Type             | 4.68s   | 7.330s   | 927998K       | 0.64x   | million_multi        |
| 4x 1 Million Union Type 1 Thread    | 4.68s   | 26.977s  | 1701441K      | 0.17x   | million_multi        |

## Dell XPS 15 9575 i7-8705G, 16GB RAM, 4 Cores, Arch Linux 6.13.7-arch1-1

| Test                             | Current | Native  | Less Memory | Speedup | Dir Path      |
| -------------------------------- | ------- | ------- | ----------- | ------- | ------------- |
| 100k union                       | 1.61s   | 0.272s  | 82337K      | 5.92x   | 100k          |
| 100k union 1 Thread              | 1.61s   | 0.474s  | 81483K      | 3.4x    | 100k          |
| Recursive Type                   | 7.64s   | 4.354s  | 212797K     | 1.75x   | union         |
| Recursive Type 1 Thread          | 7.64s   | 5.001s  | 213672K     | 1.53x   | union         |
| 1 Million Union Type             | 4.46s   | 12.372s | 497078K     | 0.36x   | million       |
| 1 Million Union Type 1 Thread    | 4.46s   | 13.784s | 498274K     | 0.32x   | million       |
| 4x 1 Million Union Type          | 10.15s  | 18.309s | 923567K     | 0.55x   | million_multi |
| 4x 1 Million Union Type 1 Thread | 10.15s  | 44.046s | 1696720K    | 0.23x   | million_multi |

## HP 15s i3 11th Gen (8GB RAM, 2 Cores, Windows 11)

| Test                             | Current | Native   | Less Memory | Speedup | Dir Path      |
| -------------------------------- | ------- | -------- | ----------- | ------- | ------------- |
| 100k union                       | 3.29s   | 0.908s   | 93795K      | 3.62x   | 100k          |
| 100k union 1 Thread              | 3.29s   | 1.929s   | 92936K      | 1.71x   | 100k          |
| Recursive Type                   | 12.47s  | 12.183s  | 208556K     | 1.02x   | union         |
| Recursive Type 1 Thread          | 12.47s  | 9.917s   | 208699K     | 1.26x   | union         |
| 1 Million Union Type             | 8.44s   | 21.677s  | 515319K     | 0.39x   | million       |
| 1 Million Union Type 1 Thread    | 8.44s   | 22.792s  | 516588K     | 0.37x   | million       |
| 4x 1 Million Union Type          |         | 69.088s  | -2030362K   | 0x      | million_multi |
| 4x 1 Million Union Type 1 Thread |         | 72.296s  | -1256826K   | 0x      | million_multi |