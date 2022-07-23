import { createTheme, ThemeProvider } from '@mui/material'
import { green, purple } from '@mui/material/colors'
import Router from 'routes'

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  )
}

export default App
