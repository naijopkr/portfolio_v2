import styled from 'styled-components'

export const ProjectsWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 32px;
  overflow: auto;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

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

  .projects-notfound {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 200px;
    width: 300px;

    background: ${({ theme }) => theme.colors.fill};
    box-shadow: 0px 0px 8px ${({ theme }) => theme.colors.shadow};

    font-family: ${({ theme }) => theme.fonts.normal};
    color: ${({ theme }) => theme.colors.title};
    font-size: 18px;
  }
`
