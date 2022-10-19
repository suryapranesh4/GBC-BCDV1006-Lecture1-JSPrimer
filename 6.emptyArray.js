function emptyArray(myArray){
    let resultArray = myArray;
    for(let i=0;i<myArray.length;i++) resultArray.splice(i);
    return resultArray;
}

console.log("emptyArray([1,2,3]) : ",emptyArray([1,2,3]));
console.log(`emptyArray(["egg","bacon","toast","coffee","random","juice"]) : `,emptyArray(["egg","bacon","toast","coffee","random","juice"]));