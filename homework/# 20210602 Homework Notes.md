# 20210602 Homework Notes

Javascript Learning + other debugging notes

# BLOCK SCOPE

Variables that are declared with block scope are known as local variables because they are only available to the code that is part of the same block.

EXAMPLE

```
const logSkyColor = () => {
  let color = 'blue'; 
  console.log(color); // blue 
};
 
logSkyColor(); // blue 
console.log(color); // ReferenceError
```

another example

```
function logVisibleLightWaves(){

};
```

ANOTHER example

```
const logVisibleLightWaves = () => {
  const lightWaves = 'Moonlight';
  console.log(lightWaves);
};

logVisibleLightWaves();

// console.log(lightWaves);
```

---

Here’s another example of how to use block scope, as defined within an if block:

```
const logSkyColor = () => {
  const dusk = true;
  let color = 'blue'; 
  if (dusk) {
    let color = 'pink';
    console.log(color); // pink
  }
  console.log(color); // blue 
};
 
console.log(color); // ReferenceError
```

---


Here, you’ll notice:

We create a variable dusk inside the logSkyColor() function.
After the if statement, we define a new code block with the {} braces. Here we assign a new value to the variable color if the if statement is truthy.
Within the if block, the color variable holds the value 'pink', though outside the if block, in the function body, the color variable holds the value 'blue'.
While we use block scope, we still pollute our namespace by reusing the same variable name twice. A better practice would be to rename the variable inside the block.

another example

```

const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  // Add if statement here:
  if (region === 'The Arctic'){
  }
  console.log(lightWaves);
};

logVisibleLightWaves();
```

another example

```
const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  // Add if statement here:
  if (region === 'The Arctic'){
    let lightWaves = 'Northern Lights';
  }
  console.log(lightWaves);
};

logVisibleLightWaves();
```

## clean scoping example

here is an example

```
const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  // Add if statement here:
  if (region === 'The Arctic'){
    let lightWaves = 'Northern Lights';
    console.log(lightWaves)
  }
  console.log(lightWaves);
};

logVisibleLightWaves();
```

Run your code and notice the output. Inside the if block console.log(lightWaves) logs the value Northern Lights to the console. Outside the if block, but still within the function, the same statement logs Moonlight to the console.


---


## SCOPE REVIEW


In this lesson, you learned about scope and how it impacts the accessibility of different variables.

Let’s review the following terms:

Scope is the idea in programming that some variables are accessible/inaccessible from other parts of the program.

Blocks are statements that exist within curly braces {}.

Global scope refers to the context within which variables are accessible to every part of the program.

Global variables are variables that exist within global scope.

Block scope refers to the context within which variables that are accessible only within the block they are defined.

Local variables are variables that exist within block scope.

Global namespace is the space in our code that contains globally scoped information.

Scope pollution is when too many variables exist in a namespace or variable names are reused.


---

# ARRAYS

javascript array example for a basic new years list

```
let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];
```

You can also access individual characters in a string using bracket notation and the index. For instance, you can write

```
const hello = 'Hello World';
console.log(hello[6]);
// Output: W
```

another example

```
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
let listItem = (famousSayings[0]);
console.log(listItem);
```

another example

```
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
let listItem = (famousSayings[0]);
console.log(listItem);
console.log(famousSayings[2]);
```

---

## UPDATE ELEMENTS

EXAMPLE

```
let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];
 
seasons[3] = 'Autumn';
console.log(seasons); 
//Output: ['Winter', 'Spring', 'Summer', 'Autumn']
```
another example

```
let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados';
```

## ARRAYS WITH LET AND CONST

You can declare variables with both the let and const keywords. Variables declared with let can be reassigned.

Variables declared with the const keyword cannot be reassigned. However, elements in an array declared with const remain mutable. Meaning that we can change the contents of a const array, but cannot reassign a new array or a different value.

EXERCISE EXAMPLE

BEFORE

```
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
```

progression

```
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);
```

progression

```
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);
condiments = ['Mayo'];
console.log(condiments);
```

final progression

```
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);
condiments = ['Mayo'];
console.log(condiments);
utensils[3] = 'Spoon';
console.log(utensils);
```

---

# Array Length Propery

example code

```
const newYearsResolutions = ['Keep a journal', 'Take a falconry class'];
 
console.log(newYearsResolutions.length);
// Output: 2
```

---

# PUSH EXAMPLES

```
const chores = ['wash dishes', 'do laundry', 'take out trash'];


chores.push('thing','thing2');
console.log(chores);
```