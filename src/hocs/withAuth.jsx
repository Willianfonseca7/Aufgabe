import React from 'react'
import Alert from '@mui/material/Alert'
import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

function withAuth(WrappedComponent) {
  function ComponentWithAuth(props) {
    const { isAuthenticated, ...rest } = props

    if (isAuthenticated) {
      return <WrappedComponent {...rest} />
    }

    return (
      <Alert severity="error" variant="outlined">
        <Stack spacing={1}>
          <Typography variant="subtitle1" component="p">
            Zugriff verweigert: Bitte zuerst einloggen.
          </Typography>
          <Link href="/login" underline="hover">
            Gehe zu /login
          </Link>
        </Stack>
      </Alert>
    )
  }

  ComponentWithAuth.displayName = `withAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`

  return ComponentWithAuth
}

export default withAuth
