import React, { createContext, useEffect, useState } from 'react'

export const AppearanceContext = createContext(
  {} as {
    isDarkMode: boolean
  }
)

export const AppearanceProvider: React.FC = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    window.matchMedia('prefers-color-scheme').onchange = (e) => {
      console.log(e.matches)
    }
    console.log('appearance provider loaded')
    console.log(window.matchMedia('prefers-color-scheme'))
  }, [])

  return (
    <AppearanceContext.Provider
      value={{
        isDarkMode,
      }}
    >
      {children}
    </AppearanceContext.Provider>
  )
}
