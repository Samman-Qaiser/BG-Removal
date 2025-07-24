import React, { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useAuth } from '@clerk/clerk-react';
import {useNavigate} from 'react-router-dom'
export const AppContext = createContext();
import { useClerk, UserButton,useUser } from '@clerk/clerk-react';
import { useUserContext } from '@clerk/shared/react/index';
export const AppContextProvider = (props) => {
    const navigate=useNavigate()
  const [credits, setcredits] = useState();
  const [fname,setFname]=useState('')
  const [img,setimg]=useState(false)
  const [resultimg,setResultimg]=useState(false)
  const { getToken } = useAuth();
  const {openSignIn}=useClerk()
  const {isSignedIn,user}=useUser()
const backend_url = import.meta.env.VITE_BACKEND_URL;

  const getCredit = async () => {
    try {
      const token = await getToken();
      const { data } = await axios.get(`${backend_url}/user/credit`, {
        headers: { token },
      });

      if (data.success) {
        setcredits(data.creditBalance);
        setFname(data.firstName)
        console.log('data received:', data);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Credit Fetch Error:", error?.response?.data || error.message);
      toast.error(error?.response?.data?.message || error.message);
    }
  };
   const removeBg=async (image)=>{
  try{

    if(!isSignedIn){
       return    openSignIn()
    }
  
   setimg(image)
   setResultimg(false)
   console.log('image',image)
   navigate('/result')
         const token = await getToken();
     const formData = new FormData();
        image &&   formData.append('image', image);
           const { data } = await axios.post(`${backend_url}/image/remove-bg`, formData,{
        headers: { token },
      });

      if (data.success) {
        setResultimg(data.resultimg)
      data.creditBalance&&setcredits(data.creditBalance);
      if( data.creditBalance===0){
        navigate('/pricing')
      }
       
      } else {
        toast.error(data.message);
      }

  }
  catch (error) {

      toast.error( error.message);
      console.log(error)
    }
   }
  useEffect(() => {
    console.log("credits updated:", credits);
      console.log('image',img)
  }, [credits]);

  const value = {
    credits,
    setcredits,
    getCredit,
    fname,setFname,img,setimg,removeBg,setResultimg,resultimg
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};
