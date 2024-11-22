import axiosInstance from "../axiosInstance";

export const register = async(data)=>{
    console.log("data api", data )
    try{
        const response = await axiosInstance.post('/register-user',data)
        return response.data
    } catch(error){
        console.error('Error registering user:', error);
        throw error;
    }
}

export const login = async(data)=>{
    console.log("data login", data)

    try{
        const response = await axiosInstance.post('/login', data)

        sessionStorage.setItem("name", response.data?.data?.name)
        sessionStorage.setItem("email", response.data?.data?.email)
        sessionStorage.setItem("userToken", response.data?.data?.token)
        sessionStorage.setItem("userId", response.data?.data?.id)

    return response.data
    } catch(error){
        console.error('Error logging in', error)
        throw error
    }
}