// const createP = document.createElement("p");
// createP.innerText = "Created form JS";

let obj = JSON.parse(daily_pnl);

printValues = (obj) => {
    for(let k in obj) {
        if(obj[k] instanceof Object) {
            printValues(obj[k]);
        } else {
            document.write(obj[k] + "<br>");
        };
    }
};