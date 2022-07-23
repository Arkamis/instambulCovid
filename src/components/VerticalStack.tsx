import { Avatar, Stack, Typography } from '@mui/material'
import { ReactNode } from 'react'

interface VerticalStackProps {
  title: string
  subTitle: string
  avatarLogo: ReactNode
}
const VerticalStack = (props: VerticalStackProps) => {
  return (
    <Stack direction="column">
      <Avatar sx={{ width: 32, height: 32 }}>{props.avatarLogo}</Avatar>
      <Typography variant="body1">{props.title}</Typography>
      <Typography variant="body2">{props.subTitle}</Typography>
    </Stack>
  )
}

export default VerticalStack
