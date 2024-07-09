import { useEffect,useState } from "react";
import Navbar from "../Pages/Navbar";
import axios from 'axios'
axios.withCredentials=true
const Header = () => {
   /* first check user credentials in local storage */
  const [user, setUser] = useState(/* () => {
    let userprofile = localStorage.getItem("userprofile");
    if (userprofile) {
      return JSON.parse(userprofile);
    } else {
      return null;
    }
  } */);
  console.log(user);
const getUserCredentials=async()=>{
  /* get user profile Api call second method*/
    const userprofile = await axios.get(
      "http://localhost:5000/BlogApi/users/userprofile",
      {
        withCredentials: true,
      }
    );
   /*  //update the state with the fecthed data
    setUser(userprofile.data.name);
    //set the data also to local Storage and used to keep logged in on page refresh. 
    localStorage.setItem("userprofile", JSON.stringify(userprofile.data)); */
     console.log(userprofile.name)
    const data=await userprofile
    return data;
   }
   useEffect(()=>{
    getUserCredentials().then((data)=>setUser(data))
    .then((data)=>localStorage.setItem("userprofile",JSON.stringify(data)));
   },[])
  return (
    <div>
      <Navbar user={user} />
    </div>
  );
};

export default Header;
