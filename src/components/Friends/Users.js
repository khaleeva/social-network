import React from 'react';
import classes from './Users.module.css'
import Avatar from "../../MUI/Avatar";
import axios from "axios";
import Pagination from "../../MUI/Pagination";





class Users extends React.Component {

        componentDidMount() {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount)
                })
        }



        onPageChanged = (page) => {
            this.props.setCurrentPage(page);
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items)

                })
        }



   render() {

            let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
            let pages = [];
            for (let i = 1; i <= pagesCount; i++){
                pages.push(i)
                if (i === 20) break;
            }

       return (
           <>
              <div className={classes.pagesContainer}>
                  {pages.map((page) => {
                      return <span  className={this.props.currentPage === page ? classes.selected : ""}
                                   onClick={(e) => {this.onPageChanged(page)}}
                      >{page}</span>
                  })}
                  {/*<Pagination pagesCount = {pagesCount} />*/}
              </div>
               <div className={classes.friendsContainer}>
                   {this.props.users.map((user) =>
                       <div key={user.id} className={classes.friendsItem}>
                           <div className={classes.friendsBac}>
                               <img
                                   src='https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/page-img/profile-bg6.jpg'
                                   alt=""/>
                               <Avatar className={classes.friendsPhoto} key={user.id}
                                       src={user.photos.small}
                                       sx={
                                           {
                                               width: 100,
                                               height: 100,
                                               position: "absolute",
                                               left: 30,
                                               top: 80
                                           }}
                               />
                           </div>
                           <div className={classes.friendsCard}>
                               {user.followed ?
                                   <button className={classes.followButton} onClick={() => {
                                       this.props.unfollow(user.id)
                                   }}>Unfollowing</button>
                                   : <button className={classes.followButton} onClick={() => {
                                       this.props.follow(user.id)
                                   }}>Following</button>}
                               <div className={classes.friendsInfo}>
                                   <div className={classes.friendsName}>{user.name}</div>
                                   <div>{user.status}</div>
                               </div>
                           </div>
                       </div>)}
               </div>
           </>

       )

   }
}

export default Users;


// const Users = ({users, follow, unfollow, setUsers}) => {
// let getUsers = () =>{
//     if(users.length === 0){
//         axios.get('https://social-network.samuraijs.com/api/1.0/users')
//             .then(response => {
//                 setUsers(response.data.items)
//             })
//     }
// }
//     return (
//         <>
//        {/*<button onClick={getUsers}>get users</button>*/}
//         <div className={classes.friendsContainer}>
//             {users.map((user) =>
//                 <div key={user.id} className={classes.friendsItem}>
//
//                     <div className={classes.friendsBac}>
//                         <img src='https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/page-img/profile-bg6.jpg' alt=""/>
//                         <Avatar className={classes.friendsPhoto} key={user.id}
//                                 src={user.img}
//                                 sx={
//                                     {   width: 100,
//                                         height: 100,
//                                         position: "absolute",
//                                         left: 30,
//                                         top: 80}}
//                         />
//                     </div>
//                     <div className={classes.friendsCard}>
//                         {user.followed ?
//                             <button className={classes.followButton} onClick={() => {unfollow(user.id)}}>Unfollow</button>
//                             : <button className={classes.followButton} onClick={() => {follow(user.id)}}>Follow +</button>}
//                         <div className={classes.friendsInfo}>
//                             <div className={classes.friendsName}>{user.name}</div>
//                             <div>{user.status}</div>
//                         </div>
//                     </div>
//                 </div>)}
//         </div>
//         </>
//     );
// };
//
// export default Users;