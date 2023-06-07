//////////////////////////////////////////////////////////////////////////////////
/*  [ #61 - Date - Methods Part 2 ] [ #62 - Date - Methods Part 3 ]

setDate ( Day [Req] ) 
setFullyear (Year [Req] , Month [Opt] , Day [Opt] ) 
setHours ( Hours [Req] , Minutes [Opt] , Seconds [Opt] , Mill seconds [Opt])
setMinutes ( Minutes [Req] , Seconds [Opt] , Mill seconds [Opt] ) 
setSeconds ( Seconds [Req] , Mill seconds [Opt] ) 
setMill seconds ( setMill seconds )
setMonth ( Month [Req] , Day [Opt] )
setUTCDate  ( Day [Req] )  the Global Date




now () بيجيب السنة او اليوم او اي حاجه انتا مختارها بس بيطرها من سنه 1970
parse () بيعمل نفس الكلام الي بيعمله العملية الي فوق بس انتا هنا الي بتحدد النسة الي عاوز تبتدي منها
toDateString () بيعرضلك التاريخ بطريقة
toISOString () بيعرضلك التاريخ بطريقة تانيه
toTimeString () بيعرضلك الوقت بس



var theDate = new Date();
    
 theDate.set(11); 

console.log (theDate);

*/

//////////////////////////////////////////////////////////////////////////////////
/* [ #55 - Regular Expression - Intro ] [ #56 - Regular Expression - Brackets ] [ #57 - Regular Expression - Quantifiers ]

[ i ] ==> بتخليه ميفرقش سواء كان الحرف كبير ولا صغير
[ g ] ==> بتخليه يدور في الكلام كله مش اول حرف يقابله بس
[ m ] ==> لو عندك كذا سطر كلام بيخليه يدور في السطور كلها مش اول سطر بس

Brackets use:
[...] Character
[^...] Not character يعني يبدل كل الحروف ما عدا الحرف لاي انتا مختاره
[a-z] Range بتختبار الحرف الي عاوز تغيرة ما بين اني حروف
[0-10] Range the range can be a number
[A-z] Range ممكن تكتبه كده بحيس يدور في الحروف الكبيرة والصغيره من غير ما تعمل الي الجلوبل
[0-9A-z] Double Range

letter{ number } بتكتب مكان كلمه الرقم رقم الحرف الي عاوز تبدله
letter{ number , number } بتكتب مكان كلمه الرقم رقم الحرف الي عاوز تبدله و بتحددله ما بين رقمين
letter{ number ,  } At least


var string = " My Naame Is  Mohaaamed Amr ",

    result = string.replace(/a{2,}/gi , "9");
    
    console.log(result);

    */
//////////////////////////////////////////////////////////////////////////////////
/* [ #50 - Math - Ceil ] [ #51 - Math - Floor ] [ #52 - Math - Round ] [ #53 - Math - Min, Max ]  [ #54 - Math - Random ]

floor: لو الرقم فيه كسور زي 4.1 فهو بيقرب الرقم لاقل رقم صحيح الي هو 4 الكلمة معناها ارض
ceil: لو الرقم فيه كسور زي 4.1 فهو بيقرب الرقم لاعلي رقم صحيح الي هو 5 الكلمه معناها سقف
round:  لو الرقم فيه كسور زي 4.1 فهو بيقرب الرقم لاقرب رقم صحيح الي هو 4 انما لو كان الرقم 4.5 فهيكون الناتج 5 كااقرب رقم صحيح
random: بيطلعلي ارقام عشوائية


var a = Math.floor(4.1);
console.log(a);

var b = Math.ceil(4.1);
console.log(b);

var c = Math.round(4.1);
console.log(c);

var d = Math.min(4, 5, 6, -5, -10, 50);
console.log(d);

var e = Math.max(4, 100, -100, 500, 60);
console.log(e);

var f = Math.random();
console.log( Math.floor( f * 10) );

*/

//////////////////////////////////////////////////////////////////////////////////
/* #48 - Loop - Control - Break, Continue, Label

break: stop the loop بيوقف اللوب عن الشغل 
continue: disappear the number you write in the if function بيتجاهل الرقم الي انتا كتبه جوه الاف



var i , x ;

mainloop:

for ( i = 0; i < 5; i++ ) {
    
childloop:

for ( x = 6; x < 10; x++ ) {
    
    if ( x == 8 ) {
        
        break mainloop;
    }
    
    console.log (i + " -- " + x);
}

}

    
    if ( i== 5 ) {
        continue;
    }
    
    if ( i== 5 ) {
        break;
    }
    
    */
   

