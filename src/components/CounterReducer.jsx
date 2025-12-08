import React, { useReducer } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import CounterButton from './CounterButton.jsx'

const initialState = { count: 0 }

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'incrementByFive':
      return { count: state.count + 5 }
    case 'decrementByFive':
      return { count: state.count - 5 }
    case 'reset':
      return initialState
    default:
      return state
  }
}

function CounterReducer() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const actions = [
    { label: '-5', type: 'decrementByFive' },
    { label: '-1', type: 'decrement' },
    { label: 'Reset', type: 'reset', variant: 'contained', color: 'secondary' },
    { label: '+1', type: 'increment' },
    { label: '+5', type: 'incrementByFive' },
  ]

  return (
    <Card variant="outlined">
      <CardContent>
        <Stack spacing={3} alignItems="center">
          <Stack spacing={1} alignItems="center">
            <Typography variant="h5" component="h2">
              useReducer Counter
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Aktionen: ±1, ±5, Reset
            </Typography>
          </Stack>

          <Typography variant="h3" component="p" sx={{ fontWeight: 'bold' }}>
            {state.count}
          </Typography>

          <Stack direction="row" spacing={1} justifyContent="center">
            {actions.map(({ label, type, variant, color }) => (
              <CounterButton
                key={`${type}-${label}`}
                label={label}
                variant={variant}
                color={color}
                onClick={() => dispatch({ type })}
              />
            ))}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default CounterReducer
