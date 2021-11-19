/////////////////////CHAPTER 31-34/////////

//q1

// var now = new Date();
// document.write(now );
// document.write("<br>" );

// //q2

// var month=["January", "February", "March", "April", "May", "June", "July", "August", "September","October", "November", "December"]
// document.write("Current Month:"+ " "+ month[now.getMonth()] );
// document.write("<br>" );

// //q3

// var day=new Date().toString().slice(0,3);
// document.write("Today is" + " "+ day)


//q4

// var day=new Date().toString().slice(0,3);
// if(day=="Sat" || day=="Sun" ){
//     alert("It's Fun Day")
// }
// else{
//     alert("Not Fun Day")
// }

//q5

// var date=new Date().toString().slice(8,10);
// document.write( "Date" + " "+ "is :"+  date + "<br>")
// if(date<=15){
//     document.write( "  First fifteen days of the month")
// }
// else{
//     document.write("Last fifteen days of the month")
// }


//q6

// var date = new Date();
// var ms = date.getTime();
// document.write("Current Date : " + date);
// document.write("<br>Elapsed milliseconds since January 1, 1970 : " + ms);
// document.write("<br>Elapsed minutes since January 1, 1970 : " + Math.floor(ms / (1000 * 60 * 60)));


//q7

// var AP=new Date().getHours;

// if(AP==0 && AP<=12){
//     alert("It's P.M")
// }
// else{
//     alert("It's A.M")

// }


//q8

// var laterDate=new Date("December 31, 2020");
// document.write(laterDate)

//q9

// var ramdan=new Date("June 18, 2015");
// var daysPass=Math.floor(ramdan.getTime()/(1000*60*24*365))
// document.write(daysPass+" days have passed since 1st Ramadan,2015");


//q10

// var oldate = new Date("Dec 1 , 2015");
// var nowmili = oldate.getTime()
// var nowdate = new Date("Dec 30 ,2015").getTime();
// var differ = nowdate  - nowmili  
// var totalSec = differ / (1000)
// totalSec = Math.floor(totalSec)
// document.write("On reference Date" + " " + oldate+ "<br>"+ totalSec+ " " +   "Seconds had passed since beginning of 2015 ")


//q11


// var current=new Date()
// document.write("Current date:" + " "+ current+ "<br>");
// current.setHours(2);
// document.write( "1 hour ago,it was "+ " "+  current)


//q12


// var current=new Date()
// document.write("Current date:" + " "+ current+ "<br>");
// current.setFullYear(1921);
// document.write( "100 years  ago,it was "+ " "+  current)


//q13


// var age=+prompt("Enter your age", "Your age is");
// var birth=new Date().getFullYear()-age
// document.write("Your age is "+ " "+ age + "<br>");
// document.write("Your Birth Year is:" + " "+ birth)

//q14

// var date=new Date()
// var month=date.getMonth()
// var Customer="ABC"
// var numOfunit= 410
// var chargePerUnit= 16
// var AmountPay= numOfunit*chargePerUnit
// var latePay=350
// var grossPay=AmountPay+latePay

// document.write(
//     "<h1> K-ELECTRIC BILL </h1>"+
//     "Customer name:" + " "+ Customer+ "<br>"+
//     "Month"+ " "+ month+ "<br>"+ 
//     "Number of Units:" + " "+ numOfunit+ "<br>"+
//     "Charges per Unit"+ " "+ chargePerUnit + "<br>"+ "<br>"+
//     "Net Amount Payable (within Due Date)"+ " "+ AmountPay+ "<br>"+
//     "Late Payment Surcharge"+ " "+ latePay+ "<br>"+ 
//     "Gross Amount Payable (after Due Date)"+ " "+ grossPay+ "<br>" 
// )

