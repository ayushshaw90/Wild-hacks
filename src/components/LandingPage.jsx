import LandingFooter from "./LandingFooter"
import { Link } from "react-router-dom"
export default function LandingPage() {
    return (
        <div className="mx-auto w-full">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 min-h-screen" style={{ maxWidth: "800px" }}>
                <div className="my-auto px-2 py-4">
                    
                    <h1 className="text-4xl font-bold py-2">DogeCare</h1>
                    <h1 className="text-4xl font-bold text-teal-500 py-2">Pet Health Care</h1>
                    <p className="py-2">
                        <li className="py-1 list-none">Everything for your pet's health and wellbeing</li>
                        <li className="py-1 list-none">Pets make everything better, even Mondays!</li>
                        <li className="py-1 list-none">When you've a furry family member, every day is paw-ty!</li>
                    </p>
                    <div className="py-4">
                        <Link to="/home">
                        <button className="bg-teal-500 hover:bg-teal-600 active:bg-green-600 duration-200 ease-in-out mr-2 px-4 py-2 text-white rounded-full">Get Started</button>
                        </Link>
                        {/* <button className="bg-gray-300 hover:bg-gray-200 active:bg-neutral-200 ease-in-out duration-200 ml-2 px-4 py-2 text-gray-700 rounded-full">Donate Us</button> */}
                        
                    </div>
                </div>
                <div className="my-auto p-4 md:p-0">
                    <img src="images/landingImage.jpg" alt="" className="drop-shadow-xl rounded-md" />
                </div>
            </div>
            <div>
            <img src="images/dogecare.png" alt="Doge Care" className="w-64 rounded-lg mx-auto" />
                <h1 className="py-8 mx-auto text-4xl text-center text-red-500 font-bold">Services Offered by us</h1>
                <div className="grid md:grid-cols-3 grid-cols-1 w-fit mx-auto gap-8 py-4">
                    <div className="bg-gray-200 w-96 hover:bg-neutral-300 duration-300 ease-in-out py-4 px-2 rounded-lg hover:drop-shadow-lg">
                        <h1 className="text-2xl text-red-500 font-semibold pb-4 mx-auto w-fit ">Know your pet</h1>
                        <h2 className="text-center text-gray-500">Get data about your pet</h2>
                        <Link to="/animal">
                        <button className="bg-gradient-to-r from-red-600 to-rose-500 mx-auto w-40 block px-2 py-1 rounded-full text-white my-8 hover:to-red-600">Get info</button>
                        </Link>
                    </div>
                    <div className="bg-gray-200 w-96 hover:bg-neutral-300 duration-300 ease-in-out py-4 px-2 rounded-lg hover:drop-shadow-xl">
                        <h1 className="text-2xl text-red-500 font-semibold pb-4 mx-auto w-fit ">Virtual Doctor</h1>
                        <h2 className="text-center text-gray-500">Get appointment of a virtual doctor for your pet</h2>
                        <Link to="/doctor">
                        <button className="bg-gradient-to-r from-red-600 to-rose-500 mx-auto w-40 block px-2 py-1 rounded-full text-white my-8 hover:to-red-600">Book Appointment</button>
                        </Link>
                    </div>
                    <div className="bg-gray-200 w-96 hover:bg-neutral-300 duration-300 ease-in-out py-4 px-2 rounded-lg hover:drop-shadow-xl">
                        <h1 className="text-2xl text-red-500 font-semibold pb-4 mx-auto w-fit ">Animal Care</h1>
                        <h2 className="text-center text-gray-500">Get animal care services delivered to your doorste </h2>
                        <Link to="/animalcare">
                        <button className="bg-gradient-to-r from-red-600 to-rose-500 mx-auto w-40 block px-2 py-1 rounded-full text-white my-8 hover:to-red-600">Book now</button>
                        </Link>
                    </div>
                </div>
            </div>
            <LandingFooter></LandingFooter>
        </div>
    )
}