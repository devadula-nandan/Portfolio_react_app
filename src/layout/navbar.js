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
            <div className="flex-none">
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
            </div>
            </div>
        </div>
    )
}
