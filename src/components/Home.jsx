import { useState } from "react";

export default function Home() {
    const [phone, setPhone] = useState("")
    const phoneApi = 'https://wildhacks-api.herokuapp.com/addphone/'
    const fetchPost = async (e)=>{
        console.log(phone)
        e.preventDefault();
        const responce = await fetch(phoneApi, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                phno: phone
            }),
        })
        responce.json().then(data=>{
            console.log(data)
            let message = data.message;
            alert(message)
        })
    }
    return (
        <div style={{maxWidth: "600px"}} className="mx-auto">
            <div className="py-2 rounded-lg text-gray-200  bg-gradient-to-r from-gray-700 to-zinc-500 px-1">
                <h1 className="text-4xl text-center font-semibold">Exotic Pet care</h1>
                <h5 className="text-center text-amber-300 pt-4">Find all information about exotic pets</h5>
            </div>
            <div className="py-4">
                <ul className="text-2xl font-semibold text-slate-600">
                    <li className="px-2 py-1 rounded-r-lg bg-gradient-to-r from-rose-600 to-orange-600 text-white w-fit my-2 border-l-8 border-red-700">Find doctors</li>
                    <li className="px-2 py-1 rounded-r-lg bg-gradient-to-r from-rose-600 to-orange-600 text-white w-fit my-2 border-l-8 border-red-700">Find Information about exotic pets</li>
                    <li className="px-2 py-1 rounded-r-lg bg-gradient-to-r from-rose-600 to-orange-600 text-white w-fit my-2 border-l-8 border-red-700">Get animal care services</li>
                </ul>
            </div>
            <div>
                <div className="px-2 py-4 text-sky-600 font-semibold text-center text-xl ">Subscribe our daily feeds</div>
                <form className="flex" onSubmit={(e)=>{fetchPost(e)}}>
                    <label htmlFor="mobile" className="whitespace-nowrap px-2 my-auto h-full bg-gradient-to-r from-green-600 to-teal-600 py-2 rounded-l-lg text-white">
                        Mobile number
                    </label>
                    <input type="text" className="w-full py-1  px-2" value={phone} onChange={(e)=>{
                        setPhone(e.target.value)
                    }}/>
                    <button className="bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-2 rounded-r-lg">Submit</button>
                </form>
            </div>
        </div>
    )
}