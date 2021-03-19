
var f_name = document.Myform.f_name;
var message = document.getElementById('message');

function runMe()
{
    if(f_name.value.length < 3)
    {
        message.innerHTML = "needs more characters";
        message.style.color = "red";
        f_name.style.backgroundColor = "red";
        f_name.style.color = "Black";

    }else if(f_name.value.length == 5){
        message.innerHTML = "Nice, Ok";
        message.style.color = "green";
        f_name.style.backgroundColor = "green";
        f_name.style.color = "Black";

    }else if(f_name.value.length > 10){
        message.innerHTML = "Character Limit Exceeded";
        message.style.color = "orange";
        f_name.style.backgroundColor = "orange";
        f_name.style.color = "Black";
    }
}

// var f_pass = document.Myform.f_pass;
// var text = document.getElementById('Strength');

// function run()
// {
//     if(f_pass.value.length < 2)
//     {
//         message.innerHTML = "Your Password is weak";
//         message.style.color = "red";

//     }else if(f_pass.value.length == 5){
//         message.innerHTML = "medium type some special char";
//         message.style.color = "green";

//     }else if(f_pass.value.length > 8){
//         message.innerHTML = "Strong Password";
//         message.style.color = "yellow";
//     }

// }
var strength = document.getElementById('strength');
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = new RegExp("(?=.{6,}).*", "g");
var pwd = document.getElementById("password");
function passwordChanged()
{
    if (pwd.value.length == 0) {
        strength.innerHTML = 'Type Password';
    } else if (false == enoughRegex.test(pwd.value)) {
        strength.innerHTML = 'More Characters';
    } else if (strongRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:green">Strong!</span>';
    } else if (mediumRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:orange">Medium!</span>';
    } else {
        strength.innerHTML = '<span style="color:red">Weak!</span>';
    }
}


    


