import styled from "styled-components";

export const TaskAmountContainer = styled.div`
  max-width: 736px;
  margin: 4rem auto 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & div:nth-child(1) {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    & span:nth-child(1) {
      color: ${(props) => props.theme["blue"]};
      font-size: 0.875rem;
      font-weight: 700;
    }

    & span:nth-child(2) {
      font-size: 0.75rem;
      font-weight: bold;
      background-color: ${(props) => props.theme["gray-400"]};
      color: ${(props) => props.theme["gray-200"]};
      padding: 0.125rem 0.5rem;
      border-radius: 999px;
    }
  }

  & div:nth-child(2) {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    & span:nth-child(1) {
      color: ${(props) => props.theme["purple"]};
      font-size: 0.875rem;
      font-weight: 700;
    }

    & span:nth-child(2) {
      font-size: 0.75rem;
      font-weight: bold;
      background-color: ${(props) => props.theme["gray-400"]};
      color: ${(props) => props.theme["gray-200"]};
      padding: 0.125rem 0.5rem;
      border-radius: 999px;
    }
  }
`;
