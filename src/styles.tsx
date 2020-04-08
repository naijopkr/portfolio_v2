import styled from 'styled-components'

export const StyledApp = styled.div`
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-flow: column;
  align-items: center;

  .content {
    display: flex;
    flex-flow: column;
    align-items: center;
    box-sizing: border-box;
    padding-top: 32px;

    width: 100%;
    height: calc(100vh - 64px);
    overflow: auto;

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
`