//////////////////////////////////////////////////////////////////////////////////
/* #47 - Loop - While, Do While 

var i=0;
while (i <= 10) {
    console.log(i);
    i++;
}


var i=0;
do {
    
    console.log(i);
    i++;
    
}while( i <= 10);

*/

//////////////////////////////////////////////////////////////////////////////////
/* #46 - Loop - For Advanced 

function generateyears(Start, End) {
    
    "use strict";
    var years;
    document.write("<select>");
    for (years = Start;  years <= End;  years++) {
        document.write("<option value=\"" + years + "\">" + years + "</option>");
    }
    document.write("</select>");
}
generateyears (1800,2000);
generateyears (2000,2010);
generateyears (2010,2021);
*/




/*
var i = 0 ;

for (;;) {
    
    if (i > 10) break;
    
    console.log(i);
    
    i++;
}
*/

//////////////////////////////////////////////////////////////////////////////////
/* #45 - Loop - For In

var myname = {
  firstname: "mohamed",
  middlename: "Amr",
  lastname:   "Abuewisha"
};

var prop;

for ( prop in myname) {
    console.log( prop + " : " + myname[prop])
}
*/

//////////////////////////////////////////////////////////////////////////////////
/* #44 - for - Loop

if (start;  condition; final expression;) { 
    // statement
}


var friends = ["Mohamed", "Amr", "Fouad", "Abuewisha"];

var i;
for ( i = 0 ; i < friends.length ; i ++) {
    console.log(friends[i]);
}

*/

//////////////////////////////////////////////////////////////////////////////////
/*#42 - Strings Methods - Chain Methods
هنا طريقة عمل كذا حاجه في سطر واحد من غير ما تعمل كل حاجه لوحدها 


var myage = 2001,
mystring = myage.toString().replace(0,1).split("");

console.log(myage);
console.log(mystring);

*/
//////////////////////////////////////////////////////////////////////////////////
/* #41 - Strings Methods - All References

1- trim   : delete the space بتمسح المسافات الي في الاول و الاخر غير كده ملهاش دعوه بالمسافات الي ما بين الكلام


var myname = "         Hello Mohamed Amr",
    mytrim = myname.trim();
    
    console.log(myname);
    console.log(mytrim);
*/    

//////////////////////////////////////////////////////////////////////////////////
/* #40 - Strings Methods - Convert Letters 
var myname = "Hello Mohamed Amr",
    mylowercase = myname.toLowerCase(),
    myuppercase = myname.toUpperCase();
    
    console.log(myname);
    console.log(mylowercase);
    console.log(myuppercase);

 */
//////////////////////////////////////////////////////////////////////////////////
/* #39 - Strings Methods - Concatenating

var myname = String.fromCharCode( 77, 111, 104, 97, 109, 101, 100, 50, 48, 48, 49); 
console.log(myname);
*/

//////////////////////////////////////////////////////////////////////////////////
/* #38 - Strings Methods - Find And Replace
1-  charAt      : mychar( number of the index)
2-  charCodeAt  : mycharCodeAt(number of the index)  each letter like ( o ) have a code number
3-  replace     : replace( old value , new value ) (/and/g , "or") /and/g بنكتبها لو عاوزه يبدل الكلمة ديه في كل النص مش يبدل بس اولواحده يقابلها في طريقة  

var mystring       = "Hello javascript and css and html",
    mychar         =mystring.charAt(4),
    mycharCodeAt   =mystring.charCodeAt(4);
    myreplace      =mystring.replace("and" , "or")
    
    console.log(mystring);
    console.log(mychar);
    console.log(mycharCodeAt);
    console.log(myreplace);
*/

