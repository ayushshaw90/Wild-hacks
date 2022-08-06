function Caretaker(){
    return(
        <div>
            <img src="images/doctor1.webp" alt="" className="w-80 mx-auto rounded-md" />
            <div className="pt-4">
                <ul className="bg-gradient-to-r from-teal-500 to-sky-500 p-2 text-gray-100 rounded-lg text-xl font-semibold">
                    <li className="py-2">Name: <span>Ayush Shaw</span></li>
                    <li className="py-2">Speaciality: <span>Cat</span></li>
                    <li className="py-2">Country: <span>India</span></li>
                    <li className="py-2">Charge: <span>$12/hr</span></li>
                    
                </ul>
            </div>
        </div>
    )
}
export default function AnimalCare(){
    return(
        <div>
            <h1 className="text-center text-2xl font-bold text-gray-200 py-2 bg-gradient-to-tr from-rose-500 to-rose-600 rounded-md mb-2">Search animal care</h1>
            {/* <form className="flex justify-around py-4">
                <div className="my-auto">
                    <label htmlFor="animal" className="text-lg px-2 text-slate-600">Select Animal</label>
                    <select name="animal" id="animal" className="rounded py-1 bg-zinc-100 px-2">
                        <option value="Dog">Dog</option>
                        <option value="Cat">Cat</option>
                    </select>
                </div>
                <div className="my-auto">
                    <label htmlFor="breed" className="text-lg px-2 text-slate-600">Select breed</label>
                    <select name="breed" id="breed" className="rounded py-1 bg-zinc-100 px-2">
                        <option value="Dog 1">Dog 1</option>
                    </select>
                </div>
                <button className="bg-green-500 hover:bg-green-600 active:bg-lime-500 text-white px-2 py-1 rounded-md my-auto">Search</button>
            </form> */}
            <Caretaker></Caretaker>
        </div>
    )
}