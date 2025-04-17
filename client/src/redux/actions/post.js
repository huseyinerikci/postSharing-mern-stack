import axios from "axios";
import { toast } from "react-toastify";

export const getPostsAction = () => async (dispatch) => {
  try {
    const { data } = await axios.get("http://localhost:5000/getPosts");

    dispatch({ type: "GET_POSTS", payload: data });
  } catch (error) {
    const errMsg = error?.response?.data?.msg;
    toast(errMsg, {
      position: "top-right",
      autoClose: 3000,
    });
  }
};
export const createPostAction = (postData) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "http://localhost:5000/createPost",
      postData
    );

    dispatch({ type: "CREATE_POST", payload: data });
    // Yeni eklenen postlar hemen gelsin
    dispatch(getPostsAction());
  } catch (error) {
    const errMsg = error?.response?.data?.msg;
    toast(errMsg, {
      position: "top-right",
      autoClose: 3000,
    });
  }
};
export const updatePostAction = (id, postData) => async (dispatch) => {
  try {
    const { data } = await axios.patch(
      `http://localhost:5000/updatePost/${id}`,
      postData
    );

    dispatch({ type: "UPDATE_POST", payload: data });
  } catch (error) {
    const errMsg = error?.response?.data?.msg;
    toast(errMsg, {
      position: "top-right",
      autoClose: 3000,
    });
  }
};
export const deletePostAction = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:5000/deletePost/${id}`);

    dispatch({ type: "DELETE_POST", payload: id });
  } catch (error) {
    const errMsg = error?.response?.data?.msg;
    toast(errMsg, {
      position: "top-right",
      autoClose: 3000,
    });
  }
};
