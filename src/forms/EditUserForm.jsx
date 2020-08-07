import React, { useState, useEffect } from 'react'

const EditUserForm = (props) => {
    const [user, setUser] = useState(props.currentUser)

    useEffect(() => {
        setUser(props.currentUser)
      }, [props])
    
    const initialFormState = { id: null, name: '', username: '' }

    const handleInputChange = (event) => {
        const { name, value } = event.target
    
        setUser({ ...user, [name]: value })
    }

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault()
                if (!user.name || !user.username) return
        
                props.updateUser(user.id, user)
            }}
        >
        <label>Name</label>
        <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
        />
        <label>Username</label>
        <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleInputChange}
        />
        <button>Add new user</button>
        </form>
    )
}

export default EditUserForm