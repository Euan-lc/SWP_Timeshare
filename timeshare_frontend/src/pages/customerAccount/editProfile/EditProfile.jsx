import './editProfile.css';
import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, deleteUser } from 'firebase/auth';
import { getFirestore, collection, getDocs, doc, updateDoc } from 'firebase/firestore';


const EditProfile = () => {

    const [userData, setUserData] = useState([]);
    const [editedUserData, setEditedUserData] = useState({});
    const [isEditing, setIsEditing] = useState(false);
    const auth = getAuth();
    const db = getFirestore();

    useEffect(() => {
        const auth = getAuth();
        const user = auth.currentUser;

        if (user) {
            const uid = user.uid;
            const fetchData = async () => {
                const userRef = collection(db, 'users');
                const querySnapshot = await getDocs(userRef);
                const data = [];
                querySnapshot.forEach(doc => {
                    if (doc.id === uid) {
                        data.push({ id: doc.id, ...doc.data() });
                    }
                });
                setUserData(data);
            };

            fetchData();
        }
    }, []);

    const handleEdit = () => {
        setIsEditing(true);
        setEditedUserData({ ...userData[0] });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        const userId = editedUserData.id;
        try {
            await updateDoc(doc(db, 'users', userId), editedUserData);
            setUserData([editedUserData]);
            setIsEditing(false);
        } catch (error) {
            console.error('Error updating document: ', error);
        }
    };

    const handleDelete = async () => {
        try {
            const user = auth.currentUser;
            await deleteUser(user);
            // Vous pouvez également ajouter une logique supplémentaire pour nettoyer les données associées à l'utilisateur dans Firestore, si nécessaire.
            console.log('User deleted successfully');
        } catch (error) {
            console.error('Error deleting user: ', error);
        }
    };

    return (
        <div >
            <h2 className='h2-edit'>Edit your information</h2>
            <div className='container-edit-profile'>
                {userData.map(user => (
                    <div key={user.id}>
                        <p>Name: {isEditing ? <input className='input-edit' type="text" name="Name" value={editedUserData.Name} onChange={handleInputChange} /> : user.Name}</p>
                        <p>Last name: {isEditing ? <input className='input-edit' type="text" name="Last name" value={editedUserData['Last name']} onChange={handleInputChange} /> : user['Last name']}</p>
                        <p>Dae of birth: {isEditing ? <input className='input-edit' type="text" name="Date of birth" value={editedUserData['Date of birth']} onChange={handleInputChange} /> : user['Date of birth']}</p>
                        <p>Gender: {isEditing ? <input className='input-edit' type="text" name="Gender" value={editedUserData.Gender} pattern="^[FfMm]$" title="Please select between F or M" maxLength="1" onChange={handleInputChange} /> : user.Gender}</p>
                        <p>Email: {isEditing ? <input className='input-edit' type="text" name="Email" value={editedUserData.Email} onChange={handleInputChange} /> : user.Email}</p>
                        <p>Phone number: {isEditing ? <input className='input-edit' type="text" name="Phone number" value={editedUserData['Phone number']} onChange={handleInputChange} /> : user['Phone number']}</p>
                    </div>
                ))}
                {isEditing ? (
                    <button className="button-edit" onClick={handleSubmit}>Save</button>
                ) : (
                    <button className="button-edit" onClick={handleEdit}>Modify</button>
                )}
            </div>

            <div>
                <button className="button-delete" onClick={handleSubmit}>Delete account</button>
            </div>
            
        </div>
    );

};

export default EditProfile;