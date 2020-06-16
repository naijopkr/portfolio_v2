import styled from 'styled-components'

export const WelcomeWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-start;

  width: 80%;
  max-width: 1110px;
  padding: 32px 72px;
  margin-bottom: 32px;

  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.normal};
  box-shadow: 4px 4px 4px ${({ theme }) => theme.colors.shadow};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-sizing: border-box;

  .title {
    font-family: ${({ theme }) => theme.fonts.normal};
    font-size: 56px;
    line-height: 68px;
    margin-bottom: 40px;
  }

  .presentation {
    margin: 0 0 16px 0;
    font-family: ${({ theme }) => theme.fonts.normal};
    font-size: 24px;
    line-height: 1.5;
  }

  .subtitle {
    margin-top: 48px;
    margin-bottom: 24px;

    font-size: 40px;
  }

  .social-media {
    align-self: center;
  }

  .about {
    align-self: center;
    padding: 8px 16px;
    border-radius: 8px;
    margin-top: 32px;

    font-family: ${({ theme }) => theme.fonts.normal};
    font-size: 24px;
    line-height: 1.5;

    background: ${({ theme }) => theme.colors.fill};

    a {
      color: ${({ theme }) => theme.colors.title};
      text-decoration: none;
    }
  }

  .body-list {
    font-family: ${({ theme }) => theme.fonts.normal};
    font-size: 24px;
    list-style-type: none;
    padding: 0;
    margin: 0 0 0 16px;
    line-height: 1.5;

    li {
      display: flex;
      align-items: center;
      margin-bottom: 32px;

      a,
      .section {
        color: ${({ theme }) => theme.colors.title};
        font-family: ${({ theme }) => theme.fonts.monospace};
        text-decoration: none;
      }
    }

    .material-icons {
      height: 24px;
      width: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      font-size: 16px;
      margin-right: 12px;
      background-color: ${({ theme }) => theme.colors.fill};
      color: ${({ theme }) => theme.colors.title};
      box-shadow: 2px 2px 2px ${({ theme }) => theme.colors.shadow};
      padding: 4px;
    }
  }
`
