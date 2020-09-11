fetch('http://localhost:3000/scores')
    .then(response => response.json())
    .then(scores => {
        loadTableData(scores)
    }
)

function loadTableData(scores) {
    const tableBody = document.querySelector('#tableData')
    sorts = scores.sort((a,b) => b.number - a.number)
    sorts.forEach(sort=> {
        const scoreElement = document.createElement('tr')
        scoreElement.innerHTML = `<tr><td>${sort.user.name}</td><td>${sort.number}</td></tr>`;
        tableBody.append(scoreElement)
    })
}

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