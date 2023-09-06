import styled from 'styled-components'
import { Button } from '@components/atoms'

export const Wrapper = styled.section`
  box-sizing: border-box;
  padding: 1.25rem;
  min-height: var(--parking-card-height);
  font-family: Raleway, sans-serif;
`
export const Title = styled.h2`
  font-size: 1rem;
  color: #3c4158;
  font-weight: 600;
  font-style: normal;
  line-height: normal;
  font-variant-numeric: lining-nums proportional-nums;
  font-feature-settings: 'liga' off;
  margin-bottom: 0.75rem;
`
export const InfoList = styled.ul`
  margin-bottom: 1.125rem;
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
`
export const InfoItem = styled.li`
  display: flex;
  flex-direction: column;
`

export const InfoDesc = styled.p`
  font-size: 1rem;
  color: #3c4158;
  font-variant-numeric: lining-nums tabular-nums;
  word-wrap: break-word;
  font-weight: 500;
  line-height: 24px;
`

export const FavoriteBtn = styled(Button)`
  width: 100%;
  border-radius: 0.75rem;
  padding: 0.75rem 0rem;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem;
`
export const DeleteBtn = styled(Button)`
  width: 100%;
  color: #3c4158;
  border-radius: 0.75rem;
  padding: 0.688rem 0rem;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem;
`
