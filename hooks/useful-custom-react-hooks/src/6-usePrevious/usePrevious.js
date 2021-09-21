import { useRef } from "react"

/**
 * Stores previous value
 * @param {*} value 
 * @returns 
 */
export default function usePrevious(value) {
  const currentRef = useRef(value)
  const previousRef = useRef()

  if (currentRef.current !== value) {
    previousRef.current = currentRef.current
    currentRef.current = value
  }

  return previousRef.current
}