//////////////////////////////////////////////////////////////////////////////////
/* #37 - Strings Methods - Split A String 
1-   split     : split( separator, limt )
2-   slice     : slice( start [required] , end [optional] ) you can write it by negative number (-5)
3-   substr    : substr( start [required] , length [optional] )
4-   substring : substring( start [required] , end [optional] )

var mystring     = "Hello javascript and css and html",
    mysplit      = mystring.split(" ", 2),
    myslice      = mystring.slice(6,17);
    mysubstr     = mystring.substr(6,17);
    mysubstring  = mystring.substring(17,6); // ==(0,17) لما بيلاقي قيمة البداية اصغر من قيمة النهاية بيبدلهم لوحده 
    
    console.log(mystring);
    console.log(mysplit);
    console.log(myslice);
    console.log(mysubstr);
    console.log(mysubstring);
*/

//////////////////////////////////////////////////////////////////////////////////
/* #36 - Strings Methods - Locate A String

// syntax: indexof (value should be found , the start point )
// syntax: lastIndexof (value should be found , the start point )
//indexof(/lOvE/i) i بتخليه ميهمتش نوع الحروف سواء كبيرة ولا صغيرة انما لو منغرها لازم تكتب نفس الحروف الي عاوز تدور عليها 
if you don't write the start point the default starting point is ( 0 )


var mystring ="Hello I am Mohamed Amr And I have 20 years old",
    myfound =mystring.lastIndexOf("I", ); 
    console.log(myfound);
*/

//////////////////////////////////////////////////////////////////////////////////
/*  #35 - Strings Methods - Convert To String 
 
 //var mystring = "I am 'Mohamed' "; you can write Mohamed as like ('Mohamed')
 // var mystring = "I am \"Mohamed\" ";  you can write Mohamed as like ( \"Mohamed\")
 
 var mystring = "I am \\Mohamed\\ "; //  you can write Mohamed as like ( \\Mohamed\\)
console.log(mystring);
console.log(typeof(mystring)); //(typeof is used to tell you what the type of the input )
*/
//////////////////////////////////////////////////////////////////////////////////
/*  #33 - Array - Search Elements
       var friends=[  //index:
        "Mohamed",    //0   
        "Amr",        //1   
        "Ahmed",      //2   
        "Omar",       //3   
        "Moksha",     //4   
        "Mahmoud",    //5   
        "Osama"       //6   
    ];
    /* indexof of lastindexof have the same style job ( value to search , start index)
     *  but the index is search the value from 0 index to last index
     *  and the lastindex search the value from last index to 0 index
     
    var speacialfriend = friends.lastIndexOf("Mohamed");
    console.log(speacialfriend);
    console.log(friends[speacialfriend]);
    
    */

//////////////////////////////////////////////////////////////////////////////////
   /* #32 slice method & concat method
       var friends=[
        "Mohamed", //0   //-7
        "Amr",     //1   //-6
        "Ahmed",   //2   //-5
        "Omar",    //3   //-4
        "Moksha",  //4   //-3
        "Mahmoud", //5   //-2
        "Osama"    //6   //-1
    ];
    
    console.log(friends);
    
    var otherfriends=[
        "Fady",
        "Korols",
        "Abuewisha"
    ];

    /* concat is used to add to arrays or to communication with other  
    var allfriends = friends.concat(otherfriends);
    console.log(allfriends);
    
    
    
    
   /* slice method
     console.log(friends);
    var myslice= friends.slice(-3, -1); 
    console.log(myslice);
    /* you should write the start and the end friends,slice(start,end )
      you can take negative amount like:(-3, -1)*/



