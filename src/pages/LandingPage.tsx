import { Button, Container, Grid, Stack, Typography } from '@mui/material'
import VerticalStack from 'components/VerticalStack'
import { TbApi } from 'react-icons/tb'

type HeroInterface = {
  title?: any
  subtitle?: any
  buttonText?: any
  imageURL?: any
}
const Hero = ({ title, subtitle, buttonText, imageURL }: HeroInterface) => {
  return (
    <Stack
      style={{
        height: '95vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      direction="row">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Stack spacing={10} direction="column">
            {title || (
              <Typography style={{ fontWeight: 'bold' }} variant="h2">
                See what others are
                <br /> doing in covid <br />
                research
              </Typography>
            )}
            {subtitle || (
              <Typography style={{ fontSize: 26 }} variant="body2">
                Discover useful insights about the
                <br />
                latest research and discoveries
                <br />
                around covid-19
              </Typography>
            )}
            <Button
              size="large"
              style={{
                backgroundColor: 'black',
                color: 'white',
                width: '50%',
              }}
              variant="contained">
              {buttonText || 'Book a demo'}
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <Stack direction="column">
            <img
              alt="map example"
              src={
                imageURL ||
                'https://1fykyq3mdn5r21tpna3wkdyi-wpengine.netdna-ssl.com/wp-content/uploads/2018/10/image3.gif'
              }
              style={{ objectFit: 'contain', marginTop: 50 }}
            />
          </Stack>
        </Grid>
      </Grid>
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
      <Grid
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        container
        spacing={4}>
        {resources.map((resource) => (
          <Grid item xs={6}>
            <Stack direction="column" style={{ borderWidth: 1 }}>
              <VerticalStack {...resource} />
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Stack>
  )
}

const LandingPage = () => {
  console.log('hello landing here')
  return (
    <Container disableGutters>
      <Hero />
      <ResourcesSection />
      <Hero
        title={
          <Typography style={{ fontWeight: 'bold' }} variant="h2">
            Research Analytics
          </Typography>
        }
        subtitle={
          <Typography style={{ fontSize: 26 }} variant="body2">
            Discover useful insights about the
            <br />
            latest research and discoveries
            <br />
            around covid-19
          </Typography>
        }
        buttonText="Go There"
        imageURL="https://cdn.dribbble.com/users/2146089/screenshots/10012370/dashboard_f_converted_1__converted.png?compress=1&resize=400x300"
      />
    </Container>
  )
}

export default LandingPage
