import React from 'react';
import classes from './Photo.module.css'

const Photos = ({photos}) => {
    return (
        <>

            <div className={classes.photoContainer}>
                {photos.map((photo) =>
                    <div key={photo.id} className={classes.photoItem}>
                        <img src={photo.bg} alt=""/>
                    </div>)}
            </div>
        </>
    );
};

export default Photos;