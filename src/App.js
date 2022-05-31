import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
// import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Navigate} from "react-router-dom";
import React, {useEffect} from "react";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Setting from "./components/Setting/Setting";
import Footer from "./components/Footer/Footer";
import Privacy from "./components/Privacy/Privacy";
import Terms from "./components/Terms/Terms";
import MyPostsContainer from "./components/Profile/MyPost/Post/MyPostContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
// import SideBarContainer from "./components/Friends/SideBarContainer";
import PhotoContainer from "./components/Photos/PhotoContainer";
import FriendsContainer from "./components/Friends/FriendContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import NavBarContainer from "./components/Navbar/NavBarContainer";
import AboutContainer from "./components/About/AboutContainer";
import Login from "./components/Login/Login"
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./MUI/Preloader";
import store from './redux/redux-store';
import Relation from "./components/About/AboutProfile/Relation";
import AboutDetails from "./components/About/AboutProfile/AboutDetails";
import Work from "./components/About/AboutProfile/Work";
import ContactContainer from "./components/About/AboutProfile/ContactContainer";
import NotFound from "./components/NotFound/NotFound";
import AlertTitle from "@mui/material/AlertTitle";
import Alert from "@mui/material/Alert";


const App = ({initializeApp, initialized, id, error}) => {


    useEffect(() => {
        initializeApp();
    })

    if (!initialized) {
        return <Preloader/>
    }

    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <NavBarContainer/>

            {error ?
                <div className='errorAlert'>
                    <Alert severity="error"
                           sx={{
                               width: "60%",
                               height: "100px"
                           }}>
                        <AlertTitle>{error.message}</AlertTitle>
                        This is an error alert — <strong>check it out!</strong>
                    </Alert>
                </div>
                :
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/" element={<Navigate to={`/profile/posts/${id}`}/>}/>
                        <Route path="profile/*" element={<ProfileContainer/>}>
                            <Route index element={<MyPostsContainer/>}/>
                            <Route path="posts" element={<MyPostsContainer/>}/>
                            <Route path="posts/:userId" element={<MyPostsContainer/>}/>
                            <Route path="about" element={<AboutContainer/>}/>
                            <Route path="about/*" element={<AboutContainer/>}>
                                <Route path="contact/:userId" element={<ContactContainer/>}/>
                                <Route path="relation/:userId" element={<Relation/>}/>
                                <Route path="work/:userId" element={<Work/>}/>
                                <Route path="details/:userId" element={<AboutDetails/>}/>
                            </Route>
                            <Route path="friends/:userId" element={<FriendsContainer/>}/>
                            <Route path="photos/:userId" element={<PhotoContainer/>}/>
                        </Route>
                        <Route path="users" element={<UsersContainer/>}/>
                        <Route path="dialogs/*" element={<DialogsContainer/>}/>
                        <Route path="news" element={<News/>}/>
                        <Route path="music" element={<Music/>}/>
                        <Route path="settings" element={<Setting/>}/>
                        <Route path="privacy" element={<Privacy/>}/>
                        <Route path="terms" element={<Terms/>}/>
                        <Route path="login" element={<Login/>}/>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </div>}
            <Footer/>


        </div>
    )


}

let mapStateToProps = (state) => (
    {
        initialized: state.app.initialized,
        isAuth: state.auth.isAuth,
        id: state.auth.id,
        error: state.profilePage.error


    }
)


const AppContainer = connect(mapStateToProps, {initializeApp})(App);

const MainAppContainer = () => {

    return <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>

}

export default MainAppContainer;
