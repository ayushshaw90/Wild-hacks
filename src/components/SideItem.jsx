import { Link } from "react-router-dom";
export default function SideItem({ svg, text, selected, setSelect, linkto }) {
    const normalItem = "px-4 text-lime-500 py-2 border-l-4 border-slate-700 cursor-pointer font-semibold ease-in-out duration-100 flex";
    const selectedItem = "px-4 text-yellow-400 py-2 border-l-4 rounded border-teal-600 bg-gray-600 cursor-pointer font-semibold ease-in-out duration-100 flex"
    return (
        <Link to={`/${linkto}`}>
        <div className={selected === text ? selectedItem : normalItem} onClick={() => {
            setSelect(text)
        }}>
            
            <div className="flex my-auto pr-2">
                {svg}
            </div>
            {text}
            
        </div>
        </Link>
    )
}