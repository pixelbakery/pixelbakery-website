function Shimmer(w: number, h: number) {
  const shimmerEffect = (w: number, h: number) => `
    <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="g">
          <stop stop-color="rgb(210, 207, 218)" offset="5%" />
          <stop stop-color="#eee" offset="33%" />
          <stop stop-color="rgb(210, 207, 218)" offset="66%" />
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="rgb(210, 207, 218)" />
      <rect id="r" width="${w * 2}" height="${h}" fill="url(#g)" />
      <animate xlink:href="#r" attributeName="x" from="-${
        w * 2
      }" to="${w}" dur="3s" repeatCount="indefinite"  />
    </svg>`

  const toBase64 = (str: string) => {
    return typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str)
  }
  return `data:image/svg+xml;base64,${toBase64(shimmerEffect(w, h))}`
}

export default Shimmer
