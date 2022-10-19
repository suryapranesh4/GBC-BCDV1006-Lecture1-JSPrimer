function getKeyValuePairs(obj){
    console.log("Object :",obj);
    console.log(Object.keys(obj),Object.values(obj));
}

getKeyValuePairs({ a: 5, b : 10, c : 16 });
getKeyValuePairs({ r: "React", a : "Angular", v : "Vue" });
getKeyValuePairs({ k1: true, k2 : false, k3 : false });