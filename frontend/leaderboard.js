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