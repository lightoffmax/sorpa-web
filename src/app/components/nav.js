'use client';

import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { useState, } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";





export const AcmeLogo = () => {
  return (
    <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};


export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "General", href: "/" },
    { name: "About", href: "/about" },
    { name: "Poem", href: "/poem" },
    { name: "Analytics", href: "/analytics" },
    { name: "System", href: "/system" },
    { name: "Deployments", href: "/deployments" },
    { name: "My Settings", href: "/my-settings" },
    { name: "Team Settings", href: "/team-settings" },
    { name: "Help & Feedback", href: "/help-feedback" },
    { name: "Log Out", href: "/logout" },
    { name: "Log In", href: "/login" },
  ]
  const pathname = usePathname();
  const router = useRouter();
  const {logout, user,} = useAuth();
//   const isLogin = () => {
//     if (user && href === ) {
//         return ({"login": "hidden", "logout": ''})
//     } else { 
//         return ({"login": '', "logout": "hidden"}
//         )}
//   }

  return (   
    <header className="fixed top-0 left-0 w-full">
    <Navbar className="border-b-[1px] flex w-full " isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} >
      <NavbarContent className="sm:hidden" >
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="start" >
        <NavbarBrand>
          {/* <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p> */}
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="start" >
        <NavbarBrand >
          {/* <AcmeLogo />
          <p className="font-bold text-inherit">ACME</p> */}
        </NavbarBrand>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={pathname === '/poem'}>
          <Link color={pathname === '/poem' ? '' : 'foreground'} href="/poem">
            Poem
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === '/'}>
          <Link color={pathname === '/' ? '' : 'foreground'} aria-current="page" href="/">
            General
          </Link>
        </NavbarItem>
        <NavbarItem isActive={pathname === '/about'}>
          <Link color={pathname === '/about' ? '' : 'foreground'} href="/about">
            About us
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className={user ? '' : 'hidden'}>
          <Button onPress={logout} color="danger" href="#" variant="ghost">
            Logout
          </Button>
        </NavbarItem>
        <NavbarItem className={user ? 'hidden' : ''}>
          <Button as={Link} color="primary" href="/login" variant="ghost">
            Login
          </Button>
        </NavbarItem>
        {/* <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem> */}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map(({name, href}, index) => (
          <NavbarMenuItem key={index}>
            <Link
              className="w-full "
              href={href}
              color={
                pathname === href ? "warning" : name === 'Log Out' ? "danger" : "foreground"
              }
              
              size="lg"
            >
              {name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
    </header>
  );
}