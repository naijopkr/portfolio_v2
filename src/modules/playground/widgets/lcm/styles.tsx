import styled from 'styled-components'

export const LCMWrapper = styled.div`
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

  .desc {
    margin: 16px 0 32px 0;
  }

  .lcm {
    display: flex;
    flex-flow: column;
    flex-grow: 1;

    .inputs {
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;

      .inputs-num {
        display: flex;
        flex-flow: column;

        box-sizing: border-box;
        padding: 8px 16px;
        width: 50%;

        label {
          margin-bottom: 5px;
        }

        input {
          height: 32px;
          text-indent: 5px;
          font-size: 18px;
        }
      }

      .calculate {
        display: flex;
        justify-content: center;
        width: 100%;
        margin-top: 8px;

        button {
          border: none;
          outline: none;

          background-color: ${({ theme }) => theme.colors.fill};
          color: ${({ theme }) => theme.colors.title};
          padding: 8px 16px;

          cursor: pointer;
        }
      }
    }

    .output {
      display: flex;
      flex-flow: column;
      align-items: center;
      flex-grow: 1;

      &-desc {
        margin-top: 16px;
      }

      &-value {
        flex-grow: 1;
        display: flex;
        flex-flow: column;
        justify-content: center;

        font-family: ${({ theme }) => theme.fonts.monospace};
        font-size: 58px;
        color: ${({ theme }) => theme.colors.title};
      }
    }
  }
`
