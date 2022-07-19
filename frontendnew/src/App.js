import './App.css';
import HomePage from './pages/HomePage';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import AddImage from './pages/AddImage';
import DetailsPage from './pages/DetailsPage';
import EditImage from './pages/EditPage';
function App() {
  return (
    <>
      {/* <HomePage></HomePage> */}
      <BrowserRouter>
        <Routes>
          <Route path='/new' element={<AddImage></AddImage>} />
          <Route path='/show/:id' element={<DetailsPage></DetailsPage>} />
          <Route path='/:id/edit' element={<EditImage></EditImage>} />
          {/* <Route path='/delete/:id' element={<div></div>} /> */}
          <Route path='/' element={<HomePage></HomePage>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
