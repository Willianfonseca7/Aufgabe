import React from 'react'
import Button from '@mui/material/Button'

function CounterButton({ label, onClick, variant = 'outlined', color = 'primary' }) {
  return (
    <Button variant={variant} color={color} onClick={onClick}>
      {label}
    </Button>
  )
}

export default CounterButton
