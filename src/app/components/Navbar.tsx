import Link from 'next/link';
const Navbar = () => {
  return (
    <header>
      {/* Main Navigation Bar */}<div className="bg-white shadow py-5">
        <div className="container mx-auto px-8 flex justify-between items-center text-lg w-full">

          {/* Brand Name */}
          <h3 className="text-[#A59D84] font-bold  ${montserrat.className} text-[24px] leading-8 tracking-[0.1px] ">Portfolio</h3>

          {/* Navigation Links */}
          <nav className="flex space-x-6 items-center">
            <Link href="/" className="hover:text-[#A59D84]  font-bold text-[14px] ${montserrat.className} text-[#737373] tracking-[0.2px]">
              Home
            </Link>
            <Link href="/About" className="hover:text-[#A59D84] font-bold text-[14px] ${montserrat.className} text-[#737373] tracking-[0.2px]">
              About
            </Link>
            <Link href="/Projects" className="hover:text-[#A59D84]  font-bold text-[14px] ${montserrat.className} text-[#737373] tracking-[0.2px]">
              Projects
            </Link>
            <Link href="/Skills" className="hover:text-[#A59D84] font-bold  text-[14px] ${montserrat.className} text-[#737373] tracking-[0.2px]">
              Skills
            </Link>
            <Link href="/Contact" className="hover:text-[#A59D84] font-bold   text-[14px] ${montserrat.className} text-[#737373] tracking-[0.2px]">
              Contact
            </Link>
            {/* <Link href="/Blog" className="hover:text-[#A59D84] font-bold text-[14px] ${montserrat.className} text-[#737373] tracking-[0.2px]">
              Pages
            </Link> */}
          </nav>

        </div>
      </div>
    </header>
  );
}



export default Navbar;

