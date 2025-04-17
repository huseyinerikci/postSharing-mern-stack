import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import { getPostsAction } from "../redux/actions/post";

const Home = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(getPostsAction());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
      {posts?.map((post, i) => (
        <Card key={i} post={post} />
      ))}
    </div>
  );
};

export default Home;
