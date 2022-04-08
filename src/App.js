
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import React from "react";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import Footer from "./components/Footer/Footer";
import Privacy from "./components/Privacy/Privacy";
import Terms from "./components/Terms/Terms";
import MyPosts from "./components/Profile/MyPost/MyPosts";
import About from "./components/About/About";
import Friends from "./components/Friends/Friends";
import Photos from "./components/Photos/Photos";
import SideBar from "./components/Friends/SideBar";


function App({state, addPost}) {
    console.log(state.messagePage)
  return (
      <div className="app-wrapper">
          <Header/>
          <Navbar/>
          <SideBar dialogs={state.messagePage.dialogs}/>
          <div className="app-wrapper-content">
              <Routes>
                  <Route path='/' element={<Profile/>}/>
                  <Route path="profile/*" element={<Profile/>}>
                      <Route path="posts" element={<MyPosts posts={state.profilePage.posts} addPost={addPost}/>}/>
                      <Route path="about" element={<About/>}/>
                      <Route path="friends" element={<Friends/>}/>
                      <Route path="photos" element={<Photos/>}/>
                  </Route>
                  <Route path="dialogs/*" element={<Dialogs messages={state.messagePage.messages} dialogs={state.messagePage.dialogs}/>}/>
                  <Route path="news" element={<News/>}/>
                  <Route path="music" element={<Music/>}/>
                  <Route path="settings" element={<Setting/>}/>
                  <Route path="privacy" element={<Privacy/>}/>
                  <Route path="terms" element={<Terms/>}/>
              </Routes>
          </div>
          <Footer/>
      </div>
  );
}

export default App;


