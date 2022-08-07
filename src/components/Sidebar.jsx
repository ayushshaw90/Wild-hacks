import SideItemLogo from "./SideItemLogo"
import { useState } from "react"
import SideItem from "./SideItem"
import { Link } from "react-router-dom"

const Sidebar = ({ isvisible, sideitem}) => {
    if(sideitem === "home"){
        sideitem="Home"
    }
    else if(sideitem === "animal"){
        sideitem = "Animal"
    }
    else if(sideitem === "doctor"){
        sideitem = "Doctor"
    }else if(sideitem === "animalcare"){
        sideitem = "Animal Care"
    }
    const [selected, setSelected] = useState(sideitem)
    
    const menu = [
        {
            text: "Home",
            link: "home",
            svg: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
            </svg>)
        },
        {
            text: "Animal",
            link: "animal",
            svg: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
            </svg>)
        },
        {
            text: "Doctor",
            link: "doctor",
            svg: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-prescription2" viewBox="0 0 16 16">
            <path d="M7 6h2v2h2v2H9v2H7v-2H5V8h2V6Z"/>
            <path fill-rule="evenodd" d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v10.5a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 14.5V4a1 1 0 0 1-1-1V1Zm2 3h8v10.5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5V4ZM3 3V1h10v2H3Z"/>
          </svg>)
        },
        {
            text: "Grooming",
            link: "animalcare",
            svg: (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shop-window" viewBox="0 0 16 16">
            <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z"/>
          </svg>)
        }
    ]
    const visible="h-screen bg-slate-700 fixed"
    const invisible = "h-screen bg-slate-700 hidden fixed"
    return (
        <div className={isvisible?visible:invisible} style={{width:"160px"}}>
            <SideItemLogo></SideItemLogo>
            {
                menu.map(item => {
                    let txt=item.text;
                    return (
                        <SideItem text={item.text} selected={selected} setSelect = {setSelected} svg={item.svg} linkto={item.link}></SideItem>
                    )
                })
            }
        </div>
    )
}
export default Sidebar