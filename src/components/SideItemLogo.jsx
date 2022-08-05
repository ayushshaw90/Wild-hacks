import { Link } from "react-router-dom"
export default function SideItemLogo() {
    return (
        <div className="px-2 border-b-2 pb-2 border-b-gray-600">
            <Link to="/">
            <div className="text-lime-400 py-4">
                <img src="images/DogeCare.png" alt=""  className="w-32 mx-auto border-4 border-slate-800 rounded-xl"/>
            </div>
            </Link>
            <h1 className="text-yellow-400 text-xl font-semibold whitespace-nowrap text-center">Wild Hacks</h1>
        </div>
    )
}