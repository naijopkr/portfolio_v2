import styled from 'styled-components'

export const ColorGameWrapper = styled.div`
  width: 100%;
  height: 100%;

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

  .circles {
    width: 100%;
    margin-top: 32px;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .game-status {
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;

    margin-top: 16px;

    .new-game {
      margin-top: 16px;

      border: none;
      outline: none;

      background-color: ${({ theme }) => theme.colors.fill};
      color: ${({ theme }) => theme.colors.title};
      font-family: ${({ theme }) => theme.fonts.normal};
      padding: 8px 16px;

      cursor: pointer;
    }
  }
`

export const Circle = styled.div`
  width: 100px;
  height: 100px;
  margin: 8px 2px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.border};

  cursor: pointer;

  transition: opacity 0.5s ease-in-out;
`
