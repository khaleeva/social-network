import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";


let state = {
    posts: [
        {id: 1, post: 'Hello, how are you?', likes: 1, date:''},
        {id: 2, post: 'It\'s my first post', likes: 2, date:''},
        {id: 3, post: 'Hello', likes: 3, date:''},
        {id: 4, post: 'today is fine', likes: 120, date:''},
    ]

}


test('new post should be added and posts increase', () => {

    let action = addPostActionCreator('Hey you')
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(5);
});

test('new message of posts should be correct', () => {

    let action = addPostActionCreator('Hey you')
    let newState = profileReducer(state, action);
    expect(newState.posts[4].post).toBe('Hey you');
});


test('Length after deleting should be decrease', () => {

    let action = deletePost(1)
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3);
});

test("Length after deleting shouldn't be incorrect", () => {

    let action = deletePost(1000)
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(4);
});


