import styled from "styled-components";

export const AmountTaskContainer = styled.div`
  margin-top: 4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .taskCreate {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${(props) => props.theme["blue"]};

    font-size: 0.875rem;
    font-weight: 700;

    &::after {
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 0.75rem;
      font-weight: 700;

      background-color: ${(props) => props.theme["gray-400"]};
      color: ${(props) => props.theme["gray-200"]};

      content: "5";
      width: 24px;
      height: 19px;
      border-radius: 999px;
    }
  }

  .taskCompleted {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${(props) => props.theme["purple"]};

    font-size: 0.875rem;
    font-weight: 700;

    &::after {
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 0.75rem;
      font-weight: 700;

      background-color: ${(props) => props.theme["gray-400"]};
      color: ${(props) => props.theme["gray-200"]};

      content: "2 de 5";
      width: 52px;
      height: 19px;
      border-radius: 999px;
    }
  }
`;
