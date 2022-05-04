import {connect} from "react-redux";
import Photos from "./Photos";



let mapStateToProps = (state) => {
    return {
        photos: state.photoPage.photos
    }
}


const PhotoContainer = connect(mapStateToProps)(Photos);

export default PhotoContainer;