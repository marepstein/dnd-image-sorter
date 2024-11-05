import styled from "styled-components";

const StyledActions = styled.div`
  display: flex;
`;

const Icon = styled.div`
  background: #ededed;
  width: 32px;
  height: 32px;
  border-radius: 32px;
  margin: 0 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ButtonLayout = styled(Icon)``;

const ButtonMenu = styled(Icon)``;

export const Actions = () => {
  return (
    <>
      <StyledActions>
        <ButtonLayout>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 8.5C4 6.567 5.567 5 7.5 5H16.5C18.433 5 20 6.567 20 8.5V15.5C20 17.433 18.433 19 16.5 19H7.5C5.567 19 4 17.433 4 15.5V8.5ZM6 8.5C6 7.67157 6.67157 7 7.5 7H16.5C17.3284 7 18 7.67157 18 8.5V15.5C18 16.3284 17.3284 17 16.5 17H7.5C6.67157 17 6 16.3284 6 15.5V8.5ZM8.5 13C8.22386 13 8 13.2239 8 13.5V14.5C8 14.7761 8.22386 15 8.5 15H15.5C15.7761 15 16 14.7761 16 14.5V13.5C16 13.2239 15.7761 13 15.5 13H8.5Z"
              fill="#585858"
            />
          </svg>
        </ButtonLayout>
        <ButtonMenu>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12ZM20 12C20 13.1046 19.1046 14 18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12Z"
              fill="#585858"
            />
          </svg>
        </ButtonMenu>
      </StyledActions>
    </>
  );
};
