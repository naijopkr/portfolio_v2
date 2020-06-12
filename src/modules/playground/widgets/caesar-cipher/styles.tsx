import styled from 'styled-components'

export const CCWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;

  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  .title {
    color: ${({ theme }) => theme.colors.title};
    font-size: 18px;
    text-transform: uppercase;
    margin-bottom: 8px;
  }

  .description {
    margin-top: 16px;
  }

  .cipher {
    flex-grow: 1;

    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    width: 100%;

    .cipher-input {
      display: flex;
      flex-flow: column;
      flex-basis: 40%;

      width: 100%;
    }

    .output-label {
      width: 100%;
      text-align: left;
    }

    .cipher-output {
      flex-basis: 40%;
      width: 100%;
      border: 1px solid ${({ theme }) => theme.colors.border};
      padding: 4px;
    }
  }
`
