import { Link } from "react-router-dom";
export default function Navbar({toggleside, isvisible}) {
    const toggleSide = ()=>{
        toggleside(!isvisible);
    }
    return (
        <div className="py-2 bg-slate-700 flex px-2 ">
            <button onClick={toggleSide} class="text-amber-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
            </button>
            
            <h1 className="text-amber-400 text-center my-auto w-full text-2xl"><Link to="/">DogeCare</Link></h1>
            
        </div>
    )
}