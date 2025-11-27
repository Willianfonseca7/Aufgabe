import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import ButtonsShowcase from './components/Button.jsx'

function App() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        MUI-Bibliothek konfiguriert
      </Typography>
      <Typography variant="body1" gutterBottom>
        Wenn Sie diese Schaltflächen sehen, wurde das Material UI erfolgreich installiert.
      </Typography>
      <ButtonsShowcase />
    </Container>
  )
}

export default App

