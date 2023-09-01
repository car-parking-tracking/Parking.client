import styled, { css } from 'styled-components'
import { ButtonProps } from './button.types'
import LikeInactive from '@assets/icons/like-inactive.svg'
import LikeActive from '@assets/icons/like-active.svg'

const shared = css<ButtonProps>`
  color: var(--txt-white);
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
  display: inline-block;
  transition: 0.3s ease-in-out;
  font-weight: 600;
  border-radius: 0.75rem;
  padding: 12px 16px;
`
const secondary = css<ButtonProps>`
  ${shared}
  border: 0.125rem solid transparent;
  background-color: var(--grey);
  box-shadow: 0rem 0.25rem 0.313rem rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: var(--button-bg-default);
  }

  &:disabled {
    background-color: var(--search-item-hover);
    color: var(--grey);
  }
`
const primary = css<ButtonProps>`
  ${shared}
  background-color: var(--button-bg-default);
  border: none;
  box-shadow: 0rem 0.25rem 0.313rem rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: var(--button-bg-hover);
  }

  &:disabled {
    background-color: var(--search-item-hover);
    color: var(--grey);
  }
`

const icon = css<ButtonProps>`
  ${shared}
  background-color: var(--button-bg-default);
  border: none;
  box-shadow: 0rem 0.25rem 0.313rem rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.5rem;

  #masked {
    width: 20px;
    height: 20px;
    mask-image: url(${LikeInactive});
    background: #fff;
    transition: 0.3s ease-in-out;
  }

  &:hover {
    background-color: var(--button-bg-hover);
    #masked {
      mask-image: url(${LikeActive});
    }
  }

  &:disabled {
    background-color: var(--search-item-hover);
    color: var(--grey);
    #masked {
      background: var(--grey);
      mask-image: url(${LikeInactive});
    }
  }
`

const outlined = css<ButtonProps>`
  ${shared}
  color: var(--bg-active);
  background-color: transparent;
  border: 0.125rem solid var(--button-bg-default);
  box-shadow: 0rem 0.25rem 0.313rem rgba(0, 0, 0, 0.1);

  &:hover {
    color: var(--txt-white);
    background-color: var(--button-bg-default);
  }

  &:disabled {
    border: 0.125rem solid var(--search-item-hover);
    background-color: transparent;
    color: var(--bg-active);
  }
`

export const Button = styled.button<ButtonProps>`
  ${({ variant }) => {
    switch (variant) {
      case 'secondary':
        return secondary
      case 'primary':
        return primary
      case 'outlined':
        return outlined
      case 'icon':
        return icon
    }
  }}
`
