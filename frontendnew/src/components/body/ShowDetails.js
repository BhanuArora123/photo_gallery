import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteImage } from "../../store/gallery";

const ShowDetails = (props) => {

    let { imageUrl, imageName, imageDesc,id } = props;
    const dispatch = useDispatch();
    const deleteImageHandler = () => {
        dispatch(deleteImage(id));
      }
    return (
        <div className="d-flex justify-content-evenly flex-column align-items-center w-100 h-100">
            <h2 className="d-flex justify-content-center">{ imageName }</h2>
            <img className="d-flex justify-content-center w-25 h-25" src={ imageUrl } alt={ imageName }></img>
            <div>{ imageDesc }</div>
            <div className='d-flex p-5 w-50 justify-content-around align-items-center'>
                <Link className='btn btn-primary' to={ `/${id}/edit` } variant="primary">Edit</Link>
                <Button className='btn btn-primary' onClick={ deleteImageHandler } variant="primary">Delete</Button>
            </div>
        </div>
    )
}
export default ShowDetails;