//////////////////////////////////////////////////////////////////////////////////
 /* #31 Sort & Reverse 
    var friends=[
        "Mohamed",
        "Amr",
        "Ahmed",
        "Omar",
        "Moksha",
        "Mahmoud",
        "Osama"
    ];
    
    console.log(friends);
    
    /* reverse يرتب العناصر بالعكس 
    friends.reverse();
    console.log(friends);
    
    /* Sort بيرتب العناصر ترتيب ابجدي 
    friends.sort();
    console.log(friends);


//////////////////////////////////////////////////////////////////////////////////
/* #30 How to delete to array
    var friends=[
        "Mohamed",
        "Amr",
        "Ahmed",
        "Omar",
        "Moksha",
        "Mahmoud"
    ];
    
    console.log(friends);
    console.log(friends.length);
    
    /* third method (shift) بيحذف او لعنصر في الاراي 
    friends.shift();
    console.log(friends);
    console.log(friends.length);
    
    
    /* second method (pop) بتشيل اخر عنصر في الاراي 
    friends.pop();
    console.log(friends);
    console.log(friends.length);
    
    
    /* first method (splice) تقدر تحدد مكان الاندكس الي عاوز تمسحة او تضيفة 
    friends.splice(0,2);
    console.log(friends);
    console.log(friends.length);


//////////////////////////////////////////////////////////////////////////////////
/* #29  How to add to array ازاي تضيف للاراي بتعتك  
    var friends=[
        "Mohamed",
        "Amr",
        "Ahmed",
        "Omar"
    ];
     
     
        console.log(friends);
        
        console.log(friends.length);
     
     /* first method to add to array
      
        friends[friends.length]="Moksha";
        
        console.log(friends);
        
        console.log(friends.length);
     */
     
     /* second method to add to array (push)
        friends.push("Moksha");
        console.log(friends);
        console.log(friends.length);
     */
       
     /* third method to add to array (unshift) 
        friends.unshift("Moksha");
        console.log(friends);
        console.log(friends.length);
     */
     
     /* fourth method to add to array (splice)
        friends.splice(4, 0, "Moksha");
        console.log(friends);
        console.log(friends.length);
        
        // splice(index , how many 0 , item1 , item2 , item3) 
      */
//////////////////////////////////////////////////////////////////////////////////
/* #28 convert array to string */
/*

    var friends=[
        "Mohamed",
        "Amr",
        "Ahmed",
        "Omar"
    ];
    
    console.log(friends);
 
    friends = friends.join("--");
    
    console.log(friends);
    
/*
     friends=friends.toString();
    
     console.log(friends);
*/   
    
/*  var myDate = new Date(),
    
    mystring = myDate.toLocaleString();
    
    console.log(myDate);
    
    console.log(mystring);
*/
    //alert('to day is ' + mystring);

//////////////////////////////////////////////////////////////////////////////////
/* #27 وظيفتها انها تتحقق اذا كانت اراي ولا لاء */
/*
var friendone="Mohamed",
   
    friendtwo="Amr",
    
    friendthree="Ahmed";
    
    var friends=[
        "Mohamed",
        "Amr",
        "Ahmed"
    ];

first:    

if (Array.isArray(friends)){

console.log("yes is a array");

} else {

console.log("No is not array");

}


friendone is not a array but the var Friends is array



second:

console.log(friends.length); /* يعدلك عدد العناصر الي عندك الي هما 5 عناصر  

friends.lengtth=2; /* انتا بتحددله انتا عاوز كام عنصر يظهرلك من العناصر الي عندك 
*/


//////////////////////////////////////////////////////////////////////////////////
/* Star Function - With Parameters */

/*
 function myinfo(name) {
        
        return  name ;
 }
 
 var calAge = prompt("What is your name");
 
document.getElementById('test').innerHTML=

  "<span style='color:red';> Welcome </span> <span style='color:blue'>" +  myinfo(calAge) + "</span> <br>" ;
  */
  
  
/* 
  function myinfo(myage) {
        
        
        return myage *365; //لو معملتهاش مش هيرجعلك اي حاجه فاحنا بنستخدها علشان نرجع بيها القيم الي عاوزنها
}

document.getElementById('test').innerHTML="Your Age in Days " + myinfo(20) + " Days";
*/

/* End Function - With Parameters */





//////////////////////////////////////////////////////////////////////////////////
/* Start Function - Return */
/*
function myinfo() {
        
    var myage  =20;
        
        return myage *365; //لو معملتهاش مش هيرجعلك اي حاجه فاحنا بنستخدها علشان نرجع بيها القيم الي عاوزنها
}
document.getElementById('test').innerHTML="Your Age in Days " + myinfo() + " Days";
*/
/* End Function - Return */





//////////////////////////////////////////////////////////////////////////////////
/* Start  Function - Basics */
/*
function myfun() {
  
  var myFname ="Mohamed",
      mySname ="Amr",
      myLname ="Abuewisha";
  
  if (myFname=="Mohamed") {
   alert("Hello "+ myFname +" in the  moksha company"); 
  }
  
  else if (mySname=="Amr") {
    alert("Hello "+ mySname +" Welcome in the company");
  }
  
  else{
    alert("Hello "+ myLname +" in company");
  }
}
myfun(); //you should to call the function to be run if you do not call the function nothing is appear 
*/
/* End  Function - Basics */





