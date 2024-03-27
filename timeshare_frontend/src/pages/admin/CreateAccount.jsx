import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import "./createAccount.css";

export default function CreateAccount() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
        lastName: '',
        dob: '',
        gender: '',
        phoneNumber: '',
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email, password, ...additionalData } = formData;
        const auth = getAuth();
        const db = getFirestore();

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const { uid } = userCredential.user;

            // Store additional data in Firestore under 'users' collection
            await setDoc(doc(db, 'users', uid), additionalData);

            // Clear form or redirect user
            console.log('Account created successfully');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="content">
            <h1>Create Account</h1>
            <form onSubmit={handleSubmit} className="create-account-form">
                <input type="text" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
                <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
                <input type="text" name="dob" placeholder="Date of Birth" value={formData.dob} onChange={handleChange} required />
                <input type="text" name="gender" placeholder="Gender" value={formData.gender} onChange={handleChange} required />
                <input type="text" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} required />
                <button type="submit">Create Account</button>
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
}
