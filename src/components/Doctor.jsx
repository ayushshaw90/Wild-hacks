function IndividualDoctor(){
    return(
        <div>
            <img src="images/doctor1.webp" alt="" className="w-80 mx-auto rounded-lg" />
            <div className="pt-4">
                {/* Details of doctor  */}
                <ul className="text-xl p-2 rounded-lg bg-gradient-to-r from-teal-500 to-sky-500 text-gray-200 font-semibold">
                    <li className="py-2">Name: <span>Dr. Ankit Kiran</span></li>
                    <li className="py-2">Type: <span>Veternary doctor</span></li>
                    <li className="py-2">Experience: <span>6 years</span></li>
                    <li className="py-2">Phone: <span><a href="tel:+916625487632">+916625487632</a></span></li>
                    <li className="py-2">Email: <span><a href="mailto:ayushshaw@gmail.com">ankit@dogecare.com</a></span></li>
                    
                </ul>
            </div>
        </div>
    )
}
function Doctor(){
    return(
        <div>
            <h1 className="text-center text-2xl font-bold text-gray-200 py-2 bg-gradient-to-r from-red-500 to-rose-600 rounded-md mb-2">View our doctors</h1>
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
            <IndividualDoctor></IndividualDoctor>
        </div>
    )
}

export default Doctor