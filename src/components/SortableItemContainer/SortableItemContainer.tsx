import { FC, PropsWithChildren } from "react";
import styled from "styled-components";

import { Actions } from "@/components/Actions";
import { SortableItem } from "@/components/SortableItem";
import { IData } from "@/types/data";

const Wrapper = styled.div`
  max-width: 380px;
  margin: auto;
  color: #585858;

  @media (min-width: 768px) {
    max-width: 600px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #2778a5;
  border-radius: 8px;
  padding: 20px;
  margin: 17px 0 42px;
  justify-content: space-between;
`;

interface ISortableItemContainer {
  item: IData;
}

export const SortableItemContainer: FC<
  PropsWithChildren<ISortableItemContainer>
> = ({ item }) => {
  return (
    <Wrapper>
      <Header>
        <Title>{item.title}</Title>
        <Actions />
      </Header>
      <ItemWrapper>
        {item.images.map((src, i) => (
          <SortableItem
            key={src}
            width="calc(50% - 10px)"
            item={
              <img
                style={{ maxWidth: "100%" }}
                src={src}
                alt="Draggable image"
                id={`${item.id}-${i}`}
              />
            }
          />
        ))}
      </ItemWrapper>
    </Wrapper>
  );
};
