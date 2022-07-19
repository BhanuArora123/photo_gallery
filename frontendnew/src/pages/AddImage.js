import { useDispatch } from "react-redux";
import NewImages from "../components/body/NewImage"
import NavBar from "../components/header/NavBar"
import { addImage } from "../store/gallery";

const AddImage = () => {
    const dispatch = useDispatch();
    let dummyData = {
        onSubmitHandler:(imgUrl,imgDesc,imgName) => {
            dispatch(addImage(imgUrl,imgDesc,imgName));
        }
    };
    return (
        <>
            <NavBar></NavBar>
            <NewImages {...dummyData}></NewImages>
        </>
    )
}
export default AddImage;