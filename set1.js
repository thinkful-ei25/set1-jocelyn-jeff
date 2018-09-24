
function getYearOfBirth(age){
    return 2018-age;
}
function createGreeting(name, age){
    const yob = getYearOfBirth(age);
    if (name.length < 1 || age.length <1){
        throw new Error("Arguments not valid");
    }
    if (typeof name !== "string" || typeof age !== "number"){
        throw new TypeError();
    }
    if (age < 0){
        throw new Error("Age can not be negative");
    }
    return (`Hi, my name is ${name} and I'm ${age} years old.
I was born in ${yob}.`);
}

try {
    const greeting1 = createGreeting('Rich', 18);
    console.log(greeting1);
  } catch(e) {
    console.error(e.message);
  }

console.log(createGreeting('Jo', 4));
console.log(createGreeting("jim", '3'));
console.log(createGreeting(777, 939393));