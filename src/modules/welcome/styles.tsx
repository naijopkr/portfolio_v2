import styled from 'styled-components'

export const WelcomeWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-start;

  width: 80%;
  max-width: 1110px;
  padding: 32px 72px;

  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.normal};
  box-shadow: 4px 4px 4px ${({ theme }) => theme.colors.shadow};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-sizing: border-box;

  .title {
    max-width: 535px;
    font-family: ${({ theme }) => theme.fonts.normal};
    font-size: 56px;
    line-height: 68px;
    margin-bottom: 40px;
  }

  .body-list {
    font-family: ${({ theme }) => theme.fonts.normal};
    font-size: 24px;
    line-height: 2;
    list-style-type: none;
    padding: 0;
    margin: 0 0 0 16px;

    li {
      display: flex;
      height: 32px;
      align-items: center;
      margin-bottom: 16px;
    }

    .material-icons {
      height: 24px;
      width: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      font-size: 16px;
      margin-right: 8px;
      background-color: ${({ theme }) => theme.colors.fill};
      color: ${({ theme }) => theme.colors.title};
      box-shadow: 2px 2px 2px ${({ theme }) => theme.colors.shadow};
      padding: 4px;
    }
  }

  .presentation {
    margin: 0 0 16px 0;
    font-family: ${({ theme }) => theme.fonts.normal};
    font-size: 24px;
    line-height: 2;
  }

  .welcome-button {
    background-color: ${({ theme }) => theme.colors.fill};
    color: ${({ theme }) => theme.colors.title};
    font-family: ${({ theme }) => theme.fonts.normal};
    padding: 16px;
    text-decoration: none;
    margin-top: 40px;
    box-shadow: 2px 2px 2px ${({ theme }) => theme.colors.shadow};
  }
`
