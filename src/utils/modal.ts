// Utility that can be used to catch outside click events
export default function hideOnClickOutside(element: HTMLElement, callback: () => void) {
  const outsideClickListener = (event: MouseEvent) => {
    const target = event.target as HTMLElement
    if (target && !element.contains(target) && isVisible(element)) {
      event.stopPropagation()
      removeClickListener()
      callback()
    }
  }

  const removeClickListener = () => {
    document.removeEventListener('click', outsideClickListener)
  }

  document.addEventListener('click', outsideClickListener)
}

// Idea taken from: https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js
export const isVisible = (element: HTMLElement) => !!element && !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length)
