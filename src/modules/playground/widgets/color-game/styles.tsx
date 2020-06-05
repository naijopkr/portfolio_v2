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
`

export const Circle = styled.div`
  width: 100px;
  height: 100px;
  margin: 8px 2px;
  border-radius: 50%;

  cursor: pointer;

  background-color: ${({ color }) => color};
`
