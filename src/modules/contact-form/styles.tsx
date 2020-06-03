import styled from 'styled-components'

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 1024px;

  .form-title {
    width: 100%;
    text-align: center;

    font-family: ${({ theme }) => theme.fonts.normal};
  }

  .form {
    width: 80%;

    display: flex;
    flex-flow: column;
    align-items: center;

    padding: 32px;

    form {
      width: 100%;
    }

    .form-row {
      display: flex;
      justify-content: space-between;

      .form-field {
        width: 49%;
      }
    }

    .form-field {
      display: flex;
      flex-flow: column;

      margin-bottom: 16px;

      font-family: ${({ theme }) => theme.fonts.normal};

      label {
        color: ${({ theme }) => theme.colors.title};

        margin-bottom: 2px;
      }

      input {
        height: 32px;
        width: 100%;

        font-family: ${({ theme }) => theme.fonts.monospace};
        font-size: 18px;

        text-indent: 3px;
        outline-color: ${({ theme }) => theme.colors.title};
      }

      textarea {
        height: 120px;
        resize: vertical;

        font-family: ${({ theme }) => theme.fonts.monospace};
        font-size: 18px;

        text-indent: 3px;
        outline-color: ${({ theme }) => theme.colors.title};

        ::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }

        ::-webkit-scrollbar-button:start:decrement,
        ::-webkit-scrollbar-button:end:increment {
          height: 6px;
          display: block;
          background-color: transparent;
        }

        ::-webkit-scrollbar-track-piece {
          background-color: transparent;
          border-radius: 6px;
        }

        ::-webkit-scrollbar-thumb {
          height: 50px;
          background-color: ${({ theme }) => theme.colors.fill};
          border-radius: 6px;
        }
      }
    }

    .form-submit {
      width: 100%;

      display: flex;
      justify-content: center;

      button {
        background-color: ${({ theme }) => theme.colors.fill};
        border: none;
        padding: 8px 16px;

        color: ${({ theme }) => theme.colors.title};
        font-family: ${({ theme }) => theme.fonts.normal};
        font-size: 18px;
        font-weight: bold;

        cursor: pointer;
      }
    }
  }
`