//////////////////////////////////////////////////////////////////////////////////
/* Start Logical Operators - And, Or, Not*/
/*
  * (!=) Not Equal   var Mohamed=50;

if (Mohamed != 20) {
    alert("True");
}else{
  alert("False");
}

 * (!==) it is like (===) to be check the value and the dataType
  
  * (&&) And كل الشروط لازم تتحق
    var Mohamed = 50,
      
      Amr = 35;

if (Mohamed == 50 && Amr == 35) {
    alert("True");
}else{
  alert("False");
}

  *(||) OR  اي شرط يتحقق مش لازم كل الشروط تتحق
 *  var Mohamed = 50,
      
      Amr = 35;

if (Mohamed == 50 || Amr == 30) {
    alert("True");
}else{
  alert("False");
}

 */

/* End Logical Operators - And, Or, Not*/





//////////////////////////////////////////////////////////////////////////////////
/* Start Conditional Operators */

/*
  (=) كانك بتدي قيمة لحاجه زي (Mohamed=20)
  (==) هنا انتا بتقارن بين حجتين بتشوفهم بيساوي بعض ولا لاء زي
  var Mohamed=50;

if (Mohamed==20) {
    alert("True");
}else{
  alert("False");
}

 (===) يعني هو بيشوف هما بيتساوا في dataType and value
 dataType like: (int=int && string=string)
  
*/

/* End Conditional Operators */





//////////////////////////////////////////////////////////////////////////////////
/*Start If, Else If, Else Conditions*/
/*
var myage=prompt("what is your name");//the prompt it is like alert but it ask you a question not like alert send a message
   
if (myage<20) {
   document.getElementById('test').innerHTML="sorry your age is not enough to allow you to enter in this site";
}else{
 document.getElementById('test').innerHTML="Welcome in my site";
}
*/
/*End If, Else If, Else Conditions*/





//////////////////////////////////////////////////////////////////////////////////
/*Start Concatenation*/
/*
// var myAge=20+10+"Mohamed"; في الاخر هيعمل العمليه الحسابيه و بعدها هيكتبلك الاسم جنبهم Concatenation لو حطيت ال
// var myAge="Mohamed"+20+10;  في الاول هيكتب الكلمة و هيخلي الارقام زي كانها كتابه و مش هيعمل العملية الحسابيةConcatenationانما لو حطيت ال
//var myAge=20+10+"Mohamed"+20+10;
//var myAge=20+10+"Mohamed"+(20+10);//لو عاوز تخليه يجمعهم يبقا لازم تحطهم في جوه() علشان يجمعهم
var myName = "Mohamed",
    myAge  =  20,
    myCountry = "Egypt";
document.getElementById('test').innerHTML=
  "<span style='color:red'> myName is</span>: <span style='color:blue'>" + myName + "</span><br>" +
  "<span style='color:red'> myAge is</span>:  <span style='color:blue'>" + myAge +  "</span><br>" +
  "<span style='color:red'> myCountry is</span>:  <span style='color:blue'>" + myCountry +  "</span><br>";
  //alert(" myName is "+ myName +" myAge is "+ myAge); ممكن تعمل نفس الكلام جوه alert
  */
/*End Concatenation*/





//////////////////////////////////////////////////////////////////////////////////
/*Start Number*/
/*
// you can Write the Number like that myAge=20;
// And you can not Write the Number like that myAge="20";
var myAge=20;
document.getElementById('test').innerHTML=myAge;
*/
/*End Number*/





//////////////////////////////////////////////////////////////////////////////////
/* Start String*/
/*
// you can write the String like that string:"Mohamed"
var myName = "Mohamed Amr And the nickName is 'Moksha'"
document.getElementById('test').innerHTML=myName;
*/
/* End String*/





//////////////////////////////////////////////////////////////////////////////////
/*Start Object*/
/*
//object can Write like that:{firstName:Mohamed, lastName:Amr}
var myinfo={firstName:"Mohamed", mediumName:"Amr", lastName:"Abuewisha"};
document.getElementById('test').innerHTML = myinfo.firstName;
*/
/*End Object*/





