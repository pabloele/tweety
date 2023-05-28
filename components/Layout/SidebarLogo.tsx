import { useRouter } from "next/router"
const SidebarLogo = () => {
  const router = useRouter();
  return (
    <div className='relative rounded-full h-14'>
      <h1>Hola LOGO</h1>
    </div>
  )
}

export default SidebarLogo
