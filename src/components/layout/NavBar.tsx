// import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
export default function NavBar(){

    return (
        
       <nav className="max-w-7xl mx-auto h-16 flex items-center gap-3 px-5">
        <div className="flex items-center gap-2">
            <Link to='/' className="">task </Link>
            <Link to='/login' className="">task2 </Link>
            <Link to='' className="">task3 </Link>
        </div>
       </nav>
    )
}