import styled from "styled-components";

export const TasksContainer = styled.main`
  width: 100%;
  max-width: 736px;
  margin: 0 auto;
`;

export const TaskListContainer = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

type Completed = {
  check: boolean;
};

export const TaskContent = styled.div<Completed>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  border-radius: 8px;
  border: 1px solid ${(props) => props.theme["gray-400"]};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);

  background-color: ${(props) => props.theme["gray-500"]};

  opacity: ${(props) => (props.check === true ? "0.7" : "1")};

  button {
    color: ${(props) => props.theme["gray-300"]};

    border: none;
    background-color: transparent;

    cursor: pointer;
  }
`;

export const ItemContent = styled.div<Completed>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  .checkBox {
    all: unset;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid
      ${(props) =>
        props.check === true ? props.theme["purple-dark"] : props.theme.blue};
    background-color: ${(props) =>
      props.check === true ? props.theme["purple-dark"] : ""};

    cursor: pointer;
  }

  .check {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme["gray-100"]};
    font-weight: bold;
  }

  p {
    color: ${(props) => props.theme["gray-100"]};
    font-size: 0.875rem;
    text-decoration: ${(props) => (props.check === true ? "line-through" : "")};
  }
`;
