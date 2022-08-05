import Animal from "./Animal"
import Doctor from "./Doctor"
import AnimalCare from "./AnimalCare"
import Home from "./Home"
export default function ContentPlaceholder({content}){
    let content2;
    if(content === 'animalcare'){
        content2 =<AnimalCare />
    }else if(content === 'animal'){
        content2 = <Animal />
    }else if(content === 'doctor'){
        content2 = <Doctor />
    }else{
        content2 = <Home></Home>
    }
    return(
        <div className="bg-neutral-300 rounded-md p-2">
            {
                
            }
            {/* <Animal></Animal> */}
            {/* <Doctor></Doctor> */}
            {/* <AnimalCare></AnimalCare> */}
            {content2}
        </div>
    )
}