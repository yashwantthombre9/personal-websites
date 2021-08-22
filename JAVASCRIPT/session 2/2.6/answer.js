// Question : Write the difference between "==" and "===" operator 
// and explain with one example.

/*

    Ans : 
    1st Difference :
    == is used for comparison between two variables irrespective of the datatype of variable.
    === is used for comparision between two variables but this will check strict type, which means it will check datatype and compare two values.

    Let's take an example.

        1) Example of ==
            var number = 10;
            if (number == 10)  // Here Comparision between two values using ==. It will compare irrespective of datatype of variable
            alert("Both are equal");    
            else    
            alert("Both are unequal");   

        2) Example of ===
            var number = 10;
            if (number === 100)  // Here Comparision between two values using ===. It will compare strict check means it will check datatype as well.
            alert("Both are equal");      
            else      
            alert("Both are not equal");     

*/