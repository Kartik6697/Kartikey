"use strict";

fetch("./dynamic-table.json")
.then(function(resp){
    return resp.json();
})
.then(function(data){
    console.log(data);
});




// let daily_pnl = fetch('././dynamic-table.json')
// function constructTable(selector) {
//     let cols = Headers(daily_pnl, selector);
    
//     for (let i = 0; i < daily_pnl.length; i++) {
//         let row = $('<tr/>');
//         for (let j = 0; j < daily_pnl.length; j++ ){
//             let val = daily_pnl[i][cols[daily_pnl]];

//             //if there is any key, which is matching
//             //with the column name
//             if (val == null ) val = "";
//             row.append($('<td/>').html(val));
//         }

//         //Adding each row to the table
//         $(selector).append(row);
//     }
// }

// function Header(daily_pnl, selector) {
//     let columns = [];
//     let header = $('<tr/>');

//     for (var i = 0; i< daily_pnl.length; i++){
//         let row = daily_pnl[i];
        
//         for (let k in row){
//             if ($.inArray(k, columns) == -1){
//                 columns.push(k);

//                 //create the header
//                 header.append($('<th/>').html(k));
//             }
//         }
//     }

//     // Appending the header to the table
//     $(selector).append(header);
//     return columns;
// }