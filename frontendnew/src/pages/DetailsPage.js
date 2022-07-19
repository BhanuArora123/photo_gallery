import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import ShowDetails from "../components/body/ShowDetails"
import NavBar from "../components/header/NavBar"
import { getImageById } from "../store/gallery";

const DetailsPage = () => {
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
        id
    };
    return (
        <>
            <NavBar></NavBar>
            <ShowDetails {...dummyData}></ShowDetails>
        </>
    )
}
export default DetailsPage;