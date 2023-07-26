import { renderHook } from "@testing-library/react-hooks";
import { useFilteredFirms } from "../hooks/useFilteredFirms";
import { mockRankings } from "../__mocks__/mockData";

describe("useFilteredFirms", () => {
  it("returns the full rankings when no filters are applied", () => {
    const { result } = renderHook(() =>
      useFilteredFirms(mockRankings, undefined, undefined)
    );

    expect(result.current.length).toBe(2);
  });

  it("returns the correct rankings when one filter is applied", () => {
    const { result } = renderHook(() =>
      useFilteredFirms(mockRankings, 1, undefined)
    );

    expect(result.current.length).toBe(1);
  });

  it("returns the correct rankings when both filters are applied", () => {
    const { result } = renderHook(() => useFilteredFirms(mockRankings, 1, 1));

    expect(result.current.length).toBe(1);
  });

  it("returns an empty array when the filters don't match any rankings", () => {
    const { result } = renderHook(() => useFilteredFirms(mockRankings, 4, 4));

    expect(result.current.length).toBe(0);
  });
});
