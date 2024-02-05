import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  AddPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  // Implement your reducer logic here based on the action type
  switch (action.type) {
    case "ADD_POST":
      // Add logic to handle adding a post
      return [...currentPostList, action.payload];
    case "DELETE_POST":
      // Add logic to handle deleting a post
      return currentPostList.filter((post) => post.id !== action.payload);
    default:
      return currentPostList;
  }
};

const PostListProvider = ({ children }) => {
  const addPost = (newPost) => {
    // Dispatch an action to add a post
    dispatchPostList({ type: "ADD_POST", payload: newPost });
  };

  const deletePost = (postId) => {
    console.log(`delete post called for : ${postId}`);
    // Dispatch an action to delete a post
    dispatchPostList({ type: "DELETE_POST", payload: postId });
  };

  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to lahore",
    body: "Hi Friends,Iam going to lahore for my vacations,hope to enjoy alot peace out.",
    reaction: "2",
    userId: "user_9",
    tags: ["vacations", "lahore", "Enjoying"],
  },
  {
    id: "2",
    title: "finally pass",
    body: "Hi Friends,I have completed degree enjoy alot of studing.",
    reaction: "15",
    userId: "user_15",
    tags: ["Graduating", "Finally"],
  },
];

export default PostListProvider;
