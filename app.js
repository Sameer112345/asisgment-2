var num1 = 3;

var num2 = 5;

var res =(num1 + num2)

document.write("sum of 3 and 5 is " +res + "<br>" )   



var num1 = 3;

var num2 = 5;

var res =(num1 - num2)

document.write("sub of 3 and 5 is " +res + "<br>")    


var num1 = 3;

var num2 = 5;

var res =(num1 * num2)

document.write("multi of 3 and 5 is " +res + "<br>") 


var num1 = 3;

var num2 = 5;

var res =(num1 % num2)

document.write("mod of 3 and 5 is " +res + "<br>") 

var num = 1
console.log(num)
//  answer2
var input ;
document.write(" Value after variable declaration is"+input + "<br>")
input = 5;
document.write("Initial value"+input+"<br>")
input++;
document.write("Value after increment is"+input+"<br>")
input+=7;
document.write("value after addtion is"+input +"<br>")
--input;
document.write("Value after decrement is :"+input+"<br>")
input%=3;
document.write("The remainder is"+input+ "<br>")

var ticket = 600;
ticket*=5
document.write("total cost to buy 5 ticket to a move is"+ticket+"pkr <br>")
// table
var table_num = +prompt("which table you want to print ", "enter number")
for(var i=1; i<=10; i++){
    document.write(table_num+" x "+i+" = " +(table_num*i)+"<br>")
}
tempreature


var C=25;
F=(C*9/5)+32;

 document.write(C+"C is" +F+"<br>")
 var F=7;
 C=(F-32)*5/9;
 document.write(F+"F is" +C+"<br>")
// answer 7
var priceOfItem1 = 1950; // Price of item 1 in dollars
var priceOfItem2 = 3; // Price of item 2 in dollars
var quantityOfItem1 =7*100;  // Ordered quantity of item 1
var quantityOfItem2 =2+2;  // Ordered quantity of item 2
var shippingCharges = 100; // Shipping charges in dollars

// Calculate total cost of items
totalCostItem1 = priceOfItem1 + quantityOfItem1;
totalCostItem2 = priceOfItem2 + quantityOfItem2;
subtotal = totalCostItem1 + totalCostItem2;
subtotal = totalCostItem1 + totalCostItem2;
totalAmount = subtotal + shippingCharges;
document.write("Ordered quantity of item 1: "+quantityOfItem1 +"<br>");
document.write("Total cost for item 1: " +totalCostItem1+"<br>");
document.write("Price of item 2: " + priceOfItem2+"<br>");
document.write("Ordered quantity of item : " + quantityOfItem2 +"<br>");
document.write("Total cost for item 2: " + totalCostItem2+"<br>");

document.write("Subtotal (before shipping): " + subtotal.toFixed(2)+"<br>");
document.write("Shipping charges: " + shippingCharges.toFixed(2)+"<br>");
document.write("Total amount to be paid: " + totalAmount.toFixed(2)+"<br>");

// answer 8
var totalMarks = 980; // Example total marks
var obtainedMarks = 804; // Example marks obtained

// Calculate percentage
percentage = (obtainedMarks/totalMarks)*100;

// Display the result using document.write
document.write("<h1>Percentage Calculation</h1>");
document.write("<p>Total Marks: " + totalMarks + "</p>");
document.write("<p>Marks Obtained: " + obtainedMarks + "</p>");
document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");
// answer 9
var usdToPkrRate = 104.80; // 1 US Dollar = 104.80 Pakistani Rupees
var sarToPkrRate = 28;     // 1 Saudi Riyal = 28 Pakistani Rupees

// Amounts
var usdAmount = 10; // Amount in US Dollars
var sarAmount = 25; // Amount in Saudi Riyals

// Convert total currency to Pakistani Rupees using a single expression
var totalInPkr = (usdAmount * usdToPkrRate) + (sarAmount * sarToPkrRate);

// Display the result using document.write
document.write("<h1>Currency Conversion</h1>");
document.write("<p>Amount in US Dollars: $" + usdAmount + "</p>");
document.write("<p>Amount in Saudi Riyals: SR " + sarAmount + "</p>");
document.write("<p>Total in Pakistani Rupees: PKR " + totalInPkr.toFixed(2) + "</p>");
// asnwer 10
// Initialize the variable with a number
var initialNumber = 8; // You can change this value to test different numbers

// Perform the arithmetic operations in a single expression
var result = ((initialNumber + 5) * 10) / 2;

// Display the result using document.write
document.write("<h1>Arithmetic Operations Result</h1>");
document.write("<p>Initial Number: " + initialNumber + "</p>");
document.write("<p>Result after operations: " + result.toFixed(2) + "</p>");

// ansewer 10
// Store the current year and birth year in variables
var currentYear = new Date(2016).getFullYear(); // Gets the current year
var birthYear = 1992; // Example birth year, you can change this value

// Calculate the possible ages
var ageThisYear = currentYear-birthYear;
var ageNextYear = ageThisYear + 1;

// Display the result
document.write("<h1>Age Calculator</h1>");
document.write("<p>They are either " + ageThisYear + " or " + ageNextYear + " years old.</p>");



// answer 11
var pi = 3.142;

// Calculate the circumference
var circumference = 2 * pi * radius;

// Calculate the area
var area = pi * radius * radius;

