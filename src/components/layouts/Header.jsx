"use client"
import Link from "next/link";
import FormInput from "../elements/FormInput";
import { useEffect } from "react";

const Header = () => {

    useEffect(() => {
        window.addEventListener("scroll",() => {
            const header = document.querySelector("header")

            if (window.top.scrollY > 50) {
                header.classList.add('scroll-header') // Change to your desired background color
            } else {
                header.classList.remove('scroll-header') // Reset to transparent if not scrolled
            }
        })
    }, []);

    return (
        <header id="header" className="w-full  fixed z-30 py-10 px-20 flex justify-between items-center bg-gradient-to-b from-slate-900 to-transparent transition-all duration-150">
            <img src="/logo.png" className="w-52"/>
            <ul className="flex gap-8 text-paragraph">
                <li className="hover:text-paragraph"><Link href="">Home</Link></li>
                <li className="hover:text-paragraph"><Link href="/upcoming">Upcoming</Link></li>
                <li className="hover:text-paragraph"><Link href="/wishlists">Wishlists</Link></li>
            </ul>
            <FormInput type="text" input_id="search" placeholder="Search movies..." withIcon={true}>
                <svg class="w-4 h-4 text-muted" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
            </FormInput>
        </header>
    );
}

export default Header;
