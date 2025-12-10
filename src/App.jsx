import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import BasicUserList from './components/BasicUserList.jsx'
import CounterReducer from './components/CounterReducer.jsx'
import PersonReducer from './components/PersonReducer.jsx'
import withAuth from './hocs/withAuth.jsx'
import withLogging from './hocs/withLogging.jsx'
import compose from './utils/compose.js'

const users = [
  { id: 1, name: 'Ada Lovelace', email: 'ada@example.com' },
  { id: 2, name: 'Alan Turing', email: 'alan@example.com' },
  { id: 3, name: 'Grace Hopper', email: 'grace@example.com' },
]

const enhance = compose(withLogging, withAuth)
const ProtectedLoggedUserList = enhance(BasicUserList)

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false)

  return (
    <Container sx={{ py: 6 }}>
      <Stack spacing={6}>
        <Box>
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
        </Box>

        <Box>
          <Typography variant="h4" component="h2" gutterBottom>
            Eigene HOCs
          </Typography>
          <Typography variant="body1" gutterBottom>
            withAuth prüft, ob der Aufrufer isAuthenticated auf true setzt. Ist das der Fall,
            wird die eingebettete Komponente gerendert; andernfalls erscheint ein Fehlerhinweis
            mit Link zu /login. withLogging schreibt vor dem Rendern den Text „Rendered with
            &#123;props&#125;“ in die Konsole. BasicUserList ist unten mit beiden HOCs kombiniert.
          </Typography>

          <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
            <Button variant="contained" onClick={() => setIsAuthenticated((prev) => !prev)}>
              {isAuthenticated ? 'Logout simulieren' : 'Login simulieren'}
            </Button>
            <Typography variant="body2" color="text.secondary">
              Aktueller Status: {isAuthenticated ? 'eingeloggt' : 'nicht eingeloggt'}
            </Typography>
          </Stack>

          <ProtectedLoggedUserList isAuthenticated={isAuthenticated} users={users} />
        </Box>
      </Stack>
    </Container>
  )
}

export default App
