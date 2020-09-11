fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(users =>{
        const userField = document.querySelector('#user-field')

        users.forEach(user=>{
            const userElement = document.createElement('option')
            userElement.value = user.id
            userElement.textContent = user.name
            userField.append(userElement)
        })

    })