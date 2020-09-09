

// fetch('http://localhost:3000/scores')
//     .then(response => response.json())
//     .then(scores => {renderScore(scores)})
//         // const scoresList = document.querySelector('#scoretable')
//         // const scoreUserList = document.querySelector('#score')
//         // const scoreNumberList = document.querySelector('#user')



// function renderScore(scores){
    
//     return scores
// }


let sortDirection = false;
let personData = [ 
    { name: "jenn", score: 30},
    { name: "DJ", score: 20},
    { name: "Matt", score: 10 }
];

window.onload = () => {
    loadTableData(personData);
};
// when this loads also load the table data

function loadTableData(personData) {
    let tableBody = document.getElementById('tableData');
    let dataHtml = '';

    for(let person of personData){
        dataHtml +=`<tr><td>${person.name}</td><td>${person.score}</td></tr>`;
    }
// console.log(dataHtml)

tableBody.innerHTML = dataHtml; 
}

function sortColumn(columnName){
    const dataType = typeof personData[0][columnName];
    // console.log(datatype)
    sortDirection =!sortDirection;

    switch(dataType){
        case 'number': 
        sortNumberColumn(sortDirection, columnName);
        break;
    }
    console.log(personData)
   loadTableData(personData);
}

function sortNumberColumn(sort, columnName){
    personData = personData.sort( (p1, p2) =>{
        return sort ? p1[columnName] - p2[columnName] : p2[columnName] - p1[columnName]
    });
}