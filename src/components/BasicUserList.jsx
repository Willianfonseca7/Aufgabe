import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'

function BasicUserList({ users }) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6" component="h2" gutterBottom>
          BasicUserList
        </Typography>
        <Divider sx={{ mb: 1.5 }} />
        <List dense>
          {users.map((user) => (
            <ListItem key={user.id} disablePadding>
              <ListItemText primary={user.name} secondary={user.email} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  )
}

export default BasicUserList
