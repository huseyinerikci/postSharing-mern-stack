import { AiOutlineDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deletePostAction } from "../redux/actions/post";
import { toast } from "react-toastify";

const Card = ({ post }) => {
  const dispatch = useDispatch();
  const deletePost = (id) => {
    dispatch(deletePostAction(id));

    toast("Deletion successful", {
      position: "top-right",
      autoClose: 3000,
    });
  };
  const updatePost = (post) => {
    dispatch({
      type: "MODAL",
      payload: { open: true, updateId: post._id, updateData: post },
    });
  };
  return (
    <div>
      <div className="relative h-[150px]  flex flex-col justify-between border rounded-md bg-gray-50 my-5 mx-3 p-3">
        <div className="text-xl font-bold capitalize">{post?.title}</div>
        <div className="text-gray-700 text-sm">{post?.description}</div>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xs text-gray-500">{post?.user}</span>
          <span className="text-xs text-gray-500">
            {post?.date?.substring(0, 10)}
          </span>
        </div>
        <div className="flex items-center space-x-3 absolute top-0 right-0 p-1">
          <AiOutlineDelete
            onClick={() => deletePost(post._id)}
            size={22}
            className="bg-red-500 rounded-md text-white p-1 cursor-pointer"
          />
          <FaEdit
            onClick={() => updatePost(post)}
            size={22}
            className="bg-blue-500 rounded-md text-white p-1 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
