import '../styles/App.css';
import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import UserList from '../components/users/UserList'
import UserCreate from '../components/users/UserCreate'
import UserEdit from '../components/users/UserEdit'

function App() {
    return (
        <Admin dataProvider={restProvider('http://localhost:3000')}>
            <Resource
                name='users'
                list={UserList}
                create={UserCreate}
                edit={UserEdit}
            />
        </Admin>
    )
}

export default App