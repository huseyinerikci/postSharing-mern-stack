import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { createPostAction, updatePostAction } from "../redux/actions/post";
import { toast } from "react-toastify";

const Modal = () => {
  const [postData, setPostData] = useState({
    user: "",
    title: "",
    description: "",
  });
  const dispatch = useDispatch();
  const { modal } = useSelector((state) => state.modal);
  useEffect(() => {
    if (modal?.updateId && modal?.updateData) {
      setPostData({
        user: modal.updateData.user || "",
        title: modal.updateData.title || "",
        description: modal.updateData.description || "",
      });
    } else {
      // Yeni paylaşım yaparken input'lar sıfırlansın
      setPostData({
        user: "",
        title: "",
        description: "",
      });
    }
  }, [modal]);

  const onChangeFunc = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };
  const postCreate = () => {
    if (modal?.updateId) {
      dispatch(updatePostAction(modal?.updateId, postData));
      toast("Update process successful", {
        position: "top-right",
        autoClose: 3000,
      });
    } else {
      dispatch(createPostAction(postData));
      toast("Adding operation successful", {
        position: "top-right",
        autoClose: 3000,
      });
    }
    dispatch({ type: "MODAL", payload: false });
  };
  return (
    <div className="w-full h-screen bg-opacity-50 bg-black/35 fixed top-0 right-0 bottom-0 left-0 z-50 flex items-center justify-center">
      <div className="bg-white w-1/3 p-2 rounded-md">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            {modal?.updateId ? "UPDATE POST" : "SHARE POST"}
          </h1>
          <AiOutlineClose
            onClick={() => dispatch({ type: "MODAL", payload: false })}
            className="cursor-pointer"
            size={25}
          />
        </div>
        <div className="flex flex-col space-y-3 my-4">
          <input
            value={postData.user}
            name="user"
            onChange={onChangeFunc}
            className="input-style"
            type="text"
            placeholder="User"
          />
          <input
            value={postData.title}
            name="title"
            onChange={onChangeFunc}
            className="input-style"
            type="text"
            placeholder="Title"
          />
          <input
            value={postData.description}
            name="description"
            onChange={onChangeFunc}
            className="input-style"
            type="text"
            placeholder="Description"
          />
        </div>
        <div
          onClick={postCreate}
          className="w-full p-2 text-center bg-indigo-600 hover:bg-indigo-800 text-white cursor-pointer"
        >
          {modal?.updateId ? "Update" : "Share"}
        </div>
      </div>
    </div>
  );
};

export default Modal;
