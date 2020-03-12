import styled from 'styled-components'

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 64px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.fill};
  box-shadow: 0px 4px 4px ${({ theme }) => theme.colors.shadow};
  padding: 0 32px;
`

export const SettingsIcon = styled.div`
  color: ${({ theme }) => theme.colors.title};
  cursor: pointer;
`
