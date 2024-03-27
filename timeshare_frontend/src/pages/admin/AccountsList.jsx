import React, { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import "./accountsList.css"

function AccountsList() {
    const [accounts, setAccounts] = useState([]);
    const db = getFirestore();

    useEffect(() => {
        const fetchAccounts = async () => {
            const accountsCollection = collection(db, 'users');
            const accountsSnapshot = await getDocs(accountsCollection);
            const accountsList = accountsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setAccounts(accountsList);
        };

        fetchAccounts();
    }, []);

    const handleDelete = async (userId) => {
        await deleteDoc(doc(db, 'users', userId));
        setAccounts(accounts.filter(account => account.id !== userId));
    };

    const handleEdit = (userId) => {
        // Navigate to edit account page or show edit form
        console.log('Edit:', userId);
    };

    return (
        <div className="accountsList">
            <h1>Accounts List</h1>
            {accounts.map(account => (
                <div key={account.id} className="accountItem">
                    <p>Email: {account.Email}</p>
                    <button onClick={() => handleEdit(account.id)}>Edit</button>
                    <button onClick={() => handleDelete(account.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default AccountsList;