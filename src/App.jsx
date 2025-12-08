import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import CounterReducer from './components/CounterReducer.jsx'

function App() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Praktische Übung: useReducer
      </Typography>
      <Typography variant="body1" gutterBottom>
        Reducer-Beispiel mit zusätzlichen +5 und -5 Aktionen
      </Typography>
      <CounterReducer />
    </Container>
  )
}

export default App
