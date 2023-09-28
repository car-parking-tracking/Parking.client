import { Description } from '@components/atoms'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  gap: 0.625rem;

  @media (max-width: 48rem) {
    justify-content: space-between;
    height: 100%;
    margin-top: 1.6875rem;
  }
`

export const AboutDescription = styled(Description)`
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  @media (max-width: 48rem) {
    font-size: 0.875rem;
  }
`
export const AboutSelected = styled.strong`
  font-weight: 600;
  display: inline-block;
`
export const AboutImage = styled.img`
  width: 13.875rem;
  height: 14.3125rem;
  align-self: center;
  margin-bottom: 1.625rem;

  @media (max-width: 48rem) {
    width: 11.25rem;
    height: 11.625rem;
    margin-bottom: 4.8125rem;
  }
`
export const AboutLink = styled(Link)`
  display: none;

  @media (max-width: 48rem) {
    display: inline-block;
    align-self: center;
    margin-top: auto;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem;
    color: var(--new-dark);
  }
`
