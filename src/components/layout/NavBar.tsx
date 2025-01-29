import { Link } from "react-router-dom";

export default function NavBar(){

    return (
        <div className="bg-green-500 flex justify-center p-1">
            <Link className="p-1 border border-amber-300 m-1" to='/'>TODO</Link>
            <Link className="p-1 border border-amber-300 m-1" to='/'>Tasks</Link>
            <Link className="p-1 border border-amber-300 m-1" to='/login'>Login</Link>
        </div>
    )
}