import styled from 'styled-components'

export const ArticlesWrapper = styled.div`
  width: 100%;
  max-width: 1024px;

  .articles {
    &-body {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }

    &-warning {
      width: 70%;
      margin: 0 auto;
      padding: 16px;

      background-color: ${({ theme }) => theme.colors.fill};

      color: ${({ theme }) => theme.colors.title};
      text-align: center;
      font-family: ${({ theme }) => theme.fonts.normal};

      &-title {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 8px;
      }

      &-body {
        font-size: 14px;
      }
    }
  }

  .article {
    background: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.border};

    padding: 32px 24px;
    box-sizing: border-box;
    flex-basis: 96%;
    margin: 1%;
    box-shadow: 0 0 4px ${({ theme }) => theme.colors.shadow_project};

    font-family: ${({ theme }) => theme.fonts.normal};

    a {
      color: ${({ theme }) => theme.colors.title};
    }

    &-options {
      display: flex;
    }

    &-option {
      display: flex;
      align-items: center;

      /* RESET PROPS FOR BUTTON */
      background: unset;
      border: none;
      text-align: left;
      outline: none;

      color: ${({ theme }) => theme.colors.title};
      margin-right: 8px;
      cursor: pointer;
      font-size: 12px;

      a {
        text-decoration: none;
      }
    }
  }
`
