import { Stack, Typography } from '@mui/material'

import RoundedImage from './RoundedImage'

interface VerticalStackProps {
  title: string
  subTitle: string
}
const VerticalStack = (props: VerticalStackProps) => {
  return (
    <Stack
      spacing={5}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      direction="column">
      <RoundedImage />
      <Typography variant="body1" style={{ fontSize: 24 }}>
        {props.title}
      </Typography>
      <Typography variant="body2" style={{ fontSize: 18 }}>
        {props.subTitle}
      </Typography>
    </Stack>
  )
}

export default VerticalStack
