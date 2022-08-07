import { useState } from "react"
import Character from "./Character"
import Loading from "./Loading"

function IndividualDiet({ diet }) {
    return (
        <li className="py-1">{diet}</li>
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
                <h1 className="text-2xl font-semibold text-cyan-700 py-4">Food habits</h1>
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
                <h1 className="text-2xl font-semibold text-cyan-700 py-4">Characteristics</h1>
                <ul>
                    {
                        characteristics.map((item) => {
                            return(
                            <Character text={item}></Character>
                            )
                        })
                    }
                </ul>
            </div>
            <div>
                <h1 className="text-2xl font-semibold text-cyan-700 py-4">What is best for your pet</h1>
                <p>{best}</p>
            </div>
            <div>
                <h1 className="text-2xl font-semibold text-cyan-700 py-4">What is not good for your pet</h1>
                <p>{notbest}</p>
            </div>
        </div>
    )
}
//continue here
export default function Animal() {
    const dogAPI = 'https://wildhacks-api.herokuapp.com/getdog/'
    const catAPI = 'https://wildhacks-api.herokuapp.com/getcat'
    const fishAPI = 'https://wildhacks-api.herokuapp.com/getfish'
    const birdAPI = 'https://wildhacks-api.herokuapp.com/getbird'

    const [load, setLoad] = useState(false)
    const [name, setName] = useState("");
    const [best, setBest] = useState("");
    const [characteristics, setCharacteristics] = useState([]);
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
        setLoad(true)
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
            setCharacteristics(data.characteristics);
            setName(data.name);
            setBest(data.best);
            setNotBest(data.notBest);
            console.log("characteristics", data.characteristics.join('#'))
            setDiet(data.diet);
            setimage(data.image);
            setSearched(true);
            //printing
            console.log("name", name);
            console.log("best", best);
            console.log("notBest", notBest);
            console.log("charcteristics", characteristics);
            console.log("diet", diet)
            console.log("image", image)
            setLoad(false)
        })

    }
    
    return (
        <div>
            <h1 className="text-center text-2xl font-bold text-gray-800 pb-4">Select your animal</h1>
            <div>
                <h1 className="text-2xl font-semibold px-2 py-2">Dog</h1>
                <ul>
                    <li>
                        <button className="animal-list" onClick={async ()=>{
                            await fetchPost('Labrador Retriever', 'dog')
                        }}>
                            Labrador Retriever
                        </button>
                        <button className="animal-list" onClick={async ()=>{
                            await fetchPost('Doberman', 'dog')
                        }}>
                            Doberman
                        </button>
                        <button className="animal-list" onClick={async ()=>{
                            await fetchPost('Beagle', 'dog')
                        }}>
                            Beagle
                        </button>
                        <button className="animal-list" onClick={async ()=>{
                            await fetchPost('Pug', 'dog')
                        }}>
                            Pug
                        </button>
                        <button className="animal-list" onClick={async ()=>{
                            await fetchPost('Rottweiler', 'dog')
                        }}>
                            Rottweiler
                        </button>
                    </li>
                </ul>
            </div>
            <div>
                <h1 className="text-2xl font-semibold px-2 py-2">Cat</h1>
                <ul>
                    <li>
                        <button className="animal-list" onClick={async ()=>{
                            await fetchPost('Exotic Shorthair Cats', 'cat')
                        }}>
                            Exotic Shorthair Cats
                        </button>
                        <button className="animal-list" onClick={async ()=>{
                            await fetchPost('Ragdoll Cats', 'cat')
                        }}>
                            Ragdoll Cats
                        </button>
                        <button className="animal-list" onClick={async ()=>{
                            await fetchPost('British Shorthair', 'cat')
                        }}>
                            British Shorthair
                        </button>
                        <button className="animal-list" onClick={async ()=>{
                            await fetchPost('Persian Cats', 'cat')
                        }}>
                            Persian Cats
                        </button>
                        <button className="animal-list" onClick={async ()=>{
                            await fetchPost('Maine Coon Cats', 'cat')
                        }}>
                            Maine Coon Cats
                        </button>
                    </li>
                </ul>
            </div>
            <div>
                <h1 className="text-2xl font-semibold px-2 py-2">Fish</h1>
                <ul>
                    <li>
                        <button className="animal-list" onClick={async ()=>{
                            await fetchPost('Betta', 'fish')
                        }}>
                            Betta
                        </button>
                        <button className="animal-list" onClick={async ()=>{
                            await fetchPost('Goldfish', 'fish')
                        }}>
                            Goldfish
                        </button>
                        <button className="animal-list" onClick={async ()=>{
                            await fetchPost('Guppies', 'fish')
                        }}>
                            Guppies
                        </button>
                    </li>
                </ul>
            </div>
            <div>
                <h1 className="text-2xl font-semibold px-2 py-2">Bird</h1>
                <ul>
                    <li>
                        <button className="animal-list" onClick={async ()=>{
                            await fetchPost('Budgerigar', 'bird')
                        }}>
                            Budgerigar
                        </button>
                        <button className="animal-list" onClick={async ()=>{
                            await fetchPost('Cockatiel', 'bird')
                        }}>
                            Cockatiel
                        </button>
                        <button className="animal-list" onClick={async ()=>{
                            await fetchPost('Canary', 'bird')
                        }}>
                            Canary
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
                {load ? (<Loading></Loading>): ""}
                {searched ? (<IndividualAnimal name={name} characteristics = {characteristics} best = {best} notbest = {notBest} diet = {diet} image = {image}></IndividualAnimal>) : <p></p>}
            </div>
        </div>
    )
}