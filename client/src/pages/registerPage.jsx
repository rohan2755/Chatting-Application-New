import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ss from '../assets/curved-6.jpg'
import {register} from '../apis/user'

const registerPage = () => {
    const [data,setData] = useState({
        name : "",
        email : "",
        password : ""
    })

    const handleChange = (e)=>{
      const { name, value} = e.target
      setData((prev)=>{
        return{
          ...prev,
          [name] : value
        }
      })
    }

    const handleSubmit = async(e)=>{
      e.preventDefault()
      console.log("data", data)
      try{
        const response = await register(data);
        console.log("response",response)
        if(response.data.success){
          setData({
            name:"",
            email : "",
            password : ""
          })
        }
      } catch(error){
        console.error("Register error:", error);
      }
    }
  return (
    <div className='w-full h-screen'>
    <div className='flex justify-between h-full w-full'>
      <div className='w-[70%] flex justify-end items-center'>
        <div className='w-full'>

          <form class=" w-[40%] mx-auto" onSubmit={handleSubmit}>
            <div className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300 font-bold text-3xl mb-4'>Welcome Back</div>
            {/* <div className='mb-2 text-gray-500 font-[400]'>Enter your email and password to signin</div> */}
            <div class="mb-5">
              <label for="name" class="block mb-2 text-sm font-medium text-gray-900 ">Your name</label>
              <input onChange={handleChange} type="text" name='name' id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
            </div>
            <div class="mb-5">
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
              <input onChange={handleChange} type="email" name='email' id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@flowbite.com" required />
            </div>
            <div class="mb-5">
              <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
              <input onChange={handleChange} type="password" name='password' id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
            </div>
            <div className='mb-5'>
            </div>
            
            <div className='w-full'>
              <button type="submit" class="text-white bg-gradient-to-r from-blue-600 via-blue-700 to-blue-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Submit</button>
            </div>
            <div className='w-full flex justify-center text-sm text-gray-500 mt-4'>Don't have an account? <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-400 font-bold'> Sign Up</span></div>
          </form>
        </div>

      </div>
      <div>
        <img
          src={ss}
          alt=""
          className=' object-cover w-100 h-full'
          style={{ clipPath: 'polygon(22% 0, 100% 0, 100% 100%, 5% 100%)' }}
        />
      </div>
    </div>
  </div>
  )
}

export default registerPage