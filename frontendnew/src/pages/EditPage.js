import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import NewImages from "../components/body/NewImage"
import NavBar from "../components/header/NavBar"
import { editImage, getImageById } from "../store/gallery";

const EditImage = () => {
    const {id} = useParams();
    const gallery = useSelector(state => state.gallery);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getImageById(id));
    }, []);
    let dummyData = {
        imageUrl:gallery.imageUrl,
        imageName:gallery.imageName,
        imageDesc:gallery.imageDesc,
        onSubmitHandler:(imgUrl,imgDesc,imgName) => {
            dispatch(editImage(imgUrl,imgDesc,imgName,id));
        }
    };
    return (
        <>
            <NavBar></NavBar>
            <NewImages {...dummyData}></NewImages>
        </>
    )
}
export default EditImage;