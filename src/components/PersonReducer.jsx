import React from 'react'
import { useImmerReducer } from 'use-immer'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

const initialState = {
  name: '',
  age: '',
  address: '',
}

function reducer(draft, action) {
  switch (action.type) {
    case 'updateField': {
      const { field, value } = action.payload
      draft[field] = value
      break
    }
    case 'reset':
      return initialState
    default:
      return draft
  }
}

function PersonReducer() {
  const [state, dispatch] = useImmerReducer(reducer, initialState)

  return (
    <Card variant="outlined">
      <CardContent>
        <Stack spacing={3}>
          <Stack spacing={0.5}>
            <Typography variant="h5" component="h2">
              useReducer: Objektbasiertes Beispiel
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Felder: Name, Alter, Adresse
            </Typography>
          </Stack>

          <Stack spacing={2}>
            <TextField
              label="Name"
              value={state.name}
              onChange={(e) => dispatch({ type: 'updateField', payload: { field: 'name', value: e.target.value } })}
              fullWidth
            />
            <TextField
              label="Alter"
              value={state.age}
              onChange={(e) => dispatch({ type: 'updateField', payload: { field: 'age', value: e.target.value } })}
              fullWidth
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            />
            <TextField
              label="Adresse"
              value={state.address}
              onChange={(e) =>
                dispatch({ type: 'updateField', payload: { field: 'address', value: e.target.value } })
              }
              multiline
              minRows={2}
              fullWidth
            />
          </Stack>

          <Stack direction="row" spacing={1} justifyContent="flex-end">
            <Button variant="outlined" onClick={() => dispatch({ type: 'reset' })}>
              Zurücksetzen
            </Button>
          </Stack>

          <Stack spacing={0.5}>
            <Typography variant="subtitle2" color="text.secondary">
              Aktueller Zustand
            </Typography>
            <Typography variant="body1">Name: {state.name || '—'}</Typography>
            <Typography variant="body1">Alter: {state.age || '—'}</Typography>
            <Typography variant="body1">Adresse: {state.address || '—'}</Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default PersonReducer
