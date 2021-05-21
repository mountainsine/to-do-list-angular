{\rtf1\ansi\ansicpg1252\cocoartf2580
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;\f1\fnil\fcharset0 HelveticaNeue;\f2\fnil\fcharset0 Monaco;
}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;\red255\green255\blue255;\red14\green17\blue35;
\red17\green16\blue23;\red229\green227\blue232;}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0;\cssrgb\c100000\c100000\c100000;\cssrgb\c6275\c8627\c18431;
\cssrgb\c8235\c7843\c12157;\cssrgb\c91765\c91373\c92941;}
{\*\listtable{\list\listtemplateid1\listhybrid{\listlevel\levelnfc23\levelnfcn23\leveljc0\leveljcn0\levelfollow0\levelstartat1\levelspace360\levelindent0{\*\levelmarker \{none\}}{\leveltext\leveltemplateid1\'00;}{\levelnumbers;}\fi-360\li720\lin720 }{\listname ;}\listid1}}
{\*\listoverridetable{\listoverride\listid1\listoverridecount0\ls1}}
\margl1440\margr1440\vieww34720\viewh19680\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs30 \cf0 # CODE ACADEMY JAVASCRIPT TRAINING 20210517 NOTES\
\
// A pretty Decent directory of example code snippets for a beginner\
https://www.codecademy.com/learn/introduction-to-javascript/modules/learn-javascript-introduction/cheatsheet\
\
\
EXAMPLE JAVAsCRIPT\
\
\
\
console.log('Codecademy'.toUpperCase()); \
\
// OFFICIAL JAVASCRIPT STRING DOCUMENTATION \
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String\
\
\
\
//console.log(Math.random());\
//console.log(Math.random() * 50);\
console.log(Math.floor(Math.random() *  50));\
\
// OFFICIAL JAVASCRIPT Math methods documentation\
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math\
\
Use the .ceil() method to calculate the smallest integer greater than or equal to 43.8.\
\
console.log(Math.ceil(Math.random() >= 43.8));\
\
\
https://en.wikipedia.org/wiki/Floating-point_arithmetic\
\
// console.log(Number(Math.random()));\
\
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number\
\
\
///\
\
\pard\pardeftab720\sl480\partightenfactor0

\f1\fs45 \cf2 \cb3 \expnd0\expndtw0\kerning0
Review\
\pard\pardeftab720\sl422\sa240\partightenfactor0

\fs32\fsmilli16200 \cf4 Let\'92s take one more glance at the concepts we just learned:\cb1 \
\pard\tx220\tx720\pardeftab720\li720\fi-720\sl422\sa120\partightenfactor0
\ls1\ilvl0\cf4 \cb3 \kerning1\expnd0\expndtw0 		\expnd0\expndtw0\kerning0
Data is printed, or logged, to the console, a panel that displays messages, with\'a0
\f2\fs27\fsmilli13560 \cf5 \cb6 console.log()
\f1\fs32\fsmilli16200 \cf4 \cb3 .\cb1 \
\ls1\ilvl0\cb3 \kerning1\expnd0\expndtw0 		\expnd0\expndtw0\kerning0
We can write single-line comments with\'a0
\f2\fs27\fsmilli13560 \cf5 \cb6 //
\f1\fs32\fsmilli16200 \cf4 \cb3 \'a0and multi-line comments between\'a0
\f2\fs27\fsmilli13560 \cf5 \cb6 /*
\f1\fs32\fsmilli16200 \cf4 \cb3 \'a0and\'a0
\f2\fs27\fsmilli13560 \cf5 \cb6 */
\f1\fs32\fsmilli16200 \cf4 \cb3 .\cb1 \
\ls1\ilvl0\cb3 \kerning1\expnd0\expndtw0 		\expnd0\expndtw0\kerning0
There are 7 fundamental data types in JavaScript: strings, numbers, booleans, null, undefined, symbol, and object.\cb1 \
\ls1\ilvl0\cb3 \kerning1\expnd0\expndtw0 		\expnd0\expndtw0\kerning0
Numbers are any number without quotes:\'a0
\f2\fs27\fsmilli13560 \cf5 \cb6 23.8879
\f1\fs32\fsmilli16200 \cf4 \cb1 \
\ls1\ilvl0\cb3 \kerning1\expnd0\expndtw0 		\expnd0\expndtw0\kerning0
Strings are characters wrapped in single or double quotes:\'a0
\f2\fs27\fsmilli13560 \cf5 \cb6 'Sample String'
\f1\fs32\fsmilli16200 \cf4 \cb1 \
\ls1\ilvl0\cb3 \kerning1\expnd0\expndtw0 		\expnd0\expndtw0\kerning0
The built-in arithmetic operators include\'a0
\f2\fs27\fsmilli13560 \cf5 \cb6 +
\f1\fs32\fsmilli16200 \cf4 \cb3 ,\'a0
\f2\fs27\fsmilli13560 \cf5 \cb6 -
\f1\fs32\fsmilli16200 \cf4 \cb3 ,\'a0
\f2\fs27\fsmilli13560 \cf5 \cb6 *
\f1\fs32\fsmilli16200 \cf4 \cb3 ,\'a0
\f2\fs27\fsmilli13560 \cf5 \cb6 /
\f1\fs32\fsmilli16200 \cf4 \cb3 , and\'a0
\f2\fs27\fsmilli13560 \cf5 \cb6 %
\f1\fs32\fsmilli16200 \cf4 \cb3 .\cb1 \
\ls1\ilvl0\cb3 \kerning1\expnd0\expndtw0 		\expnd0\expndtw0\kerning0
Objects, including instances of data types, can have properties, stored information. The properties are denoted with a\'a0
\f2\fs27\fsmilli13560 \cf5 \cb6 .
\f1\fs32\fsmilli16200 \cf4 \cb3 \'a0after the name of the object, for example:\'a0
\f2\fs27\fsmilli13560 \cf5 \cb6 'Hello'.length
\f1\fs32\fsmilli16200 \cf4 \cb3 .\cb1 \
\ls1\ilvl0\cb3 \kerning1\expnd0\expndtw0 		\expnd0\expndtw0\kerning0
Objects, including instances of data types, can have methods which perform actions. Methods are called by appending the object or instance with a period, the method name, and parentheses. For example:\'a0
\f2\fs27\fsmilli13560 \cf5 \cb6 'hello'.toUpperCase()
\f1\fs32\fsmilli16200 \cf4 \cb3 .\cb1 \
\ls1\ilvl0\cb3 \kerning1\expnd0\expndtw0 		\expnd0\expndtw0\kerning0
We can access properties and methods by using the\'a0
\f2\fs27\fsmilli13560 \cf5 \cb6 .
\f1\fs32\fsmilli16200 \cf4 \cb3 , dot operator.\cb1 \
\pard\tx220\tx720\pardeftab720\li720\fi-720\sl422\sa240\partightenfactor0
\ls1\ilvl0\cf4 \cb3 \kerning1\expnd0\expndtw0 		\expnd0\expndtw0\kerning0
Built-in objects, including\'a0
\f2\fs27\fsmilli13560 \cf5 \cb6 Math
\f1\fs32\fsmilli16200 \cf4 \cb3 , are collections of methods and properties that JavaScript provides.\
\pard\tx720\pardeftab720\sl422\sa240\partightenfactor0
\cf4 \cb1 \
\
// -- =============================================\
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs30 \cf0 \kerning1\expnd0\expndtw0 \
VARIABLES\
\
There are a few general rules for naming variables:\
\
Variable names cannot start with numbers.\
Variable names are case sensitive, so myName and myname would be different variables. It is bad practice to create two variables that have the same name using different cases.\
Variable names cannot be the same as keywords. For a comprehensive list of keywords check out MDN\'92s keyword documentation.https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords\
\
\
let changeMe = true;\
changeMe = false;\
console.log(changeMe);\
\
//  -- ======================================================\
\
const myName = 'Gilberto';\
console.log(myName); // Output: Gilberto\
\
\
/// -- =======\
\
# STRING CONCATENATION \
\
\
\
let favoriteAnimal = 'Penguin';\
//console.log('I own a pet ' + favoriteAnimal + '.');\
console.log\
\
\
--- ==========\
\
\
# STRING INTERPOLATION \
\
\
template literals. }