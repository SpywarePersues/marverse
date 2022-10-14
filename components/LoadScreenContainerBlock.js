import react from "react";
import Footer from "./Footer";

export default function ContainerBlock({ children, title }){
    return(
        <div className="gradient-bg min-h-screen text-gray-100">
            <div className="py-5">
            <title>{title ? title + ' - Marverse' : 'Marverse'}</title>
                { children }
            </div>
        </div>
    )
}