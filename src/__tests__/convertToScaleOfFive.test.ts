import { convertToScaleOfFive } from "../utils/convertToScaleOfFive";

describe("convertToScaleOfFive", () => {
  it("should return the correct value when given a number between 0 and 1000", () => {
    expect(convertToScaleOfFive(0)).toBe(0);
    expect(convertToScaleOfFive(100)).toBe(0.5);
    expect(convertToScaleOfFive(200)).toBe(1);
    expect(convertToScaleOfFive(300)).toBe(1.5);
    expect(convertToScaleOfFive(400)).toBe(2);
    expect(convertToScaleOfFive(500)).toBe(2.5);
    expect(convertToScaleOfFive(600)).toBe(3);
    expect(convertToScaleOfFive(700)).toBe(3.5);
    expect(convertToScaleOfFive(800)).toBe(4);
    expect(convertToScaleOfFive(900)).toBe(4.5);
    expect(convertToScaleOfFive(1000)).toBe(5);
  });
});
