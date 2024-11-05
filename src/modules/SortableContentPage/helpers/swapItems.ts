import { DragEndEvent } from "@dnd-kit/core";

import { TPageData } from "@/types/data";
import { findSectionIndex, parseId } from "@/utils/helpers";

interface ISwapItems {
  items: TPageData;
  active: DragEndEvent["active"];
  over: DragEndEvent["over"];
}

export const swapItems = ({ items, active, over }: ISwapItems) => {
  if (!over || !over.id) {
    return items;
  }

  const newItems = [...items];

  const { sectionId: activeSectionId, imageIndex: activeImageIndex } = parseId(
    active.id.toString()
  );

  const { sectionId: overSectionId, imageIndex: overImageIndex } = parseId(
    over.id.toString()
  );

  if (
    activeSectionId === null ||
    activeImageIndex === null ||
    overSectionId === null ||
    overImageIndex === null
  ) {
    return items;
  }

  const activeSectionIndex = findSectionIndex(newItems, activeSectionId);
  const overSectionIndex = findSectionIndex(newItems, overSectionId);

  if (activeSectionIndex !== -1 && overSectionIndex !== -1) {
    const temp = newItems[activeSectionIndex].images[activeImageIndex];

    newItems[activeSectionIndex].images[activeImageIndex] =
      newItems[overSectionIndex].images[overImageIndex];

    newItems[overSectionIndex].images[overImageIndex] = temp;
  }

  return newItems;
};
