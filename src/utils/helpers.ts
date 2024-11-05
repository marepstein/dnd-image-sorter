import { TPageData } from "@/types/data";

export const parseId = (id: string) => {
  if (!id) return { sectionId: null, imageIndex: null };

  const [sectionId, imageIndex] = id.split("-").map(Number);
  return { sectionId, imageIndex };
};

export const findSectionIndex = (items: TPageData, sectionId: number) =>
  items.findIndex((s) => s.id === sectionId);
