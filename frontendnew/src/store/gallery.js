import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const gallerySlice = createSlice({
    initialState:{
        galleries:[],
        imageName:undefined,
        imageUrl:undefined,
        imageDesc:undefined
    },
    reducers:{
        updateGallery:function (state,actions){
            state.galleries = actions.payload.galleriesData;
        },
        updateImageData:function(state,actions){
            let {imageName, imageUrl, imageDesc} = actions.payload;
            if(imageName){
                state.imageName = imageName;
            }
            if(imageDesc){
                state.imageDesc = imageDesc;
            }
            if(imageUrl){
                state.imageUrl = imageUrl;
            }
        }
    },
    name:"gallery"
})
export default gallerySlice;
export const galleryActions = gallerySlice.actions;
export const getGalleryData = () => {
    return async (dispatch) => {
        console.log("here");
        let res = await axios.get("http://localhost:8080/getImages");
        console.log(res);
        if(res.status !== 200 && res.status !== 201){
            return ;
        }
        dispatch(galleryActions.updateGallery({
            galleriesData:res.data.galleriesData
        }));
    } 
}
export const addImage = (imageUrl, imageDesc,imageName) => {
    return async (dispatch) => {
        let res = await axios.post("http://localhost:8080/addImage",{
            imageDesc,
            imageName,
            imageUrl
        });
        if(res.status !== 200 && res.status !== 201){
            return ;
        }
        alert("image added successfully");
        window.location.href="/";
    }
}
export const editImage = (imageUrl, imageDesc,imageName,id) => {
    return async (dispatch) => {
        console.log("hello2");
        let res = await axios.put("http://localhost:8080/editImage",{
            imageDesc,
            imageName,
            imageUrl,
            id
        });
        console.log(res);
        if(res.status !== 200 && res.status !== 201){
            return ;
        }
        alert("image edited successfully");
        window.location.href="/";
    }
}
export const getImageById = (id) => {
    return async (dispatch) => {
        let res = await axios.get(`http://localhost:8080/getImageById?id=${id}`);
        console.log(res);
        if(res.status !== 200 && res.status !== 201){
            return ;
        }
        dispatch(galleryActions.updateImageData({
            ...res.data.imageData
        }));
    }
}
export const deleteImage = (id) => {
    return async (dispatch) => {
        console.log(id);
        let res = await axios.delete(`http://localhost:8080/deleteImage?id=${id}`);
        console.log(res)
        if(res.status !== 200 && res.status !== 201){
            return ;
        }
        dispatch(getGalleryData());
        window.location.href = "/";
    }
}
