import axios from "axios";

const instance = axios.create({
    withCredentials : true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'b429dd9e-7387-49ed-86ad-9db5be2725b1'
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    }
}


export const followAPI = {
    getFollowUser(id) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data;
            })
    },

    getUnfollowUser(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data;
            })
    }


}

