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
  padding: 0.75rem 1rem;
  border: none;
`
const secondary = css<ButtonProps>`
  ${shared}
  background-color: var(--grey);

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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.5rem;

  #masked {
    width: 1.25rem;
    height: 1.25rem;
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

const filter = css<ButtonProps>`
  ${shared}
  color: var(--grey);
  font-weight: 500;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid #e0e0e0;
  border-radius: 0;
  padding: 0.375rem 1.125rem;
  min-width: 8.688rem;

  &:hover {
    border-bottom: 0.063rem solid var(--button-bg-hover);
  }

  &:disabled {
    color: var(--bg-active);
    border-bottom: 0.063rem solid var(--button-bg-default);
  }
`

const text = css<ButtonProps>`
  ${shared}
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1rem;
  letter-spacing: 0.031rem;
  color: var(--button-bg-hover);
  background: transparent;
  padding: 0;

  &:hover {
    color: var(--button-bg-hover);
  }

  &:disabled {
    color: var(--button-bg-default);
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
      case 'filter':
        return filter
      case 'text':
        return text
    }
  }}
`
