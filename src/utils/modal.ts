// Utility that can be used to catch outside click events
export default function hideOnClickOutside(element: HTMLElement, callback: () => void) {
  const outsideClickListener = (event: MouseEvent) => {
    const target = event.target as HTMLElement
    if (target && !element.contains(target) && isVisible(element)) {
      // console.log('close')
      removeClickListener()
      callback()
    }
  }

  const removeClickListener = () => {
    document.removeEventListener('click', outsideClickListener)
  }

  document.addEventListener('click', outsideClickListener)
}

const isVisible = (element: HTMLElement) => !!element && !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length)
