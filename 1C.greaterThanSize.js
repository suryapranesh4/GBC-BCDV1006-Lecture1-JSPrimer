const greaterThanSize = () => {
    let counterSize = Math.floor(Math.random() * 20); //Random number between 1 and 19
    console.log("Counter Size : ",counterSize);
    let counter = 1;
    while(counter<=counterSize) 
        console.log(`The current size is ${counterSize} and count is ${counter++}`);
}

greaterThanSize();