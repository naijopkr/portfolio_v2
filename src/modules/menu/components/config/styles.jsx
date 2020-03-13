import styled from 'styled-components'
import { Select } from '@material-ui/core'

export const ConfigWrapper = styled.div`
  width: 150px;
  height: 200px;
  display: flex;
  flex-flow: column;

  position: absolute;
  z-index: 2;
  right: 0;
  box-sizing: border-box;
  padding: 16px;

  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 2px 8px ${({ theme }) => theme.colors.shadow};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.normal};

  cursor: auto;

  label {
    font-size: 12px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.title};
  }
`

export const SelectWrapper = styled(Select)`
  width: 100%;

  .MuiSelect-root,
  .MuiSelect-select,
  .MuiSelect-select:focus,
  .MuiSelect-selectMenu,
  .MuiInputBase-input,
  .MuiInput-input {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }

  &.MuiInput-underline:before,
  &.MuiInput-underline:after {
    border-bottom-color: ${({ theme }) => theme.colors.select_border};
  }

  &.MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom-color: ${({ theme }) => theme.colors.select_border_hover};
  }

  .MuiSelect-icon {
    fill: ${({ theme }) => theme.colors.text};
  }
`
