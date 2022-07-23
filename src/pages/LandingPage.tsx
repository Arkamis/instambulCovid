import { Button, Container, Stack, Typography } from '@mui/material'
import VerticalStack from 'components/VerticalStack'
import { TbApi } from 'react-icons/tb'

const Hero = () => {
  return (
    <Stack direction="row">
      <Stack direction="column">
        <Typography variant="h2">
          See what is going on with covid researhs
        </Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos debitis
          corrupti et, optio voluptates culpa quod sapiente eaque neque
          quisquam! Veniam odio quod quo sequi maxime, quam perspiciatis officia
          commodi!
        </Typography>
        <Button>Let&apos;s start</Button>
      </Stack>
    </Stack>
  )
}

const resources = [
  {
    title: 'Connect with REST API',
    subTitle: 'Usa nuestra API REST de data centralizada',
    avatarLogo: <TbApi />,
  },
  {
    title: 'Conviertete en un contribuidor',
    subTitle: 'Contacta con nosotros para asociarnos o trabajar juntos!',
    avatarLogo: <TbApi />,
  },
]

const ResourcesSection = () => {
  return (
    <Stack display="row">
      {resources.map((resource) => (
        <VerticalStack {...resource} />
      ))}
    </Stack>
  )
}

const LandingPage = () => {
  console.log('hello landing here')
  return (
    <Container disableGutters>
      <Hero />
      <ResourcesSection />
    </Container>
  )
}

export default LandingPage
