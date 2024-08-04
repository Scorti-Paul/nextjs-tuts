"use client"
import Link from "next/link"
import { usePathname } from "next/navigation";

const Nav = ({ children }: { children: React.ReactNode }) => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
  ]
  const pathname = usePathname()
  return (
    <>
      <nav className="flex justify-between mx-24">
        <div>
          LOGO
        </div>
        <ul className="flex">
          {navLinks.map((link: any) => {
            const isActive = pathname.startsWith(link.href)
            return (
              <li className="p-1" key={link.name}>
                <Link href={link.href}
                  className={isActive ? "p-1 text-indigo-500" : "p-1"}
                >
                  {link.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      {children}
    </>
  )
}

export default Nav