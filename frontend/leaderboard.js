fetch('http://localhost:3000/scores')
    .then(response => response.json())
    .then(scores => {
        loadTableData(scores);
    })
    

function loadTableData(scores) {
    console.log(scores)
    let tableBody = document.getElementById('tableData');
    let dataHtml = '';

    for(let data of scores){
        dataHtml +=`<tr><td>${data.user.name}</td><td>${data.number}</td></tr>`;
    console.log(data.number)
    }
tableBody.innerHTML = dataHtml; 
}