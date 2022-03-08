
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
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


function App() {
  return (
      <BrowserRouter>
          <div className="app-wrapper">
              <Header/>
              <Navbar/>
              <div className="app-wrapper-content">
                  <Routes>
                      <Route path='/' element={<Profile/>}/>
                      <Route path="profile/*" element={<Profile/>}>
                          <Route path="posts" element={<MyPosts/>}/>
                          <Route path="about" element={<About/>}/>
                          <Route path="friends" element={<Friends/>}/>
                          <Route path="photos" element={<Photos/>}/>
                      </Route>
                      <Route path="dialogs/*" element={<Dialogs/>}/>
                      <Route path="news" element={<News/>}/>
                      <Route path="music" element={<Music/>}/>
                      <Route path="settings" element={<Setting/>}/>
                      <Route path="privacy" element={<Privacy/>}/>
                      <Route path="terms" element={<Terms/>}/>
                  </Routes>
              </div>
              <Footer/>
          </div>

      </BrowserRouter>

  );
}

export default App;


