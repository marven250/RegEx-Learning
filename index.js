let reg = /a/ ;
let reg1 = new RegExp("a")


// console.log(reg.test("aaa"))
// console.log(reg.test("aaaaaaaa"))

////// These are different forms of using regExpressions. Both will CL true because there are multiple
//////  instances of the match we're looking for "a". RegExpressions are case sensitive so a reg.test 
//////  of "A" would return false if logged.

let reg2 = /a/i ;

// console.log(reg2.test("AAAAA"))

//////   Due to the use of an i flag at the end of our reg 2 value "/a/i", it makes our search case 
//////   insensitive so a reg2.test of "AAAAAA" would CL true, because multitple matches were found.

let reg3 = /a{10,}/i

// console.log(reg3.test("AAAAaaaaA"))

//////    This reg3.test would CL false because the requirement to pass this test is to have a minimum
//////     of 10 A's, and any number of A's more than 10 would pass also since no maximum value is
//////     provided after the comma in the {10,} portion of the reg3 value. Any number of A's below 10
//////     will fail.

let reg4 = /555/

// console.log(reg4.test(5))
// console.log(reg4.test(5555))

//////   The first CL of the reg4.test will display false because we're looking for at least one match of
//////   3 5's to pass. Our second CL will pass the test since it has at least 1 match of 3 5's.


let reg5 = /a{1,}/
let reg6 = /a+/

// console.log(reg5.test("aaaaaaa"))
// console.log(reg6.test("aab"))
// console.log(reg5.test("g"))
// console.log(reg6.test("23?"))

//////    Both of these reg expressions are asking for the same requirements to pass. Both are asking for
//////     a value of at least one A or an infinite amount of A's to pass the test. First two CL will pass
//////     and last two CL will fail.


let reg7 = /a.d/i

// console.log(reg7.test("b/a5d"))
// console.log(reg7.test("afd"))
// console.log(reg7.test("a5d"))
// console.log(reg7.test("a34d"))


/////  This regExp is looking for a match that begins with A, has any ONE character in between, and ends 
/////  with D. The first three CL will be true because there is at least one instance of the "a character d"
/////  sequence. The final CL will fail because there are two characters in between a and d.


let reg8 = /a.+c/

// console.log(reg8.test("ahcabyuuicf"))
// console.log(reg8.test("a.fclokafrlc"))
// console.log(reg8.test("ac"))

////   This reg8 test is looking for a match that begins with an A, has any number of charaters in between,
////    and ends with C.The first two CL will evaluate to true. The first CL will have two matches. The
////   second CL will only have one match because even though it contains multiple matches, "a.fc" and 
////    "afrlc", it will only recognize the "a.fclokafrlc" match. The last CL will evaluate to false because
////    there aren't any characters in between the "ac"

let reg9 = /a.+?c/

//console.log(reg9.test("a.fclokafrlc"))

////  To avoid the issue we we're having in the last CL of the reg8 test where it didn't recognize "a.fc" 
/////  and "afrlc". It will now recognize these two expressions because we added the question mark into our
/////   reg8 Exp "/a.+c/" to form our reg9 Exp "/a.+?c/". We will now have two matches for our reg9 test,
/////   the "a.fclokafrlc" match will not be recognized.


let reg10 = /abc/

//console.log(reg10.test("bac"))


/////    This reg10 test will CL false because even though the test contains the letters A B and C,
/////    there's no match in the order of "abc".


let reg11 = /[tds]/

// console.log(reg11.test("sstd"))
// console.log(reg11.test("tdf"))

/////    Both of these CL will evaluate to true because when the brackets are added inside a regExp, it
/////    doesn't look for a match of the inserted characters in sequence anymore. A match of any one of
////     the characters inserted, T, D, or F will satisfy the test's requirement. 


let reg12 = /[c-z]/

////  This reg12 expression is looking for any character between c and z to fulfill it's requirement.

let reg13 = /[a-z0-9]/

///// This reg 13 expression is looking for any character in the alphabet or any number from 0-9 to fulfill
////   its requirement


let reg14 = /\w/

// console.log(reg14.test("cab"))
// console.log(reg14.test(1233459))

/////  This notation "\w" in the reg14 expression is looking for any letters in the alphabet or any numbers
/////   in order to meet its requirement (alphanumeric). Both CL will evaluate to true. No special 
/////   characters will be accepted.

let reg15 = /\W/

// console.log(reg15.test("abdffvf56y56470"))
// console.log(reg15.test(".*])"))

////   This notation "\W", since the W is capitalized, is looking for nonAlphanumeric characters to 
////   pass this reg15 test. The first CL will fail, the second will evaluate to true.

let reg16 = /\d/

// console.log(reg16.test("12349"))
// console.log(reg16.test("fdjsvn;"))

////    This reg16 variable is looking for any digits in ordr to evaluate to true, anything else will fail.
////    The first CL will be true. The second will be false.

let reg17 = /\D/

// console.log(reg17.test("/=*"))
// console.log(reg17.test("fvgrb"))

////    This reg17 variable wants any nondigit characters in order to pass. Both CL will be true.

let reg18 = /\s/
let reg19 = /\S/

// console.log(reg18.test(" "))
// console.log(reg19.test(" "))

////    Reg18 is looking for any white space to match. Reg19 is looking for anything that's not white
////    space in order to match. The first CL will be true, second CL will be false. 

let reg20 = /\d\d-\d\d-\d\d\d\d/

// console.log(reg20.test("05-28-2018"))
// console.log(reg20.test("5-28-18"))

////   Reg19 wants a date in that exact format "dd-mm-yyyy" in order to pass . Anything else will fail. The
////   first CL will be true, and the second will be false.


let reg21 = /^t/
let reg22 = /q$/

// console.log(reg21.test("tafo"))
// console.log(reg22.test("paq"))

/////   Reg21 wants a value that starts with t, and reg22 wants a value that ends with q in order to pass.
/////   Both CL will evaluate to true.


let reg23 = /0(12)/
let reg24 = /0(43|99|18)/

// console.log(reg23.test("011"))
// console.log(reg24.test("043"))
// console.log(reg24.test("018"))

////   Reg23 is looking for a match of "012". Reg24 is looking for a match of either "043", "099", or "018"
////   in order to pass. The first CL will fail, the second and last CLs will evaluate to true.


let reg25 = /I am (=?great)/

console.log(reg25.test("I am great"))
console.log(reg25.test("I am greater"))
console.log(reg25.test("I am very great"))

/////   Reg25 wants a match of "I am" that is followed by "great". The first two CL will be true. and the
////    last CL will be false.












