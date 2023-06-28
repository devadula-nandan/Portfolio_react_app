import Navbar from "./navbar"
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