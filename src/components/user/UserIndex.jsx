import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';

const UserIndex = () => {
    const navigate = useNavigate();
    const {userSubscriptionId, accessToken, setAccessToken, currentUser, setCurrentUser,subscriptionPlans} =
    useContext(AuthContext);
  return (
    <div>UserIndex</div>
  )
}

export default UserIndex