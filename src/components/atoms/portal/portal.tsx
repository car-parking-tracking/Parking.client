import { FC, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { PortalProps } from './portal.types'

export const Portal: FC<PortalProps> = ({ children, getHTMLElementId }) => {
  const mount = document.getElementById(getHTMLElementId)
  const el = document.createElement('div')

  useEffect(() => {
    if (mount) mount.appendChild(el)
    return () => {
      if (mount) mount.removeChild(el)
    }
  }, [el, mount])

  if (!mount) return null
  return createPortal(children, el)
}
