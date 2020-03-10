import styled from 'styled-components'

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .logo {
    color: ${({ theme }) => theme.colors.title};
    font-family: ${({ theme }) => theme.fontFamily.logo};
    font-size: 56px;
  }
`
