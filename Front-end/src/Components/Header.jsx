import { useEffect, useState } from "react";
import Navbar from "../Pages/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
axios.withCredentials = true;
const Header = () => {
  /* first check user credentials in local storage */
  const [user, setUser] = useState(() => {
    let userprofile = localStorage.getItem("userprofile.data");
    if (userprofile) {
      return JSON.parse(userprofile.data);
    } else {
      return null;
    }
  });
  const navigate=useNavigate();
  /* get user profile Api call second method*/
  const getUserCredentials = async () => {
    const userprofile = await axios.get(
      "http://localhost:5000/BlogApi/users/userprofile",
      {
        withCredentials: true,
      }
    );
    //update the state with the fecthed data
    setUser(userprofile.data.user.name);
    //set user profile to local storage to keep user login on page refresh!
    localStorage.setItem("userprofile", JSON.stringify(userprofile.data));
  };
  useEffect(() => {
    getUserCredentials();
  }, []);
  /* Logout API Call */
  const LogoutAPI=async()=>{
       await axios.get('http://localhost:5000/BlogApi/users/logout',{
        withCredentials:true
       }).then(()=>navigate('/'))
       localStorage.removeItem("userprofile");
       setUser(null);
       navigate('/login')
  }
  useEffect(()=>{
   LogoutAPI();
  },[])

  return (
    <div>
      <Navbar user={user} logout={LogoutAPI} />
    </div>
  );
};

export default Header;
