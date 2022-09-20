import styled from "styled-components";

export const TasksContainer = styled.main`
  width: 100%;
  max-width: 736px;
  margin: 0 auto;
`;

export const TaskListContainer = styled.div`
  margin-top: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const TaskContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  border-radius: 8px;
  border: 1px solid ${(props) => props.theme["gray-400"]};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);

  background-color: ${(props) => props.theme["gray-500"]};

  button {
    color: ${(props) => props.theme["gray-300"]};

    border: none;
    background-color: transparent;

    cursor: pointer;
  }
`;

export const ItemContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  p {
    color: ${(props) => props.theme["gray-100"]};
    font-size: 0.875rem;
  }
`;

export const TaskContentCompleted = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  border-radius: 8px;
  border: 1px solid ${(props) => props.theme["gray-500"]};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);

  background-color: ${(props) => props.theme["gray-500"]};
  opacity: 0.7;

  button {
    color: ${(props) => props.theme["gray-300"]};

    border: none;
    background-color: transparent;

    cursor: pointer;
  }
`;

export const ItemContentCompleted = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  p {
    color: ${(props) => props.theme["gray-100"]};
    font-size: 0.875rem;
    text-decoration: line-through;
  }
`;
