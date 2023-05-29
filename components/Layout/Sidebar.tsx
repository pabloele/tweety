import {BsHouseFill, BsBellFill} from "react-icons/bs"
import { FaUser } from "react-icons/fa";
import { BiLogOut} from "react-icons/bi"
import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import SidebarTweetButton from "./SidebarTweetButton";

const Sidebar = () => {
    const items = [
        {

            label: "Inicio",
            href: "/",
            icon: BsHouseFill
        },
        {
            label: "Notificaciones",
            href: "/notifications",
            icon: BsBellFill
        },
        {
            label: "Perfil",
            href: "/users/123",
            icon: FaUser
        }, 
        
          
 ]
    return (
    <div className="col-span-1 pr-4 md:pr-6">
        <div className="flex flex-col items-end ">
                <div className="space-y-2 lg:w-[230px]">
                    <SidebarLogo />
                    {items.map((item) => {
                    
                        return (
                            <SidebarItem
                                key={item.href}
                                href={item.href}
                                label={item.label}
                                icon={item.icon}
                            />
                        );
                    })}
                    <SidebarItem onClick={() => { }} icon={ BiLogOut} label="Salir" href="/"/>
                    <SidebarTweetButton />
                </div> 
        </div>
    </div>
  )
}

export default Sidebar
