import React from 'react'

export const ScrollUpContext = React.createContext(false)
export const useScrollUpContext = () => React.useContext(ScrollUpContext)
