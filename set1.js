
function getYearOfBirth(age){
    return(2018-age);
}
function createGreeting(name, age){
    const yob = getYearOfBirth(age);
    if (age < 0){
        throw new Error("Age can not be negative");
    
    }
    return (`Hi, my name is ${name} and I'm ${age} years old.
I was born in ${yob}.`);
    try {
        const greeting1 = createGreeting('Jo', 4);
    } catch (error) {
        console.error(error)

    }
}



console.log(createGreeting('Jo', -4));