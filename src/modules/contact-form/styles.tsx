import styled from 'styled-components'

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 1024px;

  .form {
    display: flex;
    flex-flow: column;
    align-items: center;

    padding: 32px;

    form {
      width: 100%;

      .form-title {
        width: 100%;
        margin-bottom: 32px;
        text-align: center;

        font-family: ${({ theme }) => theme.fonts.normal};
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

        .form-error {
          padding-left: 5px;
          font-size: 12px;
          color: ${({ theme }) => theme.colors.danger};
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
        flex-flow: column;
        align-items: center;

        font-family: ${({ theme }) => theme.fonts.normal};

        .form-error {
          font-size: 12px;
          color: ${({ theme }) => theme.colors.danger};
          margin-bottom: 5px;
        }

        button {
          background-color: ${({ theme }) => theme.colors.fill};
          border: none;
          padding: 8px 16px;

          color: ${({ theme }) => theme.colors.title};
          font-size: 18px;
          font-weight: bold;

          cursor: pointer;

          :disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
        }
      }
    }

    .form-thanks {
      text-align: center;

      font-family: ${({ theme }) => theme.fonts.normal};
      color: ${({ theme }) => theme.colors.text};
      font-size: 24px;

      div {
        margin-bottom: 16px;
      }

      a {
        background-color: ${({ theme }) => theme.colors.fill};
        padding: 8px 16px;

        font-size: 14px;
        font-weight: bold;
        color: ${({ theme }) => theme.colors.title};
        text-decoration: none;
      }
    }
  }

  .social-media {
    margin-top: 32px;

    display: flex;
    flex-flow: column;
    align-items: center;

    .title {
      text-align: center;

      font-family: ${({ theme }) => theme.fonts.normal};
      color: ${({ theme }) => theme.colors.text};
    }
  }
`