// Display the results using document.write
document.write("<h1>The Geometrizer</h1>");
document.write("<p>The circumference is " + circumference.toFixed(2) + "</p>");
document.write("<p>The area is " + area.toFixed(2) + "</p>");
var radius = 7; // Replace with the desired radius value
var pi = 3.142;
var circumference = 2 * pi * radius;
var area = pi * radius * radius;
document.write("<h1>The Geometrizer</h1>");
document.write("<p>The circumference is " + circumference.toFixed(2) + "</p>");
document.write("<p>The area is " + area.toFixed(2) + "</p>");

   // Store your favorite snack into a variable
   var snack = "chocolate bars"; // Replace with your favorite snack

   // Store your current age into a variable
   var currentAge = 15; // Replace with your current age

   // Store a maximum age into a variable
   var maxAge = 65; // Replace with the maximum age you expect to reach

   // Store an estimated amount per day (as a number)
   var amountPerDay = 3; // Replace with the number of snacks you eat per day

   // Calculate the number of days left in your lifetime
   var daysLeft = (maxAge - currentAge) + 65; // Approximate number of days

   // Calculate the total amount of snack needed for the rest of your life
   var totalSnackNeeded = daysLeft + amountPerDay;

   // Display the result using document.write
   document.write("<h1>Lifetime Supply Calculator</h1>");
   document.write("<p>You will need " + totalSnackNeeded + " " + snack + " to last you until the ripe old age of " + maxAge + ".</p>");
// chapter 6
// answe 1
   var number = 10; // Example number, you can change this value
       // Perform the arithmetic operations
       var addition = number + 10;
       var subtraction = number - 5;
       var multiplication = number * 3;
       var division = number / 2;

       // Display the results using document.write
       document.write("<h1>Arithmetic Operations</h1>");
       document.write("<p>Original Number: " + number + "</p>");
       document.write("<p>After adding 10: " + addition + "</p>");
       document.write("<p>After subtracting 5: " + subtraction + "</p>");
       document.write("<p>After multiplying by 3: " + multiplication + "</p>");
       document.write("<p>After dividing by 2: " + division.toFixed(2) + "</p>");
    //ANSWER 2
    var a = 2;
    var b = 1;

    // Stage 1: --a
    var stage1 = --a;
    document.write("<h1>Stage 1: --a</h1>");
    document.write("<p>--a: " + stage1 + "</p>");
    document.write("<p>Current values - a: " + a + ", b: " + b + "</p>");

    // Stage 2: --a - --b
    var stage2 = --a - --b;
    document.write("<h1>Stage 2: --a - --b</h1>");
    document.write("<p>--a - --b: " + stage2 + "</p>");
    document.write("<p>Current values - a: " + a + ", b: " + b + "</p>");

    // Stage 3: --a - --b + ++b
    var stage3 = stage2 + ++b;
    document.write("<h1>Stage 3: --a - --b + ++b</h1>");
    document.write("<p>--a - --b + ++b: " + stage3 + "</p>");
    document.write("<p>Current values - a: " + a + ", b: " + b + "</p>");

    // Stage 4: --a - --b + ++b + b--
    var result = stage3 + b--;
    document.write("<h1>Stage 4: --a - --b + ++b + b--</h1>");
    document.write("<p>--a - --b + ++b + b--: " + result + "</p>");
    document.write("<p>Current values - a: " + a + ", b: " + b + "</p>");
    // answer 3
    var userName = prompt("Please enter your name:");

    // Create a greeting message
    var greetingMessage = "Hello, " + userName + "! Welcome to our website.";

    // Display the greeting message in an alert box
    alert(greetingMessage);

    // answer 6
   // Step a: Prompt user for three subjects
   var subject1 = prompt("Enter the name of the first subject:");
   var subject2 = prompt("Enter the name of the second subject:");
   var subject3 = prompt("Enter the name of the third subject:");

   // Step b: Total marks for each subject
   var totalMarksPerSubject = 100;

   // Step c: Prompt user for obtained marks for the first subject
   var obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
   // Step d: Prompt user for obtained marks for the remaining subjects
   var obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
   var obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

   // Calculate total obtained marks
   var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
   // Calculate total possible marks
   var totalPossibleMarks = totalMarksPerSubject * 3;
   // Calculate percentage
   var percentage = (totalObtainedMarks / totalPossibleMarks) * 100;

   // Display the results in a table
   var tableHtml = "<h1>Marks and Percentage</h1>";
   tableHtml += "<table>";
   tableHtml += "<tr><th>Subject</th><th>Obtained Marks</th><th>Total Marks</th></tr>";
   tableHtml += "<tr><td>" + subject1 + "</td><td>" + obtainedMarks1 + "</td><td>" + totalMarksPerSubject + "</td></tr>";
   tableHtml += "<tr><td>" + subject2 + "</td><td>" + obtainedMarks2 + "</td><td>" + totalMarksPerSubject + "</td></tr>";
   tableHtml += "<tr><td>" + subject3 + "</td><td>" + obtainedMarks3 + "</td><td>" + totalMarksPerSubject + "</td></tr>";
   tableHtml += "<tr><td><strong>Total</strong></td><td><strong>" + totalObtainedMarks + "</strong></td><td><strong>" + totalPossibleMarks + "</strong></td></tr>";
   tableHtml += "</table>";
   tableHtml += "<p><strong>Percentage: </strong>" + percentage.toFixed(2) + "%</p>";

   // Display the table in the browser
   document.write(tableHtml);
   
    

   


    
           






