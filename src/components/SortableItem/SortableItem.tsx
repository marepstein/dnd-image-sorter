import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { FC, ReactElement } from "react";

interface ISortableItem {
  item: ReactElement;
  width?: string;
}

export const SortableItem: FC<ISortableItem> = ({ item, width }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    cursor: "grab",
    touchAction: "none",
    width,
  };

  return (
    <div ref={setNodeRef} {...attributes} {...listeners} style={style}>
      {item}
    </div>
  );
};
