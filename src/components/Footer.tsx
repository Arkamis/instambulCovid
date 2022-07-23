import { Divider } from '@mui/material'

const Footer = () => {
  return (
    <div
      style={{
        height: 100,
        backgroundColor: '#fff',
        marginTop: 40,
        color: '#161616',
      }}>
      <Divider style={{ background: '#494949', borderColor: '#ccc' }} />
      <div
        style={{
          marginTop: 35,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <div>
          <p style={{ textAlign: 'center' }}>
            Istanbul APP all rights reserved
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
