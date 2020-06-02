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

  .right {
    display: flex;
    align-items: center;

    color: ${({ theme }) => theme.colors.title};
    font-family: ${({ theme }) => theme.fonts.normal};

    .menu-item {
      text-decoration: none;
      color: inherit;
      line-height: 28px;
      padding: 12px;
    }
  }
`

export const SettingsIcon = styled.div`
  position: relative;
  z-index: 2;
  color: ${({ theme }) => theme.colors.title};
  cursor: pointer;
  padding: 12px;
`
