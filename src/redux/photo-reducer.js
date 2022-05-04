const ADD_PHOTO = 'ADD-PHOTO'

let initialState = {
photos: [

    {id: 1, bg:'https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/page-img/profile-bg2.jpg', description:''},
    {id: 2, bg:'https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/page-img/profile-bg4.jpg', description:''},
    {id: 3, bg:'https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/page-img/profile-bg7.jpg', description:''},
    {id: 4, bg:'https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/page-img/profile-bg6.jpg', description:''},
    {id: 5, bg:'https://templates.iqonic.design/socialv/bs5/html/dist/assets/images/page-img/profile-bg9.jpg', description:''},
]
}


const photosReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_PHOTO :

            return {
                ...state,
                photos: [...state.photos]
            }



        default: return state
        }
}

export const addPhotoAC = () => {
    return {
        type: ADD_PHOTO,

    }
}

export default photosReducer;