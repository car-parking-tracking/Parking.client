import { FC } from 'react'
import { AboutDescription, Wrapper, AboutSelected, AboutImage } from './about.styles'
import { withTitle } from '@app/HOC'
import about from '@assets/images/illAbout.svg'
import { FooterMobile } from '@components/molecules'

export const About: FC = () => {
  return (
    <Wrapper>
      <AboutImage src={about} alt="about" />
      <AboutDescription variant="modal">
        <AboutSelected>Parkonaft</AboutSelected> – это удобный сервис по онлайн-поиску парковки на каждый день.
      </AboutDescription>

      <AboutDescription variant="modal">Просто введи адрес в поисковой строке и на карте ты увидишь варианты парковок</AboutDescription>

      <AboutDescription variant="modal">Узнай в режиме реального времени доступную информацию о парковке и наличие свободных мест.</AboutDescription>

      <AboutDescription variant="modal">Ты можешь добавлять в избранное часто используемые парковки.</AboutDescription>

      <AboutDescription variant="modal">
        Паркуйся быстрее вместе с <AboutSelected>Parkonaft</AboutSelected>.
      </AboutDescription>
      <FooterMobile hasAbout={false} />
    </Wrapper>
  )
}

const AboutWithTitle = withTitle(About)

export const AboutWithTitleWrapper: FC = ({ ...props }) => (
  <AboutWithTitle
    title="О продукте
"
    hideBackButton={true}
    {...props}
  />
)
