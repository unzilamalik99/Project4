import "./App.css";
import { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "./Components/SideBar";
import CreatePost from "./Components/CreatePost";
import PostListProvider from "./store/PostListStore";
import PostList from "./Components/PostList";

function App() {
  const [SelectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListProvider>
      <div className="App-Container">
        <SideBar SelectedTab={SelectedTab} setSelectedTab={setSelectedTab} />
        <div className="Content">
          <Header />
          {SelectedTab === "Home" ? <PostList /> : <CreatePost />}
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