//////////////////////////////////////////////////////////////////////////////////
/*Start Array*/
/*
//Array can Write like that:["SnapChat","FaceBook","Instgram","YouTube","TikTok"]
var socialMedia =["SnapChat","FaceBook","Instgram","YouTube","TikTok"];
document.getElementById('test').innerHTML = socialMedia[0];//you can call one index or you can also call the all index
*/
/*End Array*/





//////////////////////////////////////////////////////////////////////////////////
/* Start Boolean */
// Boolean: True,False; Examples
/*
var product = true;

if (product===false) {
    var price=350;
}else{
    var price=400;
}

document.getElementById('test').innerHTML = price;
*/
/* End Boolean */





//////////////////////////////////////////////////////////////////////////////////
/*Start Variables*/
/*
var x=10, // الvar مينفعش يبتدي برقم 
    y=20,
    z=30,
    name1="Mohamed",
    name2="Ahmed";

document.getElementById('test').innerHTML=name1;   // يمكن استعداء المتغيرات
document.getElementById('test').innerHTML=(z+y)*x; // يمكن اجراء العمليات الحسابية عليها
if (x+y==40) {
  console.log("True");
    //code
}else{
  console.log("false");
}
*/
/*End Variables */





//////////////////////////////////////////////////////////////////////////////////
/*
// Create the canvas in the page
var mycanvas = document.createElement('canvas');

// Enter ID to this canvas
mycanvas.id='canvas1';

//Customize the canvas
mycanvas.width=900;
mycanvas.height=400;
mycanvas.style.display='block';
mycanvas.style.margin='50px auto';

//Add the canvas to the page
document.body.appendChild(mycanvas);

//Get canvas information
var myCanvas=document.getElementById('canvas1'),
  myContext =myCanvas.getContext('2d');
  
//Fill and Style option
myContext.fillStyle='#000000';
myContext.strokeStyle='#D32323';
myContext.lineWidth=6;
myContext.font='200px Arial';

//Add the text
myContext.fillText('Mohamed',0,200);
myContext.strokeText('Mohamed',0,200);

//Add the second text
myContext.strokeStyle='#1900FF';
myContext.lineWidth=4;
myContext.strokeText('Mohamed',0,200);
*/


//////////////////////////////////////////////////////////////////////////////////
/*
var myCanvas=document.getElementById('canvas'),
  myContext =myCanvas.getContext('2d');
  
myContext.fillStyle='#1D00FF';
myContext.fillRect(0,0,300,300);

myContext.font='50px Arial';
myContext.fillStyle='#000000';
myContext.fillText('M',30,150);

myContext.font='50px Arial';
myContext.fillStyle='#FF0000';
myContext.fillText('o',80,150);

myContext.font='50px Arial';
myContext.fillStyle='#00FFCB';
myContext.fillText('K',110,150);

myContext.font='50px Arial';
myContext.fillStyle='#44004F';
myContext.fillText('S',140,160);

myContext.font='50px Arial';
myContext.fillStyle='#FFFFFF';
myContext.fillText('H',170,150);

myContext.font='50px Arial';
myContext.fillStyle='#00FF61';
myContext.fillText('A',210,150);
*/





//////////////////////////////////////////////////////////////////////////////////
/*
myContext.fillStyle ='#000000';
myContext.fillRect(0,0,300,300);
myContext.strokeStyle ='#FF0000'; 
myContext.lineWidth=5;
// top left line
myContext.moveTo(10,10);
myContext.lineTo(130,130);
// top right line
myContext.moveTo(290,10);
myContext.lineTo(170,130);

// bottom left line
myContext.moveTo(10,290);
myContext.lineTo(130,170);

// bottom right line
myContext.moveTo(290,290);
myContext.lineTo(170,170);
myContext.stroke();
*/





//////////////////////////////////////////////////////////////////////////////////
/*
 //بيعمل مستطيل مليان
myContext.fillStyle ='#000000';
myContext.fillRect(10,10,100,50);
*/


/*
 //بيعمل مستطيل كامل بس فاضي من جواه
myContext.strokeStyle ='#000000'; // لون الشكل الي عامله
myContext.lineWidth=5; // سمك الشكل 
myContext.strokeRect(100,100,100,50); // مقاسات الشكل 
*/


/*
myContext.fillStyle ='#000000';
myContext.fillRect(0,0,800,400);
myContext.clearRect(10,10,100,100);
*/