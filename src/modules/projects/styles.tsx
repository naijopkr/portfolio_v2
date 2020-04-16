import styled from 'styled-components'

export const ProjectsWrapper = styled.div`
  width: 100%;
  max-width: 1024px;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .project {
    background: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.border};

    padding: 32px 24px;
    box-sizing: border-box;
    flex-basis: 48%;
    margin: 1%;
    box-shadow: 0 0 4px ${({ theme }) => theme.colors.shadow_project};

    font-family: ${({ theme }) => theme.fonts.normal};

    &-name {
      text-transform: uppercase;
      font-size: 18px;
      margin-bottom: 5px;
    }

    &-tags {
      display: flex;
      flex-wrap: wrap;

      margin-bottom: 13px;
    }

    &-description {
      font-size: 12px;
      margin-bottom: 8px;
    }

    &-link {
      height: 18px;
      &-anchor {
        color: ${({ theme }) => theme.colors.title};
        svg {
          height: 18px;
          width: 18px;
        }
      }
    }
  }

  .projects-notfound {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 200px;
    width: 300px;

    background: ${({ theme }) => theme.colors.fill};
    box-shadow: 0px 0px 8px ${({ theme }) => theme.colors.shadow};

    font-family: ${({ theme }) => theme.fonts.normal};
    color: ${({ theme }) => theme.colors.title};
    font-size: 18px;
  }
`

export const TagWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.text};
  height: 20px;
  border-radius: 20px;

  padding: 2px 8px;
  margin-right: 3px;

  text-transform: lowercase;
  font-size: 14px;

  cursor: pointer;

  :hover,
  &.active {
    background: ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.background};
  }
`

export const FiltersWrapper = styled.div`
  width: 100%;
`
