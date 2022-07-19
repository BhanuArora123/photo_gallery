import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteImage } from '../../store/gallery';

function CardBox(props) {
  let {imageName: name ,imageDesc: desc, imageUrl : imgUrl,_id:id} = props;
  const dispatch = useDispatch();
  const deleteImageHandler = () => {
    dispatch(deleteImage(id));
  }
  const showDetailsHandler = () => {
    window.location.href = "/show/"+id;
  }
  return (
    <Card  className="w-75 mt-5 cursor-pointer" id={id}>
      <Card.Img onClick={showDetailsHandler} variant="top" src={imgUrl} alt={name} />
      <Card.Body className='cursor-pointer'>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {
            desc
          }
        </Card.Text>
        <div className='d-flex w-100 justify-content-around align-items-center'>
          <Link className='btn btn-primary w-25' to={`/${id}/edit`} variant="primary">Edit</Link>
          <Button className='btn btn-primary' onClick={deleteImageHandler} variant="primary">Delete</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardBox;