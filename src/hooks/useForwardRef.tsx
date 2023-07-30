import { useEffect, useRef, ForwardedRef } from 'react'

/**
 * React hook that can associate local ref inside forwardRef component
 *
 * Taken from https://stackoverflow.com/questions/62238716/using-ref-current-in-react-forwardref
 * @param ref ForwardedRef object that must be associated
 * @param initialValue optional
 * @returns local ref
 */
const useForwardRef = <T,>(ref: ForwardedRef<T>, initialValue = null) => {
  const targetRef = useRef<T>(initialValue)

  useEffect(() => {
    if (!ref) return

    if (typeof ref === 'function') {
      ref(targetRef.current)
    } else {
      ref.current = targetRef.current
    }
  }, [ref])

  return targetRef
}

export default useForwardRef
