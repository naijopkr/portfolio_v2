import styled from 'styled-components'

export const ArticlesWrapper = styled.div`
  width: 100%;
  max-width: 1024px;

  .articles-title {
    font-family: ${({ theme }) => theme.fonts.normal};
    font-size: 24px;
    text-align: center;
  }

  .articles-body {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  .article {
    background: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.border};

    padding: 32px 24px;
    box-sizing: border-box;
    flex-basis: 48%;
    margin: 1%;
    box-shadow: 0 0 4px ${({ theme }) => theme.colors.shadow_project};

    font-family: ${({ theme }) => theme.fonts.normal};

    &-body-md {
      p:first-of-type {
        display: none;
      }

      h2:first-of-type {
        display: none;
      }
    }
  }
`
