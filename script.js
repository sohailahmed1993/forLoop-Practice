// // let arr = [1,2,3,4,5,2,3,4,5,1,2,3];
// let num = 0

// for(let i = 1; i <= 10; i++){
//    if(i % 2 !== 0){
//         document.write(i + "<br>");
//    }
// }

// let array = [[1,2,3],[4,5,6],[7,8,9]];

// function total(arr){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         for(let b = 0; b < arr[i].length; b++){
//             sum += arr[i][b];
//         }
//     }
//     return sum;
// }   

// console.log(total(array));



// let names = ["rajasthan","mumbai","goa"];

// function nameFind(state,target){
//     for(let i = 0; i < names.length; i++){
//      if(state[i] === target){
//         return true
//      }
//     }   
//     return false;
// }
// console.log(nameFind(names, "rajasthan"));






// if 1 in string => push true
// of if 0 in string => push false;

// string is = "101";
// so output should be = [true,false, true];


// let arr = [true,false,true];

// function add(){
//     let string = "101";
//     for(let i = 0; i < arr.length; i++){
//        if(string === "101"){
//             arr.push(true);
//        }
//        return string;
//     }
// }

// add("101");


function buildTable(data) {
    var tableContainer = document.getElementById("table-container");

    // Create a table element
    var table = document.createElement("table");

    // Create a table header row
    var headerRow = document.createElement("tr");

    // Loop through the headers and create table header cells (th)
    for (var i = 0; i < data.headers.length; i++) {
        var headerCell = document.createElement("th");
        headerCell.textContent = data.headers[i];
        headerRow.appendChild(headerCell);
    }

    // Append the header row to the table
    table.appendChild(headerRow);

    // Loop through the data and create table rows (tr) and cells (td)
    for (var i = 0; i < data.rows.length; i++) {
        var row = document.createElement("tr");

        for (var j = 0; j < data.rows[i].length; j++) {
            var cell = document.createElement("td");
            cell.textContent = data.rows[i][j];
            row.appendChild(cell);
        }

        // Append the row to the table
        table.appendChild(row);
    }

    // Append the table to the container
    tableContainer.appendChild(table);
}

// Example data for the table
var tableData = {
    headers: ["Name", "Age", "Country"],
    rows: [
        ["John", "30", "USA"],
        ["Alice", "25", "Canada"],
        ["Bob", "22", "UK"]
    ]
};

// Call the buildTable function with the data
buildTable(tableData);
