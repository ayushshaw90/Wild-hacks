import Navbar from "./Navbar";
import ContentPlaceholder from "./ContentPlaceholder";
const MainComponent = ({ isvisible, toggleside, content }) => {
    return (
        <div className="w-full min-h-screen bg-neutral-400" style={isvisible?{ paddingLeft: "160px" }:{}}>
            <Navbar toggleside={toggleside} isvisible={isvisible}></Navbar>
            <div className="p-4">

                <ContentPlaceholder content={content}></ContentPlaceholder>
            </div>
        </div>
    )
}
export default MainComponent;