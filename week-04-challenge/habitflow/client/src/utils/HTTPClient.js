import axios from 'axios'
const apiUrl = import.meta.env.VITE_API_URL

class HTTPClient {
    constructor(){
        this.instance = axios.create({
            baseURL: apiUrl,
            withCredentials: true
        })
    }

    me(){
        return this.instance.get('/me')
    }

    login(email, password){
        return this.instance.post('/login', {email, password})
    }

    register(data){
        return this.instance.post('/register', data)
    }

    logout(){
        return this.instance.post('/logout')
    }

    createHabit(data){
        return this.instance.post('/habits', data)
    }

    getAllHabits(){
        return this.instance.get('/habits')
    }

    getOneHabit(id){
        return this.instance.get(`/habits/${id}`)
    }

    updateHabit(id, data){
        return this.instance.put(`/habits/${id}`, data)
    }

    deleteHabit(id){
        return this.instance.delete(`/habits/${id}`)
    }

    checkHabit(id){
        return this.instance.put(`/habits/${id}/check`)
    }
}

export default HTTPClient