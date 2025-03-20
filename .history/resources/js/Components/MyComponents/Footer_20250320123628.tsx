import React from "react";
const Footer = () => {
    return (
        <>
            <footer className="mt-6 absolute py-4 flex flex-wrap items-center 2xl:justify-between xl:justify-between lg:justify-between w-full md:justify-between sm:justify-center">
                <p className="text-gray-500 text-sm">© 2024, made with <i className="fa fa-heart"></i> by <a href="mrcode-gmb.github.io" className="font-bold">Mrcode</a> for a better web.</p> &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                <ul className="flex items-center text-sm text-gray-500 gap-4">
                    <li>
                        <a href="">About Us</a>
                    </li>
                    <li>
                        <a href="">Contact Us</a>
                    </li>
                    <li>
                        <a href="">Blog</a>
                    </li>
                </ul>
            </footer>
        </>
    )
}

export default Footer;