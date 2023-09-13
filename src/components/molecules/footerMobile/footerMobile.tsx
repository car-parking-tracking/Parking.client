import { FC } from 'react'
import { FooterMobileProps } from './footerMobile.types'
import { LinkContainer, FooterLink } from './footerMobile.styles'

import { PAGES } from '@app/routes/routes.types'

export const FooterMobile: FC<FooterMobileProps> = ({ hasAbout }) => {
  return (
    <LinkContainer>
      {hasAbout && <FooterLink to={PAGES.ABOUT}>О продукте</FooterLink>}
      <FooterLink to={`mailto:parkonaft@gmail.com`}>parkonaft@gmail.com</FooterLink>
    </LinkContainer>
  )
}
