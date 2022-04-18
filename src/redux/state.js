let store = {
    _state : {
        profilePage: {
            posts:[
                {id:1, post:'Hello, how are you?'},
                {id:2, post:'It\'s my first post'},
                {id:3, post:'Hello'},
                {id:4, post:'today is fine'},
            ],
            newPostText: "",

        },

        messagePage:{
            messages:[
                {id: 1, message: "Hi",},
                {id: 2, message: "Hello",},
                {id: 3, message: "Hi are you?",},
                {id: 4, message: "fine",},
                {id: 5, message: "Go",}
            ],
            dialogs:[
                {id: 1, name: "Keanu", img: "https://pbs.twimg.com/media/EnRUx9aXUA0Spxh?format=jpg&name=large"},
                {id: 2, name: "Nicole", img: "https://resizer.mail.ru/p/45134026-450d-5177-8978-62ef2dbfaa3c/AAACE49_QWIKBMYA_oAef9H_jBe53DnYQxMGX3bDTCMPSUkQh24VsvVO4kMwSxMIjWGBrmaEEHIau0BBqzTCpAzqdy4.jpg"},
                {id: 3, name: "Madonna", img: "https://n1s1.elle.ru/2d/ef/c2/2defc22ec47e80be63a7054af7a5e3cf/728x458_1_2779a3fb0a17e851a83b8414ccb5dab6@940x591_0xc35dbb80_20293511321500296248.jpeg"},
                {id: 4, name: "Monica",  img: "https://images11.cosmopolitan.ru/upload/img_cache/b84/b8425ffb9657ea9de175d43b5d7ccba1_cropped_630x630.jpg"},
                {id: 5, name: "Bruce", img: "https://kto-zhena.ru/wp-content/uploads/1432274596-bryus-uillis-598x600.jpg"},
            ],

            newDialogsText: "",
        }

    },
    _callSubscriber () {

    },
    getState(){
        return this._state;
    },
    subscribe (observer){
        this._callSubscriber  = observer;
    },
    dispatch(action){
        if (action.type === "ADD-POST") {
            let newPost = {
                id:5,
                post: this._state.profilePage.newPostText
            }
            let newDialog = {
                id: 6,
                message: this._state.messagePage.newDialogsText
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText ='';
            this._state.messagePage.messages.push(newDialog);
            this._state.messagePage.newDialogsText ='';

            this._callSubscriber (this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber (this._state);
        } else if (action.type === 'UPDATE-NEW-DIALOGS-TEXT'){
            this._state.messagePage.newDialogsText = action.newText;
            this._callSubscriber (this._state);
        }
    }
}

window.store = store;

export default store;