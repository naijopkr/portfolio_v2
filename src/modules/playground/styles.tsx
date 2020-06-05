import styled from 'styled-components'

export const PlaygroundWrapper = styled.div`
  width: 100%;
  max-width: 1024px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  .widget {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;

    height: 512px;
    flex-basis: 48%;
    box-sizing: border-box;
    margin: 8px 1%;

    box-shadow: 4px 4px 4px ${({ theme }) => theme.colors.shadow};
    border: 1px solid ${({ theme }) => theme.colors.border};

    font-family: ${({ theme }) => theme.fonts.normal};
  }
`
