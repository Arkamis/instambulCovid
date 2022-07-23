import { Avatar, AvatarProps } from '@mui/material'

const Logo = (props: AvatarProps) => (
  <Avatar
    alt="Logo"
    src="https://rayo.s3.us-west-1.amazonaws.com/RayoLogo__1__auto_x2-removebg-preview.png"
    {...props}
    style={{ width: 55, height: 55 }}
  />
)

export default Logo
