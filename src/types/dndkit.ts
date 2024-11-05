import {
  horizontalListSortingStrategy,
  rectSortingStrategy,
  rectSwappingStrategy,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

export type TStrategies =
  | typeof rectSwappingStrategy
  | typeof verticalListSortingStrategy
  | typeof horizontalListSortingStrategy
  | typeof rectSortingStrategy;
