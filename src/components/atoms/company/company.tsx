import React from 'react'
import styled from 'styled-components'

const Company = () => {
  return (
    <WrapCompany>
      <Logo />
      <span>Parkonaft</span>
    </WrapCompany>
  )
}

const Logo = styled.div`
  /* Temporary icon */
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 64 64' font-size='56' font-family='Arial' font-weight='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='64' height='64' rx='10' fill='%230874bb'/%3E%3Ctext y='52' x='12' textLength='40' lengthAdjust='spacingAndGlyphs' fill='white'%3E P %3C/text%3E%3C/svg%3E");
  width: 2rem;
  height: 2rem;
`
const WrapCompany = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 0.5rem;
  align-items: center;
`

export default Company
