import ViewPictures from "../components/body/ViewPictures";
import NavBar from "../components/header/NavBar";

const HomePage = (props) => {
    return (
        <div className="w-100">
            <NavBar></NavBar>
            <ViewPictures></ViewPictures>
        </div>
    )    
}
export default HomePage;