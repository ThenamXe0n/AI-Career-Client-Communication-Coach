import React from 'react'
import UserProfile from './user-profile-section'
import { Navbar } from '@/shared/components/NavBar'

const ProfilePage = () => {
    return (
        <div>
            <Navbar/>
            <UserProfile />
        </div>
    )
}

export default ProfilePage
