import { useState } from "react";
import { Button, Form } from "react-bootstrap"
const NewImages = (props) => {
    // let {imageUrl , imageName , imageDesc } = props;
    const [imageUrl , setImageUrl] = useState(props.imageUrl);
    const [imageDesc , setImageDesc] = useState(props.imageDesc);
    const [imageName , setImageName] = useState(props.imageName);
    const imageUrlHandler = (event) => {
        setImageUrl(event.target.value);
    }
    const imageDescHandler = (event) => {
        setImageDesc(event.target.value);
    }
    const imageNameHandler = (event) => {
        setImageName(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        console.log("hello")
        props.onSubmitHandler(imageUrl,imageDesc,imageName);
    }
    return (
        <Form onSubmit={submitHandler} className="w-50 p-5 mx-auto d-flex flex-column justify-content-evenly align-items-start bg-newcol" style={{height:"500px"}}>
            <Form.Group className="mb-3 w-75" controlId="formImageName">
                <Form.Label className="fw-bold">Image Name</Form.Label>
                <Form.Control onChange={imageNameHandler} value={imageName} type="text" placeholder="Enter Image Name" required />
            </Form.Group>

            <Form.Group className="mb-3 w-75" controlId="formImageUrl">
                <Form.Label className="fw-bold">Image Url</Form.Label>
                <Form.Control onChange={imageUrlHandler} value={imageUrl} type="url" placeholder="Image Url" required/>
            </Form.Group>
            <Form.Group className="mb-3 w-75" controlId="formImageDesc">
                <Form.Label className="fw-bold">Image Desc</Form.Label>
                <Form.Control onChange={imageDescHandler} value={imageDesc} type="text" placeholder="Image Desc" />
            </Form.Group>
            <Button variant="primary btn" type="submit">
                Submit
            </Button>
        </Form>
    )
}
export default NewImages;