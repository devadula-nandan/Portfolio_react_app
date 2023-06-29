import { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';

const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
]

export default function Navbar() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    const blurEl = () => {
        const elem = document.activeElement;
        if (elem) {
            elem?.blur();
        }
    }

    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme);
        localStorage.setItem("theme", theme);
    }, [theme]);
    return (
        <div className="navbar bg-base-100 fixed top-0 border-b-2 border-base-200 z-10 p-2 md:p-4">
            <div className="container mx-auto">
                <div className="flex-1">
                    <button className="ml-2 transition-all normal-case text-3xl md:text-3xl lg:text-4xl xl:text-5xl  font-extrabold text-base-content font-['Righteous'] group">Nandan<span className="text-accent group-hover:text-primary ">.</span></button>
                </div>
                <div className="flex gap-3 md:gap-8 lg:gap-10 xl:gap-14">
                    <div className="hidden md:flex items-center gap-3 md:gap-8 lg:gap-10 xl:gap-14">
                        <a href="#home" className="text-accent font-extrabold">HOME</a>
                        <a href="#about" className=" font-extrabold">ABOUT</a>
                        <a href="http://" className=" font-extrabold">EXPERIENCE</a>
                        <a href="http://" className=" font-extrabold">WORKS</a>
                        <a href="http://" className=" font-extrabold">CONTACT</a>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-sm btn-primary m-1 group pr-2 gap-1" title="theme">{theme}
                            <svg height="12" width="12" viewBox="0 0 1060.000000 1060.000000" fill="currentColor" className="group-focus:rotate-180 transition-all">
                                <g transform="translate(0.000000,1060.000000) scale(0.100000,-0.100000)" stroke="none">
                                    <path d="M1100 8345 c-270 -55 -490 -224 -611 -470 -72 -148 -92 -246 -86 -415 3 -78 12 -160 22 -195 24 -89 97 -231 157 -307 79 -100 4025 -4444 4092 -4506 107 -97 254 -169 404 -198 102 -19 351 -18 450 2 153 31 306 108 412 207 59 56 4016 4416 4078 4495 60 76 133 218 157 307 9 33 19 119 22 192 7 169 -15 278 -87 421 -89 177 -220 307 -395 392 -127 61 -202 80 -346 87 -267 13 -490 -82 -686 -292 -48 -51 -828 -911 -1733 -1909 -905 -998 -1647 -1814 -1650 -1814 -3 0 -745 816 -1650 1814 -905 998 -1685 1858 -1733 1909 -187 200 -402 296 -654 294 -54 0 -127 -7 -163 -14z" />
                                </g>
                            </svg>
                        </label>

                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box max-h-[90vh] flex-row overflow-auto">
                            {themes.map((t) => (
                                <li className="w-full" key={t}> <button className={"" + (t === theme ? "active" : "")} onClick={() => { setTheme(t); blurEl(); }}>{t}</button> </li>
                            ))}
                        </ul>
                    </div>
                    <div className="drawer drawer-end w-auto md:hidden items-center">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content flex items-center">
                            {/* Page content here */}
                            <label htmlFor="my-drawer" className="btn btn-primary btn-circle h-8 w-8 min-h-0 md:h-12 md:w-12 md:min-h-12">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                            </label>
                        </div>
                        <div className="drawer-side z-10">
                            <label htmlFor="my-drawer" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-full max-w-[280px] h-full bg-base-200 text-base-content">
                                {/* Sidebar content here */}
                                <li onClick={blurEl}><button onClick={() => { document.getElementById("my-drawer").checked = false }} className="ml-auto p-1 text-white bg-primary rounded-circle h-8 w-8 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </button></li>
                                <li>
                                <a href="#home" className="text-accent font-extrabold">HOME</a>
                        <a href="#about" className=" font-extrabold">ABOUT</a>
                        <a href="http://" className=" font-extrabold">EXPERIENCE</a>
                        <a href="http://" className=" font-extrabold">WORKS</a>
                        <a href="http://" className=" font-extrabold">CONTACT</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
