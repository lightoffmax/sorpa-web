
import Image from "next/image";
import {
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Link} from '@nextui-org/react'
import Table from "./components/table";
import MyTable from "./components/table";

export default function Home() {
  return (
    <div className="flex flex-col overflow-y-auto min-h-screen items-center justify-items-center min-h-screen pb-10 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-grow w-full mx-auto gap-8 row-start-2 items-center sm:items-start">
        <MyTable/>
        
      </main>
      <footer className="flex gap-10 pt-[15px] pb-[5px] w-full mx-auto border-t-1 items-center justify-center">
        <a
          className="flex  items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
