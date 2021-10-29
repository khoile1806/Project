var count = 0
function handleClick(){
    count = count + 1;
    if(count%2!=0){
        document.getElementById("p1").style.color="red"
        document.getElementById("section1").style.backgroundColor="green"
    }
    else{
        document.getElementById("p1").style.color="black"
        document.getElementById("section1").style.backgroundColor="white"

    }

}

function handleClick_download(){
    document.getElementById("p1")
    alert("Hello\nYour Download has been started successfully !");
}

//FUnction to calculate hotes discount
function hotel_discount(days){
    var price = 1500
    if(days==null){
        return "Please enter a value first :( "
    }
    
    //first test case : if user input is nevative or zero
    else if(days==0 || days<0 || days % 1 !== 0){
        return 'Please inser a valid date number'
    }
    else{
    
        if(days >=1 &&  days<=2){
            
            return price*days
        }

        else if(days>=3 && days<=5){
                
                var discount = 500
                var bill = (days*price) - ((days-2)*500)
                return bill
        }

        else if(days>5){
                
                var discount=1000
                var newDay = (days-5)
                var fare = (5*price)-((5-2)*500)
                var newfare =(newDay*price) - (newDay*1000)
                var result = fare + newfare
                return result
            }
    }
    
}


function handleClick_input_days(){
    document.getElementById("day")
    var name = prompt("Please enter your name ")
    var place = prompt("please enter the place you want to stay ")
    var days = prompt("Please enter your Day of stay..")
    var result = hotel_discount(days)
    //document.getElementById('name').innertext= "Thank you" + name
    //document.getElementById('place').innerText="Your place " + place
    //document.getElementById('cost').innerText = "Your cost " + result
    
    
    alert(" "+ result+ "  bdt/-")
    
}



function handleClick_Signup(){
    document.getElementById("mySignupForm").style.display = "block"; 
}



function handleClick_Login() {
    
    document.getElementById("myForm").style.display = "block";
}
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
function closeForm_signup() {
    document.getElementById("mySignupForm").style.display = "none";
}