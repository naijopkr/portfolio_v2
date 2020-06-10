import styled from 'styled-components'

export const PrimeWrapper = styled.div`
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

  .prime-number {
    display: flex;
    flex-flow: column;
    justify-content: center;
    flex-grow: 1;

    &-output {
      flex-grow: 1;

      display: flex;
      flex-flow: column;
      justify-content: center;

      font-family: ${({ theme }) => theme.fonts.monospace};
      font-size: 58px;
      color: ${({ theme }) => theme.colors.title};
      text-align: center;
    }

    &-next {
      justify-self: flex-end;

      button {
        outline: none;
        border: none;

        background-color: ${({ theme }) => theme.colors.fill};
        color: ${({ theme }) => theme.colors.title};

        font-family: ${({ theme }) => theme.fonts.normal};

        padding: 8px 16px;
        cursor: pointer;
      }
    }
  }
`
