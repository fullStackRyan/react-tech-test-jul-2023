import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";
import { stars } from "../utils/stars";

jest.mock("react-icons/fa", () => ({
  FaStar: jest.fn(),
  FaRegStar: jest.fn(),
  FaStarHalfAlt: jest.fn(),
}));

describe("stars function", () => {
  it("should return 5 full stars for rating 5", () => {
    const result = stars(5);
    expect(result.filter((star) => star === FaStar).length).toBe(5);
    expect(result.filter((star) => star === FaStarHalfAlt).length).toBe(0);
    expect(result.filter((star) => star === FaRegStar).length).toBe(0);
  });

  it("should return 3 full stars and 1 half star for rating 3.5", () => {
    const result = stars(3.5);
    expect(result.filter((star) => star === FaStar).length).toBe(3);
    expect(result.filter((star) => star === FaStarHalfAlt).length).toBe(1);
    expect(result.filter((star) => star === FaRegStar).length).toBe(1);
  });

  it("should return 2 full stars for rating 2", () => {
    const result = stars(2);
    expect(result.filter((star) => star === FaStar).length).toBe(2);
    expect(result.filter((star) => star === FaStarHalfAlt).length).toBe(0);
    expect(result.filter((star) => star === FaRegStar).length).toBe(3);
  });

  it("should return 5 empty stars for rating 0", () => {
    const result = stars(0);
    expect(result.filter((star) => star === FaStar).length).toBe(0);
    expect(result.filter((star) => star === FaStarHalfAlt).length).toBe(0);
    expect(result.filter((star) => star === FaRegStar).length).toBe(5);
  });
});
