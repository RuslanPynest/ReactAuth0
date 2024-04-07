import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
    const [accessToken, setAccessToken] = useState(null);

    useEffect(() => {
        const fetchAccessToken = async () => {
            try {
                const token = await getAccessTokenSilently();
                setAccessToken(token);
            } catch (error) {
                console.error('Error fetching access token:', error);
            }
        };

        if (isAuthenticated) {
            fetchAccessToken();
        }
    }, [isAuthenticated, getAccessTokenSilently]);

    return (
        isAuthenticated && (
            <div>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <p>Access Token: {accessToken}</p>
            </div>
        )
    );
};

export default Profile;
