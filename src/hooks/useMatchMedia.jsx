import { useEffect, useState } from "react"

const breakpoint = (minmax) => ({
  xsmall: `(${minmax}-width: 425px)`,
  small: `(${minmax}-width: 595px)`,
  medium: `(${minmax}-width: 959px)`,
  large: `(${minmax}-width: 1439px)`,
  xlarge: `(${minmax}-width: 1900px)`,
})

const useMatchMedia = (mediaQuery) => {
  const [isMatching, setIsMatching] = useState(() => {
    const initialWatcher = window.matchMedia(mediaQuery)
    return initialWatcher.matches
  })

  useEffect(() => {
    const watcher = window.matchMedia(mediaQuery)

    setIsMatching(watcher.matches)

    const listener = (matches) => {
      setIsMatching(matches.matches)
    }

    watcher.addEventListener("change", listener)

    return () => {
      return watcher.removeEventListener("change", listener)
    }
  }, [mediaQuery])

  return isMatching
}

export { useMatchMedia, breakpoint }
