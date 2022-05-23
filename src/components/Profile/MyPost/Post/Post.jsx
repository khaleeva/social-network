import React, {useState} from 'react';
import classes from "./MyPosts.module.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';




const Post = ({message, date, likes}) => {

    const [like, setLike] = useState(false);
    const [count, setCount] = useState(likes);



    let isLike = () =>{
        if (like === false){
            setLike(true)
            setCount(count + 1)
        } else {
            setLike(false)
            setCount(count - 1)
        }

    }


    return (
        <div className={classes.postItem}>
            <div className={classes.item}>{message}</div>
            <div>
                <div className={classes.itemLike} >
                    {like ? <FavoriteRoundedIcon className={classes.imgLike} fontSize="small" onClick={isLike} />
                        : <FavoriteBorderIcon className={classes.imgLike} fontSize="small" onClick={isLike}/> }
                    <span>{count}</span>
                </div>
                <div>{date}</div>

            </div>

        </div>


    );
};

export default Post;