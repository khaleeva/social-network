
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import React from "react";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import Footer from "./components/Footer/Footer";
import Privacy from "./components/Privacy/Privacy";
import Terms from "./components/Terms/Terms";
import About from "./components/About/About";
import Friends from "./components/Friends/Friends";
import Photos from "./components/Photos/Photos";
import SideBar from "./components/Friends/SideBar";
import MyPostsContainer from "./components/Profile/MyPost/MyPostContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";




function App({store, state, dispatch}) {
  return (
      <div className="app-wrapper">
          <Header/>
          <Navbar/>
          <SideBar dialogs={state.messagePage.dialogs}/>
          <div className="app-wrapper-content">
              <Routes>
                  <Route path='/' element={<Profile/>}/>
                  <Route path="profile/*" element={<Profile/>}>
                      <Route path="posts" element={<MyPostsContainer store={store}/>}/>
                      <Route path="about" element={<About/>}/>
                      <Route path="friends" element={<Friends/>}/>
                      <Route path="photos" element={<Photos/>}/>
                  </Route>
                  <Route path="dialogs/*" element={<DialogsContainer store={store} />}/>
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


