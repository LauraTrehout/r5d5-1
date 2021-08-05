import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

import CardProfile from './CardProfile';

const CardListProfile = () => {
    const [users, SetUsers] = useState([]);

    useEffect(() => {
        const getData = () => {
          axios
            .get('https://miadil.github.io/starwars-api/api/all.json')
            .then(
              (result) => SetUsers(result.data)
            );
        }
        getData();
    }, []);

    return (
        <div>
            {users.map((user) => (
                <CardProfile
                    id={user.id}
                    image={user.image}
                />
            ))}
        </div>

    )
}

export default CardListProfile;