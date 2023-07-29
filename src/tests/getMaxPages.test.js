import getMaxPages from "../util/getMaxPages";

describe("testing getmaxpages func", () => {
  test("if res count is more than 100 returns 100", () => {
    expect(getMaxPages(1001, 10)).toBe(100);
    expect(getMaxPages(1502, 15)).toBe(100);
    expect(getMaxPages(2003, 20)).toBe(100);
  });
  test("if res count is less than 100 returns res count", () => {
    expect(getMaxPages(901, 10)).toBe(91);
    expect(getMaxPages(151, 15)).toBe(11);
    expect(getMaxPages(860, 20)).toBe(43);
  });
});
