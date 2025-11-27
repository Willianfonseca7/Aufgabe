import React from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

function ButtonsShowcase() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained">Primário</Button>
      <Button variant="outlined">Secundário</Button>
      <Button variant="text">Tertiary</Button>
    </Stack>
  )
}

export default ButtonsShowcase

