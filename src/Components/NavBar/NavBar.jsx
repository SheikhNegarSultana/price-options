import { useState } from "react";
import Link from "../Link/Link";
import { FaBars  } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const NavBar = () => {

    const[open , setOpen] = useState(true);


    const routes = [
        { id: 1, name: "Home", path: "/" }, 
        { id: 2, name: "About", path: "/about" }, 
        { id: 3, name: "Services", path: "/services" }, 
        { id: 4, name: "Contact", path: "/contact" }, 
        { id: 5, name: "Blog", path: "/blog" }
    ];

    return (
        <nav className="mt-[4rem] ">

        <div className=" mb-[1rem] md:hidden " onClick={() => setOpen(!open)}>
        {
            open === true ? <FaBars ></FaBars> : <RxCross2></RxCross2>
        }
        </div>


        <ul className=" md:flex gap-6 ">
            {
                routes.map( route => 
                <Link 
                key={routes.id}
                route={route}></Link>)
            }

        </ul>

        </nav>

    );
};

export default NavBar;