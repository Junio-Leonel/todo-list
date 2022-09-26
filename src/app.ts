import styled from "styled-components";

export const AppContainer = styled.div`
  max-width: 736px;
  margin: -1.75rem auto 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  input {
    width: 100%;
    padding: 1rem;

    border: 1px solid ${(props) => props.theme["gray-700"]};
    border-radius: 8px;

    background-color: ${(props) => props.theme["gray-500"]};
    color: ${(props) => props.theme["gray-100"]};

    outline: 0;

    &:focus {
      box-shadow: 0 0 0 2px ${(props) => props.theme["purple-dark"]};
    }

    &::placeholder {
      color: ${(props) => props.theme["gray-300"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    padding: 1rem;
    border-radius: 8px;
    border: 0;
    font-size: 0.875rem;
    font-weight: bold;

    background-color: ${(props) => props.theme["blue-dark"]};
    color: ${(props) => props.theme["gray-100"]};

    cursor: pointer;

    transition: background-color 0.2s;

    &:hover {
      background-color: ${(props) => props.theme["blue"]};
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.7;

      &:hover {
        background-color: ${(props) => props.theme["blue-dark"]};
      }
    }
  }
`;
