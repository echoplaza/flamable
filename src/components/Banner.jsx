// Banner.jsx
import sawdust from '../assets/sawdust.png'

export default function Banner() {
  return (
    <div
      className="w-full h-[33vh] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${sawdust})` }}
    />
  )
}
