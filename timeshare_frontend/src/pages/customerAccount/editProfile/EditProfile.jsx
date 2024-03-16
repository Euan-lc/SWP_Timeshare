import React from "react";
import './editProfile.css';
import { getAuth } from 'firebase/auth';

const EditProfile = () => {

    const auth = getAuth();
    const user = auth.currentUser;
    const uid = user.uid;

    return (
        
        <div>
            <p>coucou</p>
        </div>
    );

};

export default EditProfile;