import styled from 'styled-components'

export const LCMWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;
  box-sizing: border-box;

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
`
