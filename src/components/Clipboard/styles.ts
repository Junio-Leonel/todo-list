import styled from "styled-components";

export const ClipboardContainer = styled.div`
  max-width: 736px;
  margin: 5.5rem auto 0;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & p:nth-child(2) {
    margin-top: 1rem;
    color: ${(props) => props.theme["gray-300"]};
    font-weight: 700;
  }

  & p:nth-child(3) {
    margin-top: 0.125rem;
    color: ${(props) => props.theme["gray-300"]};
  }
`;
