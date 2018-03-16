import React from 'react';

import Users from '../../components/Users';

const authIndexPage = () => (
    <div>
        <h1>The Auth Index Page</h1>
        <Users name='Max' age={25}/>
    </div>
);

export default authIndexPage;
