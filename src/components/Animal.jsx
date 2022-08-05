

function IndividualAnimal(){
    return(
        <div>
            <div className="py-4">
            <h1 className="text-2xl block text-center py-4 bg-gradient-to-r from-cyan-600 to-green-600 rounded-lg text-gray-300 font-semibold">Cat1</h1>
            </div>
            <img src="images/cat1.jpg" alt="" className="w-80 mx-auto rounded-md"/>
            {/* food habits */}
            <div>
                <h1 className="text-2xl font-semibold text-cyan-700">Food habits</h1>
                <ul>
                    {/* use higher order function to iterate through loop */}
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, nobis.</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, nobis.</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, nobis.</li>
                    <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, nobis.</li>
                </ul>
            </div>
        </div>
    )
}

export default function Animal() {
    return (
        <div>
            <h1 className="text-center text-2xl font-bold text-gray-800">Select your animal</h1>
            <form className="flex justify-around py-4">
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
            </form>
            <div>
                {/* DisplayAnimal  */}
                {/* use api to fetch image url */}
                {/* use api to fetch data  */}
                <IndividualAnimal></IndividualAnimal>
            </div>
        </div>
    )
}