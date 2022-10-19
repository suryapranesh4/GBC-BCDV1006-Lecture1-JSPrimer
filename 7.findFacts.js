const findFacts = ({name,population,continent}) =>  
     console.log(`${name} has a population of ${population} and is located in ${continent}`);

findFacts({
    name  : "Toronto",
    population : "6,197,000",
    continent : "North America"
});

findFacts({
    name  : "Venice",
    population : "261,905",
    continent : "Europe"
})