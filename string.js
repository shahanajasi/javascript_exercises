// var str = "codeme";
// var str1 = "kozhikode";
// var combined = str + str1;
// console.log(combined); //returns codemekozhikode

// var str = "codeme ";
// var str1 = "kozhikode";
// var combined = str + str1;
// console.log(combined); //returns codeme kozhikode

// var str = "codeme";
// var str1 = " kozhikode";
// var combined = str + str1;
// console.log(combined); //returns codeme kozhikode

// var str = "codeme";
// var str1 = "kozhikode";
// var str2 = " ";
// var combined = str + str2 + str1;
// console.log(combined); //returns codeme kozhikode

// var str = "codeme";
// var str1 = "kozhikode";
// var combined = str + " " + str1;
// console.log(combined); //returns codeme kozhikode

// // concate method
// var str = "codeme";
// var str1 = "kozhikode";
// var con = str.concat(" ", "Hilite", " ", str1);
// console.log(con); //returns codeme Hilite kozhikode

// //string length
// var strlen = "shahanajasni";
// console.log(strlen.length); //returns 12

// //Accessing characters of an array
// var strAccess = "Codeme";
// console.log(strAccess[3]); //returns e
// console.log(strAccess.indexOf("d")); //returns 2
// console.log(strAccess.indexOf("e")); //returns 3

// var to = "kknjkbskswsbwk";
// console.log(to.toUpperCase()); // returns KKNJKBSKSWSBWK

// var lo = "FBVHGUDHSDHWUDWK";
// console.log(lo.toLowerCase()); //returns fbvhgudhsdhwudwk

// //SPLIT
// var str = "palazhi,is in kozhaikode,district";
// console.log(str.split("a", 3)); //-(variablename.split(string,limit))

// var str = "palazhi,is in kozhikode,District";
// console.log(str.split(","));

//SUBSTRING
// var str = "codeme kozhikode";
// var sub = str.substring(7, 16); //substring method is used to extract the substrings of the main strfing ,for these we give the index number of the character before the char and after the char we get the value
// console.log(sub); //returns kozhikode

// var str = "codeme kozhikode";
// var sub = str.substring(16, 7);   //returns kozhikode
// console.log(sub);

// var str = "codeme kozhikode";
// var sub = str.substring(-6,7);   //returns codeme  in this case -6 act as 0
// console.log(sub);

// var str = "codeme kozhikode";
// var sub = str.substring(6,-7);   //returns  codeme
// console.log(sub);

// var str = "codeme kozhikode";
// var sub = str.substring(-6);   //returns codeme kozhikode bcz its error
// console.log(sub);

// var str = "codeme kozhikode";
// var sub = str.substring(-6,-5);   //returns NOTHING , its not possible
// console.log(sub);

//SLICE
// var str = "codeme kozhikode";
// var sli = str.slice(2, 5);
// console.log(sli); //returns dem

// var str = "codeme kozhikode";
// var sli = str.slice(5, -2);
// console.log(sli);    //returns e kozhiko

// var str = "codeme kozhikode";
// var sli = str.slice(5, 2);
// console.log(sli);    //returns nothing bcz its not possible

// var str = "codeme kozhikode";
// var sli = str.slice(-2, 5);
// console.log(sli);    //returns nothing bcz its not possible

//INCLUDES -METHOD IS USED TO CHECK PERTICULAR STRING IS PRESENT OR NOR
// var str = "codeme kozhikode"
// console.log(str.includes("codeme"))  //returns true

// var str = "codeme kozhikode"
// console.log(str.includes("1"))   //returns false

//REPLACE - replace funtion is used to replace the substring to the string which i add 
// var str = "shahana jasni";
// var rep = str.replace("jasni", "ali");
// console.log(rep);  //returns shahana ali


// var str = "codeme kozhikode"
// console.log(str.trim())   

