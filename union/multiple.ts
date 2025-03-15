type ForI<
  Max,
  Prefix extends string,
  Count extends 0[] = [],
  Looped extends string = never
> = Count["length"] extends Max ? Looped : ForI<Max, Prefix, [...Count, 0], Looped | `${Prefix}${Count["length"]}`>;


type Looped = {
  [Key in  ForI<999, "a"> as Key extends string ? Key : never]?: {
    [Key2 in  ForI<999, "b"> as Key2 extends string ? Key2 : never]?: {
      [Key3 in  ForI<999, "c"> as Key3 extends string ? Key3 : never]?: {
        [Key4 in  ForI<999, "d"> as Key4 extends string ? Key4 : never]?: ForI<999, Key4>;
      }[ForI<999, "d">]
    }[ ForI<999, "c">];
  }[ForI<999, "b">]
}[ ForI<999, "a">];

const l: Looped = {
  a1: "a1105",
};
