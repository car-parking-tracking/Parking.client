import { Description } from '@components/atoms'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
`
export const Notification = styled(Description)`
  color: var(--new-dark);
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 0.031rem;

  @media (max-width: 768px) {
    margin-top: 230px;
    padding: 0 21px;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: 0.5px;
  }
`
export const List = styled.div`
  display: flex;
  width: 26.875rem;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  gap: 1.5rem;
  overflow-y: auto;
  padding-bottom: 0.375rem;

  ::-webkit-scrollbar {
    width: 0.4375rem;
  }

  ::-webkit-scrollbar-track {
    background: #fff;
  }

  ::-webkit-scrollbar-thumb {
    background: #878787;
    border-radius: 1rem;
    border: 0.063rem solid #fff;
  }

  @media (max-width: 48rem) {
    width: 100%;

    ::-webkit-scrollbar {
      width: 0;
    }
  }
`
