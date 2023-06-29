import Navbar from "./Navbar"
export default function Layout({ children }) {
return (
        <>
            <Navbar/>
            <div className="">
                {children}
            </div>
            {/* <p>footer</p> */}
            {/* <Footer/> */}

        </>

    )

}