
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
// import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import React from "react";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import Footer from "./components/Footer/Footer";
import Privacy from "./components/Privacy/Privacy";
import Terms from "./components/Terms/Terms";
import MyPostsContainer from "./components/Profile/MyPost/MyPostContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
// import SideBarContainer from "./components/Friends/SideBarContainer";
import PhotoContainer from "./components/Photos/PhotoContainer";
import FriendsContainer from "./components/Friends/FriendContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import NavBarContainer from "./components/Navbar/NavBarContainer";
import AboutContainer from "./components/About/AboutContainer";
import Login from "./components/Login/Login"




const App = () => {

    return (
       <div className="app-wrapper">
            <HeaderContainer/>
            <NavBarContainer/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path='/' element={<Login/>}/>
                    <Route path="/profile/*" element={<ProfileContainer/>}>
                        <Route index element={<AboutContainer/>}/>
                        <Route path="about" element={<AboutContainer/>}/>
                        <Route path="about/:userId" element={<AboutContainer/>}/>
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
                    <Route path="login" element={<Login/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    )
}








export default App;


