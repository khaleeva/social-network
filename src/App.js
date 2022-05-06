
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import React from "react";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import Footer from "./components/Footer/Footer";
import Privacy from "./components/Privacy/Privacy";
import Terms from "./components/Terms/Terms";
import About from "./components/About/About";
import MyPostsContainer from "./components/Profile/MyPost/MyPostContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
// import SideBarContainer from "./components/Friends/SideBarContainer";
import PhotoContainer from "./components/Photos/PhotoContainer";
import FriendsContainer from "./components/Friends/FriendContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";







function App() {
  return (
      <div className="app-wrapper">
          <Header/>
          <Navbar/>
          {/*<SideBarContainer/>*/}
          <div className="app-wrapper-content">
              <Routes>
                  <Route path='/' element={<News/>}/>
                  <Route path="/profile/*" element={<ProfileContainer/>}>
                      <Route index element={<About />}/>
                      <Route path="about" element={<About/>}/>
                      <Route path="about/:userId" element={<About/>}/>
                      <Route path="posts" element={<MyPostsContainer />}/>
                      <Route path="friends" element={<FriendsContainer />}/>
                      <Route path="photos" element={<PhotoContainer/>}/>
                  </Route>
                  <Route path="users" element={<UsersContainer />}/>
                  <Route path="dialogs/*" element={<DialogsContainer />}/>
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


