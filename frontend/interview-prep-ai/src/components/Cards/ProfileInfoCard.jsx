import React, {useContext} from 'react'
import { UserContext } from '../../context/userContext'
import { useNavigate } from 'react-router-dom';

const ProfileInfoCard = () => {
  const {user, clearUser} = useContext(UserContext);
  const navigate =useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    clearUser();
    navigate("/");
  }
  return user && (
    <div className="flex items-center">
      <img 
        src={user.profileImageUrl}
        alt =""
        className="w-11 h-1 bg-gray-300 rounded-ful mr-3"
        />
      <div>
        <div className="">
          {user.name || ""}
        </div>
        <button className="text-amber-600 text-sm font-semibold cursor-pointer hover:underline" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}

export default ProfileInfoCard