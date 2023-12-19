import React from 'react'
import {userParam} from 'react-router-dom'


function User(){
    const {id} = userParam();
    return(
        <div>user: {id}</div>
    )
}

export default User;