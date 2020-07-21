import styled from 'styled-components'

export const LoaderWrapper = styled.div`
  border: 16px solid ${({ theme }) => theme.colors.fill};
  border-top: 16px solid ${({ theme }) => theme.colors.title};
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  margin-top: 32px;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
