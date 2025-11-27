import React from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

function ButtonsShowcase() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained">Primär</Button>
      <Button variant="outlined">Sekundär</Button>
      <Button variant="text">Tertiär</Button>
    </Stack>
  )
}

export default ButtonsShowcase

