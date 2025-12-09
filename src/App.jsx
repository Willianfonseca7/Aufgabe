import React from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import CounterReducer from './components/CounterReducer.jsx'
import PersonReducer from './components/PersonReducer.jsx'

function App() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Praktische Übung: useReducer
      </Typography>
      <Typography variant="body1" gutterBottom>
        Reducer-Beispiel mit zusätzlichen +5 und -5 Aktionen
      </Typography>
      <Stack spacing={4} sx={{ mt: 3 }}>
        <CounterReducer />
        <PersonReducer />
      </Stack>
    </Container>
  )
}

export default App
