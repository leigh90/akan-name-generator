function getDate(){
    
    let dateOfBirth = document.getElementById('dateofbirth').value;
    let d = new Date(dateOfBirth);
    let weekday = ['Sunday', 'Monday', 'Tuesday','Wednesday', 'Thursday', 'Friday','Saturday']
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday"; 

    var n = weekday[d.getDay()];
    console.log(n)
    console.log(dateOfBirth)

   if (document.getElementById('female').checked){
       gender = document.getElementById('female').value;
        var day;
        var name;
        switch (new Date(dateOfBirth).getDay()) {
        case 0:
            day = "Sunday";
            name = "Akosua";
            console.log(day,name);
            break;
        case 1:
            day = "Monday";
            name = "Adwoa";
            console.log(day,name);
            break;
        case 2:
            day = "Tuesday";
            name = "Abenaa";
            console.log(day,name);
            break;
        case 3:
            day = "Wednesday";
            name = "Akua";
            console.log(day,name);
            break;
        case 4:
            day = "Thursday";
            name = "Yaa";
            console.log(day,name);
            break;
        case 5:
            day = "Friday";
            name = "Afua";
            break;
        case  6:
            day = "Saturday";
            name = "Ama";

        }document.getElementById("result").innerHTML = "You were born on a " + day + " and your Akan name is " + name;
       
       console.log(gender)
   
   }
   else{
    gender = document.getElementById('male').value;
    console.log(gender)
    switch (new Date(dateOfBirth).getDay()) {
        case 0:
            day = "Sunday";
            name = "Kwasi";
            console.log(day,name);
            break;
        case 1:
            day = "Monday";
            name = "Kwadwo";
            console.log(day,name);
            break;
        case 2:
            day = "Tuesday";
            name = "Kwabena";
            console.log(day,name);
            break;
        case 3:
            day = "Wednesday";
            name = "Kwaku";
            console.log(day,name);
            break;
        case 4:
            day = "Thursday";
            name = "Yaw";
            console.log(day,name);
            break;
        case 5:
            day = "Friday";
            name = "Kofi";
            console.log(day,name);
            break;
        case  6:
            day = "Saturday";
            name = "Kwame";
            console.log(day,name);
            
        }document.getElementById("result").innerHTML = "You were born on a " + day + " and your Akan name is " + name;
 
   }

}


// switch(female)
{/* <a href="https://www.freepik.com/free-photos-vectors/background">Background vector created by 0melapics - www.freepik.com</a> */}
{/* <a href='https://www.freepik.com/free-photos-vectors/pattern'>Pattern vector created by visnezh - www.freepik.com</a> */}
{/* <a href='https://www.freepik.com/free-photos-vectors/pattern'>Pattern vector created by visnezh - www.freepik.com</a> */}