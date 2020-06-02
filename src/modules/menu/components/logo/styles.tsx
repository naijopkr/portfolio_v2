import styled from 'styled-components'

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  .logo {
    color: ${({ theme }) => theme.colors.title};
    text-decoration: none;
    font-family: ${({ theme }) => theme.fonts.logo};
    font-size: 56px;
  }
`
