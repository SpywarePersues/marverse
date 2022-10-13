import react from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function ContainerBlock({ children, title }){
    return(
        <div className="gradient-bg min-h-screen text-gray-100">
            <div className="py-5">
            <title>{title ? title + ' - Marverse' : 'Marverse'}</title>
                <Navbar />
                { children }
                <Footer />
            </div>
        </div>
    )
}