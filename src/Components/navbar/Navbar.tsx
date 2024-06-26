'use client'
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { useAppContext } from "@/context/AlumniContext";

const NavBarVariants = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      stiffness: 100
    },
    x: -1000
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      staggerChildren: 0.1,
      delayChildren: 0.1,
      when: "beforeChildren"
    },
    x: 0
  }
};

const navItemVariants = {
  hidden: {
    opacity: 0,
    x: -10,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1
  },
  hover: {
    scale: 1.1
  }
};

// const links = ["Community", "Giving", "Program & Event", "College", "About Us"];
const links = [
  {
    name: 'Alumni',
    link: '/alumni'
  },
  {
    name: 'College',
    link: "https://sitmng.ac.in"
  },
  {
    name: 'News',
    link: '/#news'
  },
  {
    name: 'Career Opportunities',
    link: '/#news'
  },
  {
    name: 'Tech Talks',
    link: '/#news'
  }
];

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const {isAdmin,isLogin}=useAppContext();
  const handleLogout=()=>{
    'use client';
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
  const NavItem = ({ link, href }: { link: string, href: string }) => (
    <motion.li variants={navItemVariants} whileHover='hover' className="my-auto">
      <Link href={href} >{link}</Link>
    </motion.li>
  );

  return (
    <>
      <nav>
        <motion.div
          variants={navItemVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.01, type: "spring", stiffness: 100, ease: "easeInOut", staggerChildren: 0.01, delayChildren: 0.01, when: "beforeChildren" }}
          className="nav-container bg-white h-16 md:h-20 w-full flex flex-row justify-between">
          <motion.div className="md:w-1/3 flex flex-row">
            <motion.img variants={navItemVariants} src="/assets/logo.jpeg" className="h-full md:ml-3 " alt="logo" />
            <Link href={'/'}>  <motion.p variants={navItemVariants} className="text-xl poppins-bold my-auto  text-center">Srinivas Institute <br /> of Technology</motion.p></Link>
          </motion.div>
          <div className="w-2/3 hidden md:block my-auto">
            <ul className="flex flex-row justify-around h-full ">
              {!isAdmin && links.map(link => <NavItem key={link.name} href={link.link} link={link.name} />)}
           
             {!isLogin && <li >
                <Link href={'/login'}> <motion.button variants={navItemVariants} whileHover='hover' className="btn p-3 rounded-md border-black border px-5 mr-3">Sign In</motion.button></Link>
                <Link href={'/signup'}> <motion.button variants={navItemVariants} whileHover='hover' className="btn p-3 rounded-md bg-black text-white">Join Now</motion.button></Link>
              </li>}
              {isLogin &&<li >
            <a onClick={handleLogout}>    <Link href={'/api/v1/logout'}> <motion.button variants={navItemVariants} whileHover='hover' className="btn p-3 rounded-md bg-black text-white">Logout</motion.button></Link>
            </a>        </li>}
            </ul>
          </div>
          <motion.div variants={navItemVariants} className="text-end w-12 justify-end md:hidden my-auto">
            <svg onClick={() => setShowMenu(!showMenu)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000" id="menu"><g><g><circle cx="4" cy="12" r="1"></circle><rect width="14" height="2" x="7" y="11" rx=".94" ry=".94"></rect><rect width="18" height="2" x="3" y="16" rx=".94" ry=".94"></rect><rect width="18" height="2" x="3" y="6" rx=".94" ry=".94"></rect></g></g></svg>
          </motion.div>
        </motion.div>
      </nav>
      <motion.nav variants={NavBarVariants} initial="hidden" animate={showMenu ? "visible" : "hidden"}>
        <div className="h-screen md:hidden  fixed top-0 w-full  z-10" style={{ backgroundColor: 'rgba(0,0,0,0.9)' }}></div>
        <div className="h-screen md:hidden w-full bg-white absolute z-30 top-0">
          <div className="flex flex-row justify-end">
            <span className="text-end font-extrabold bg-gray-300 rounded-full m-3  p-3 text-white" onClick={() => setShowMenu(!showMenu)}><svg height="15px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="12px" xmlns="http://www.w3.org/2000/svg"><path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" /></svg></span>
          </div>
          <ul className="flex flex-col mt-12 gap-5 divide-y" >
            {!isAdmin && links.map(link => <NavItem key={link.name} href={link.link} link={link.name} />)}
            {!isLogin && <NavItem href="/login" link="Login" />}
            {!isLogin &&<NavItem href="/signup" link="Sign UP" />}
            {isLogin &&<a onClick={handleLogout}> <NavItem href="/api/v1/logout" link="Logout" /> </a>}
          </ul>
        </div>
      </motion.nav>
    </>
  );
}