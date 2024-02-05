import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/PostListStore";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <>
      <div className="card post-card" style={{ width: "40rem" }}>
        <div className="card-body">
          <h5 className="card-title">
            {post.title}{" "}
            <span
              key={post.id}
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger deletepost"
            >
              <MdDelete onClick={() => deletePost(post.id)} />
            </span>
          </h5>
          <p className="card-text">{post.body}</p>
          {post.tags.map((tag) => (
            <span key={tag} className="badge text-bg-primary hashtag">
              {tag}
            </span>
          ))}
          <div className="alert alert-success reaction" role="alert">
            This post has been reacted by {post.reaction} peaple.
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
