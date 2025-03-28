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

## Windows 10 Desktop, 64GB RAM, i7 14th Gen 20 cores (8 performance and 12 efficiency)

| Test                                | Current | Native   | Less Memory   | Speedup | Dir Path             |
| ----------------------------------- | ------- | -------- | ------------- | ------- | -------------------- |
| 100k union                          | 0.56s   | 0.103s   | 83422K        | 5.44x   | 100k                 |
| 100k union 1 Thread                 | 0.56s   | 0.167s   | 82587K        | 3.35x   | 100k                 |
| Recursive Type                      | 2.28s   | 1.649s   | 295234K       | 1.38x   | union                |
| Recursive Type 1 Thread             | 2.28s   | 1.688s   | 295948K       | 1.35x   | union                |
| 1 Million Union Type                | 1.69s   | 4.764s   | 498057K       | 0.35x   | million              |
| 1 Million Union Type 1 Thread       | 1.69s   | 4.838s   | 499310K       | 0.35x   | million              |
| 4x 1 Million Union Type             | 5.47s   | 5.399s   | 435844K       | 1.01x   | million_multi        |
| 4x 1 Million Union Type 1 Thread    | 5.47s   | 18.434s  | 1209167K      | 0.3x    | million_multi        |

## Linux 6.13.7-arch1-1 Desktop, 64GB RAM, i7 14th Gen 20 cores (8 performance and 12 efficiency)

| Test                                | Current | Native   | Less Memory   | Speedup | Dir Path             |
| ----------------------------------- | ------- | -------- | ------------- | ------- | -------------------- |
| 100k union                          | 0.47s   | 0.143s   | 78422K        | 3.29x   | 100k                 |
| 100k union 1 Thread                 | 0.47s   | 0.191s   | 77578K        | 2.46x   | 100k                 |
| Recursive Type                      | 2.02s   | 1.409s   | 283382K       | 1.43x   | union                |
| Recursive Type 1 Thread             | 2.02s   | 1.495s   | 284163K       | 1.35x   | union                |
| 1 Million Union Type                | 1.46s   | 4.577s   | 503622K       | 0.32x   | million              |
| 1 Million Union Type 1 Thread       | 1.46s   | 4.586s   | 504982K       | 0.32x   | million              |
| 4x 1 Million Union Type             | 4.65s   | 5.352s   | 438456K       | 0.87x   | million_multi        |
| 4x 1 Million Union Type 1 Thread    | 4.65s   | 17.846s  | 1211475K      | 0.26x   | million_multi        |
