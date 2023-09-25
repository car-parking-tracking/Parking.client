import styled from 'styled-components'
import CheckboxActive from '@assets/icons/checkbox-icon.svg'

export const Container = styled.div`
  position: relative;
  display: flex;
  gap: 0.5rem;
  margin: 1.5rem 0;
`
export const Label = styled.label`
  transition: 0.3s ease all;
  display: flex;
  align-self: flex-start;
  cursor: pointer;

  ::before {
    content: '';
    background-color: var(--new-grey-light);
    width: 1.5rem;
    height: 1.5rem;
    border: none;
    border-radius: 0.375rem;
  }
`
export const Checkbox = styled.input`
  position: absolute;
  opacity: 0;
  z-index: -1;

  :checked {
    & + Label::before {
      content: url(${CheckboxActive});
      background-color: var(--new-bg-active);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`
export const Text = styled.p`
  color: var(--new-dark);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1rem;
  max-width: 17.68rem;
  letter-spacing: 0.031rem;
`
export const Span = styled.span`
  margin-top: 0.438rem;
  font-size: 0.813rem;
  color: rgba(221, 76, 30, 1);
  min-height: 1rem;
  display: block;
`
export const Link = styled.span`
  color: var(--new-bg-active);
`
