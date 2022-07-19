import CardBox from "./CardBox";
import { Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getGalleryData } from "../../store/gallery";
const ViewPictures = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGalleryData());
  }, []);
  const gallery = useSelector(state => state.gallery).galleries;
  return (
    <Row xs={ 3 } md={ 3 } className="g-4">
      {

        gallery.length === 0 ?
          <h2 className="d-flex justify-content-center w-100 h-25 align-items-center">No Images Found</h2> :
          gallery.map(data => {
            return (
              <Col className="d-flex justify-content-center align-items-center">
                <CardBox key={ data._id } { ...data }></CardBox>
              </Col>
            )
          })

      }
    </Row>
  )
}
export default ViewPictures;