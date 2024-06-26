'use client';
import { IconFacebook, IconTwitterSquare, IconInstagram, IconYoutube, IconSquareWhatsapp } from "../FooterIcons/Icons";
import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = {
    initial: {
        scale: 1
    },
    hover: {
        scale: 1.1,
    }
}

const socialIcons = [
    { Icon: IconYoutube },
    { Icon: IconInstagram },
    { Icon: IconTwitterSquare },
    { Icon: IconFacebook },
    { Icon: IconSquareWhatsapp },
];

const footerLinks = ["About Us", "Giving", "Gallery", "Team"];


export default function Footer() {

    return (
        <>
            <footer className="footer bg-black  text-white">
                <div className="container mx-auto px-6 flex flex-col ">
                    <div className="w-full text-center my-6 flex flex-row">
                        <div className="w-1/3">&nbsp;</div>
                        <div className="flex flex-row justify-between md:justify-evenly w-2/3 md:w-1/3 " >
                            {socialIcons.map(({ Icon }, index) => (
                                <motion.span key={index} variants={navLinks} whileHover='hover'><Icon /></motion.span>
                            ))}
                        </div>
                        <div className="w-1/3">&nbsp;</div>
                    </div>
                    <div className=" w-10/12 flex flex-col  md:flex-row mx-auto justify-between ">
                        <div className="w-2/3"></div>
                        <div className="w-full content-center">
                            <nav>
                                <ul className="flex flex-row justify-between text-center">
                                    {footerLinks.map((link, index) => (
                                        <motion.li key={index} variants={navLinks} whileHover="hover">
                                            <Link href="/">{link}</Link>
                                        </motion.li>
                                    ))} </ul>
                            </nav>
                        </div>
                        <div className=" text-center md:text-end my-3 md:w-2/3">
                            <motion.button whileHover="hover" variants={navLinks} className="btn bg-white text-black rounded-md p-3 font-semibold">Contact Us</motion.button>
                        </div>
                    </div>
                </div>
                <hr className="border-white  md:mx-28 mx-10" />
                <p className="text-center my-8 font-thin text-xs">
                    &copy; {new Date().getFullYear()} All Rights Reserved | Srinivas Institute of Technology
                </p>
                <div className=" md:mt-16">&nbsp;</div>
            </footer>
        </>
    )
}