import axiosInstance from "../axiosInstance"

export const searchUserApi = async(search)=>{
    console.log("search", search)
    try{

        const response = await axiosInstance.post('/search-user',search)
        return response.data

    } catch(error){
        console.error("error in searching User", error)
        throw error
    }
}