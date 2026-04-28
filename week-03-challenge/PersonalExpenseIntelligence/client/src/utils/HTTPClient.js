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

    get(url){
        return this.instance.get(url)
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

    createExpense(data){
        return this.instance.post('/expenses', data)
    }

    getAllExpenses(){
        return this.instance.get('/expenses')
    }

    getGeneralAnalysis(){
        return this.instance.get('/analysis/general')
    }

}

export default HTTPClient