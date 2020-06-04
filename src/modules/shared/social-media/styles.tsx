import styled from 'styled-components'

export const SocialMediaWrapper = styled.div`
  display: flex;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 48px;
    height: 48px;
    padding: 8px;

    a {
      color: ${({ theme }) => theme.colors.black};
    }

    svg {
      width: 48px;
      height: 48px;

      &.github-icon {
        width: 40px;
        height: 40px;
      }
    }
  }
`
