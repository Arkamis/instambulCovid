const RoundedImage = () => {
  const altrandom = Math.floor(Math.random() * 101)
  const entalt = `rounded image${altrandom.toString()}`
  return (
    <div style={{ width: 120, height: 120, borderRadius: 60 }}>
      <img
        style={{ width: 120, height: 120, borderRadius: 60 }}
        alt={entalt}
        src="https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc="
      />
    </div>
  )
}

export default RoundedImage
