name_array = [];


function submit(){
    var display_student_array = []

    for (var j =1;j<=4;j++){
        var nameofthestudent= document.getElementById("text"+j).value;
        console.log(nameofthestudent)
        name_array.push(nameofthestudent)


    }


    console.log(name_array);

    var lenghtofnamearray=name_array.length;
    console.log(lenghtofnamearray)

    for (var k = 0;k<lenghtofnamearray;k++){
        display_student_array.push("<h4>NAME -"+name_array[k]+"<h4>");
        console.log(lenghtofnamearray);

    }


    console.log(display_student_array)
    document.getElementById("displaynamewithcommas").innerHTML=display_student_array;

    var displaywithoutcommas = display_student_array.join(" ");
    console.log(displaywithoutcommas);
    document.getElementById("displaywithspace").innerHTML=displaywithoutcommas;

    document.getElementById("list").innerHTML = name_array;
    document.getElementById("sub").style.display="none";
    document.getElementById("sort").style.display="inline-block";
}




function sort(){
    name_array.sort();
    
    document.getElementById("list").innerHTML = name_array



}