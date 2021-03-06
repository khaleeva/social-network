import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'b429dd9e-7387-49ed-86ad-9db5be2725b1',
    }
})

export const usersAPI = {
    getUsers(page, pageSize) {
        return instance.get(`users?page=${page}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    follow(id) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data;
            })
    },

    unfollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data;
            })
    }

}

export const authAPI = {
    auth() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            })
    },

    login(email, password, rememberMe, captcha = null){
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
            .then(response => {
                return response.data;
            })
    },

    logout(){
        return instance.delete(`auth/login`)
            .then(response => {
                return response.data;
            })
    }
}

export const profileAPI = {
    profile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data;
            })
    },
    getStatus(userId) {
        return instance.get(`profile/status/${userId}`)
            .then(response => {
                return response.data;
            })
    },

    updateStatus(status){
        return instance.put(`profile/status`, {status: status})
            .then(response => {
                return response.data;
            })
    },

    savePhoto(photoFile){
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }})
            .then(response => {
                return response.data;
            })
    },

    saveData(profile){
        return instance.put(`profile`, profile)
            .then(response => {
                return response.data;
            })
    }
}


export const securityAPI = {
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
            .then(response => {
                return response.data;
            })
    }


}



