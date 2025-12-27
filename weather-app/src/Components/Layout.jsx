import ThemeToggle from "../Components/ThemeToggle.jsx";
import { useState,useEffect } from "react";
import axios from "axios";

function Layout({ children }) {

  const[userData,setUserData]=useState([]);



 useEffect(()=>{

      const fetchUser=async()=>{
        try{
          const response=await axios.get('http://localhost:6060/user', {
          withCredentials: true
          });

          console.log(response.data.data);
          setUserData(response.data.data);
        }catch(error){
          console.error('Error fetching user info:',error);
        }
      };

      fetchUser();
 },[])


 const handleLogout=async()=>{
    try{
      await axios.get('http://localhost:6060/logout',{
        withCredentials:true
      });
      window.location.href="/";
    }catch(error){
      console.error('Error during logout:',error);
    }
  };




  return (
    <div className="
      min-h-screen
      bg-white dark:bg-gray-900
      text-gray-900 dark:text-gray-100
      transition-colors duration-300
    ">
<header className="bg-gray-100 dark:bg-gray-800 px-4 py-3">
  <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-3">

    <div className="sm:flex-1 flex justify-start">
      <ThemeToggle />
    </div>

    <h1 className="text-xl font-semibold text-center sm:flex-1">
      Weather Data
    </h1>

    <div className="sm:flex-1 flex flex-col sm:flex-row items-center sm:justify-end gap-2">
      <span className="font-semibold text-sm sm:text-base">
        Welcome {userData.displayName}
      </span>

    
      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-4 py-2 rounded cursor-pointer"
      >
        Logout
      </button>
    </div>

  </div>
</header>



      <main className="p-4">
        {children}
      </main>


      
    </div>
  );
}

export default Layout;
