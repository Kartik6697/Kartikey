//JavaScript function that reverse a number
document.write(`<h3>Reverse number</h3>`);
let x = 322564;
document.write(`input : ${x} <br>`);
const reverseVal = (x) =>{
    x = x + "";
    return x.split("").reverse().join("");
}
console.log(reverseVal(x));
document.write(`output : ${reverseVal(x)} <br> <br>`);

//vowel count in string
const vowel_count = (val) =>{
    let vowel_list = 'aeiouAEIOU';
    let count=0;

    for (let x = 0 ; x < val.length; x++) {
        if(vowel_list.indexOf(val[x]) !== -1){
            count +=1;
        
    }
}
return count;
}
document.write(`<h3>Count Vowels in string</h3>`);
console.log(`Vowel count : ${vowel_count("This is for trial purpose")}`);
document.write(`no of Vowels in this string is : ${vowel_count("This is for trial purpose")} <br>`);

