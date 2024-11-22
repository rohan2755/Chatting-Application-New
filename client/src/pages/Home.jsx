import React, { useEffect } from "react";
import logo from "../assets/logo.png";
import Sidebar from "../components/Sidebar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setOnlineUser, setSocketConnection, setToken, setUser } from "../redux/userSlice";
import io from 'socket.io-client'


const Home = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = sessionStorage.getItem("userToken");
  const id = sessionStorage.getItem("userId");
  const name = sessionStorage.getItem("name");
  const email = sessionStorage.getItem("email");

  dispatch(setToken(token));
  dispatch(setUser({ id, name, email }));

  const user = useSelector((state) => state.chatUser);

  console.log("user", user);

  const basePath = location.pathname === "/home";

  useEffect(()=>{
    const socketConnection = io(import.meta.env.VITE_APP_BACKEND_URL, {
        auth : {
            token : sessionStorage.getItem("userToken")
        }
    })

    socketConnection.on('onlineUser',(data)=>{

        console.log("socket User", data)
        dispatch(setOnlineUser(data))
        console.log("user", user);
    })

    dispatch(setSocketConnection(socketConnection))

    return ()=>{
        socketConnection.disconnect()
    }
  },[])


  return (
    <div className="grid lg:grid-cols-[300px,1fr] h-screen max-h-screen">
      <section className={`bg-white ${!basePath && "hidden"} lg:block`}>
        <Sidebar />
      </section>

      {/**message component**/}
      <section className={`${basePath && "hidden"}`}>
        <Outlet />
      </section>

      <div
        className={`justify-center items-center flex-col gap-2 hidden ${
          !basePath ? "hidden" : "lg:flex"
        }`}
      >
        <div>
          <img src={logo} width={250} alt="logo" />
        </div>
        <p className="text-lg mt-2 text-slate-500">
          Select user to send message
        </p>
      </div>
    </div>
  );
};

export default Home;
