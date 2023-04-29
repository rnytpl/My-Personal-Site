import { useState } from 'react'
import Navbar from './components/Navbar'
import { Box, useTheme } from '@mui/material'

function App() {
  const theme = useTheme()
  return (<Box
    width="100vw"
    height="2rem"
    backgroundColor={theme.palette.secondary.main}
    padding="2rem"
    position="relative"
  >
    <Navbar sx={{
      width: "100vw"
    }} />
  </Box>)

}

export default App
