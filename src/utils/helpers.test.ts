import { describe, expect, it } from "@jest/globals";

import { TPageData } from "@/types/data";
import { findSectionIndex, parseId } from "./helpers";

describe("Helpers", () => {
  describe("parseId Function", () => {
    it("correctly parses a valid id string", () => {
      const result = parseId("1-2");
      expect(result).toEqual({ sectionId: 1, imageIndex: 2 });
    });

    it("returns null when no input is provided", () => {
      const result = parseId("");
      expect(result).toEqual({ sectionId: null, imageIndex: null });
    });
  });

  describe("findSectionIndex Function", () => {
    const mockData: TPageData = [
      { id: 1, title: "test1", images: ["image1"] },
      { id: 2, title: "test2", images: ["image2"] },
      { id: 3, title: "test3", images: ["image3", "image4"] },
    ];

    it("returns the index of the section with the given id", () => {
      const index = findSectionIndex(mockData, 2);
      expect(index).toBe(1);
    });

    it("returns -1 if the section id is not found", () => {
      const index = findSectionIndex(mockData, 4);
      expect(index).toBe(-1);
    });

    it("returns -1 when called with an empty array", () => {
      const index = findSectionIndex([], 1);
      expect(index).toBe(-1);
    });
  });
});
