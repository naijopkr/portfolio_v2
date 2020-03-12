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

    width: 100%;
    padding: 32px;
  }
`
