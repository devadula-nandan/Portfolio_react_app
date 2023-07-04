import React, { useState, useEffect } from 'react';
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout({ children, firstName }) {

    return (
        <>
            <Navbar firstName={firstName} />
            <div className="">
                {children}
            </div>
            {/* <p>footer</p> */}
            <Footer />

        </>

    )

}