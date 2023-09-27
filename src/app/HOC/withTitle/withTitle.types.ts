export interface WithTitleProps {
  title: string
  count?: number
  hideBackButton?: boolean
  onBtnClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
  initials?: string
}
