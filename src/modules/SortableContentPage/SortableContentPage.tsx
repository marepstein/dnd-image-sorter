import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  rectSwappingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { FC, useState } from "react";

import { SortableItemContainer } from "@/components/SortableItemContainer";
import { TPageData } from "@/types/data";
import { swapItems } from "./helpers/swapItems";

interface IPrintPageProps {
  data: TPageData;
}

export const SortableContentPage: FC<IPrintPageProps> = ({ data }) => {
  const [items, setItems] = useState<TPageData>(data);
  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active && over && active.id !== over.id) {
      const swappedItems = swapItems({ items, active, over });

      setItems(swappedItems);
    }
  };

  return (
    <DndContext
      onDragEnd={handleDragEnd}
      collisionDetection={closestCenter}
      sensors={sensors}
    >
      <SortableContext
        strategy={rectSwappingStrategy}
        items={items.flatMap((item) =>
          item.images.map((_, i) => `${item.id}-${i}`)
        )}
      >
        {items.map((item) => (
          <SortableItemContainer key={item.id} item={item} />
        ))}
      </SortableContext>
    </DndContext>
  );
};
