import styled from 'styled-components'

export const BurgerWrapper = styled.div`
  height: 100%;
  position: relative;

  .menu-icon {
    cursor: pointer;
  }

  .menu-dropdown {
    width: 150px;

    display: flex;
    flex-flow: column;

    position: absolute;
    z-index: 2;
    right: 0;
    box-sizing: border-box;

    background-color: ${({ theme }) => theme.colors.background};
    box-shadow: 0 2px 8px ${({ theme }) => theme.colors.shadow};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.normal};

    &-item {
      width: 100%;
      padding: 16px;

      a {
        color: ${({ theme }) => theme.colors.text};
        text-decoration: none;
      }
    }
  }
`
