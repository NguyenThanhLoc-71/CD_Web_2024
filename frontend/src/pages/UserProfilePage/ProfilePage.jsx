
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get('http://localhost:8080/api/profile', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`, // Lấy token từ localStorage
                    },
                });
                setProfile(response.data);
            } catch (error) {
                setError(error.response.data.message);
            }
        };

        fetchProfile();
    }, []);

    if (error) {
        return <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>{error}</div>;
    }

    if (!profile) {
        return <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>Loading...</div>;
    }

    return (
        <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>Profile</h2>
            <p><strong>Username:</strong> {profile.username}</p>
            <p><strong>Phone Number:</strong> {profile.phoneNumber}</p>
            {/* Thêm các thông tin profile khác nếu có */}
        </div>
    );
};
export default Profile;
