import { useState } from "react"

function IndividualDiet({ diet }) {
    return (
        <li>{diet}</li>
    )
}

function IndividualAnimal({ name, diet, characteristics, best, notbest, image}) {
    let fname = image.substring(1, image.length)
    return (
        <div>
            <div className="py-4">
                <h1 className="text-2xl block text-center py-4 bg-gradient-to-r from-cyan-600 to-green-600 rounded-lg text-gray-300 font-semibold">{name}</h1>
            </div>
            <img src={`images/${fname}`} alt="" className="w-80 mx-auto rounded-md" />
            {/* food habits */}
            <div>
                <h1 className="text-2xl font-semibold text-cyan-700">Food habits</h1>
                <ul>
                    {/* use higher order function to iterate through loop */}
                    {
                        diet.map((item) => {
                            return (<IndividualDiet diet={item}></IndividualDiet>)
                        })
                    }
                </ul>
            </div>
            <div>
                <h1 className="text-2xl font-semibold text-cyan-700">Characteristics</h1>
                <ul>
                    {
                        characteristics.map((item) => {
                            <IndividualDiet diet={item}></IndividualDiet>
                        })
                    }
                </ul>
            </div>
            <div>
                <h1 className="text-2xl font-semibold text-cyan-700">What is best for your pet</h1>
                <p>{best}</p>
            </div>
            <div>
                <h1 className="text-2xl font-semibold text-cyan-700">What is not good for your pet</h1>
                <p>{notbest}</p>
            </div>
        </div>
    )
}
//continue here
export default function Animal() {
    let animalComponent;
    const dogAPI = 'http://localhost:3001/getdog/'
    const catAPI = 'http://localhost:3001/getcat'
    const fishAPI = 'http://localhost:3001/getfish'
    const birdAPI = 'http://localhost:3001/getbird'
    const [dataobj, setdataobj] = useState({
        found: 'false',
        name: '',
        best: '',
        characteristics: [],
        diet: [],
        image: '',
        notBest: ''
    })
    const [name, setName] = useState("");
    const [best, setBest] = useState("");
    const [characteristics, setCharacteristics] = useState(
        []
    );
    const [diet, setDiet] = useState( [] );
    const [image, setimage] = useState("");
    const [notBest, setNotBest] = useState("");

    const [searched, setSearched] = useState(false);

    const fetchPost = async (nameanimal, type) => {
        console.log(nameanimal)
        
        let api = dogAPI;
        if (type === 'bird') {
            api = birdAPI;
        } else if (type === 'cat') {
            api = catAPI
        } else if (type === 'fish') {
            api = fishAPI
        }
        const responce = await fetch(api, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: nameanimal
            }),
        });
        console.log(responce)
        responce.json().then(dataob=>{
            let data = dataob.responce[0];
            console.log("json", data);
            setName(data.name);
            setBest(data.best);
            setNotBest(data.notBest);
            setCharacteristics(data.characteristics);
            setDiet(data.diet);
            setimage(data.image);
            console.log("dataobj",dataobj)
            setSearched(true);
            //printing
            console.log("name", name);
            console.log("best", best);
            console.log("notBest", notBest);
            console.log("charcteristics", characteristics);
            console.log("diet", diet)
            console.log("image", image)
            
        })

    }
    
    let contentFetched = "";
    return (
        <div>
            <h1 className="text-center text-2xl font-bold text-gray-800 pb-4">Select your animal</h1>
            <div>
                <h1 className="text-2xl font-semibold px-2 py-2">Dog</h1>
                <ul>
                    <li>
                        <button className="animal-list" onClick={()=>{
                            fetchPost('Labrador Retriever', 'dog').then(()=>1)
                        }}>
                            Labrador Retriever
                        </button>
                        <button className="animal-list">
                            Doberman
                        </button>
                        <button className="animal-list">
                            Beagle
                        </button>
                        <button className="animal-list">
                            Pug
                        </button>
                        <button className="animal-list">
                            Rottweiter
                        </button>
                    </li>
                </ul>
            </div>
            <div>
                <h1 className="text-2xl font-semibold px-2 py-2">Cat</h1>
                <ul>
                    <li>
                        <button className="animal-list">
                            Exotic Shorthair Cats
                        </button>
                        <button className="animal-list">
                            Ragdoll Cats
                        </button>
                        <button className="animal-list">
                            British Shorthair
                        </button>
                        <button className="animal-list">
                            Pug
                        </button>
                        <button className="animal-list">
                            Rottweiter
                        </button>
                    </li>
                </ul>
            </div>
            <div>
                <h1 className="text-2xl font-semibold px-2 py-2">Fish</h1>
                <ul>
                    <li>
                        <button className="animal-list">
                            Betta
                        </button>
                        <button className="animal-list">
                            Goldfish
                        </button>
                        <button className="animal-list">
                            British Shorthair
                        </button>
                        <button className="animal-list">
                            Pug
                        </button>
                        <button className="animal-list">
                            Rottweiter
                        </button>
                    </li>
                </ul>
            </div>
            <div>
                <h1 className="text-2xl font-semibold px-2 py-2">Bird</h1>
                <ul>
                    <li>
                        <button className="animal-list">
                            Budgerigar
                        </button>
                        <button className="animal-list">
                            Cockateil
                        </button>
                        <button className="animal-list">
                            British Shorthair
                        </button>
                        <button className="animal-list">
                            Pug
                        </button>
                        <button className="animal-list">
                            Rottweiter
                        </button>
                    </li>
                </ul>
            </div>
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
            <div>
                {/* DisplayAnimal  */}
                {/* use api to fetch image url */}
                {/* use api to fetch data  */}
                {searched ? <IndividualAnimal name={name} characteristics = {characteristics} best = {best} notbest = {notBest} diet = {diet}image = {image}></IndividualAnimal> : <p></p>}
            </div>
        </div>
    )
}