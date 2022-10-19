const calculatePoints = (wins,draws,losses) => wins*3 + draws*1;

console.log("calculatePoints(3,4,2) : ",calculatePoints(3,4,2));
console.log("calculatePoints(5,0,2) : ",calculatePoints(5,0,2));
console.log("calculatePoints(0,0,1) : ",calculatePoints(0,0,1));