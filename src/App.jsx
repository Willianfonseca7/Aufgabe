import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import ButtonsShowcase from './components/Button.jsx'

function App() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Biblioteca MUI configurada
      </Typography>
      <Typography variant="body1" gutterBottom>
        Se você está vendo este botão, o Material UI foi instalado com sucesso.
      </Typography>
      <ButtonsShowcase />
    </Container>
  )
}

export default App

