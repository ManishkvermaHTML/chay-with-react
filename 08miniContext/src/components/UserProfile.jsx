import React, { useContext } from 'react'
import UserContext from '../context/UserContex'


 
function UserProfile(){
    const {user} = useContext(UserContext);
    if(!user) return(<div>Please login</div>)

    return <div>Welcome {user.userName} !</div>
 }
 
export default UserProfile