import React from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileDetails from './ProfileDetails';
import Header from '../Layout/Header/Header';

const Profile = () => {
    const profileStyle = {
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif'
    };

    return (
        <>
            <Header />
            <div style={profileStyle} >
                <ProfileHeader/>
                <ProfileDetails />
            </div>
        </>
    );
};

export default Profile;
