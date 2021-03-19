// console.log('Hello World');

// var images = document.getElementsByTagName('img');
// console.log(images);

// var anchors = document.getElementsByTagName('a');
// console.log(anchors);

// var phrase = document.getElementsByTagName('p');
// console.log(phrase);

// var heading = document.getElementById('heading');
// console.log(heading);
// console.log(heading.innerHTML);
// console.log(heading.nodeType);

// var main_content = document.getElementById('main_content');
// main_content.setAttribute('align','right');

// var heading = document.getElementById('heading');
// heading.innerHTML = "Welcome to my web page !..";

var main_content =document.getElementById('main_content');

var new_heading = document.createElement('h2');
var new_phrase = document.createElement('p');

new_heading.innerHTML = "Welcome To Pixabay!!!..";
new_phrase.innerHTML = 'This is a simple webpage, lets get into it guyzz..';
new_phrase.innerHTML = 'FItness is forever , so lets get into it guyzz.';

// main_content.appendChild(new_heading);
// main_content.appendChild(new_phrase);
// main_content.appendChild(new_phrase);

var btn = document.getElementById('myBtn');
btn.onclick = function()
{
    alert('Welcome to our site !!');
    // alert('Byee World');
};

// function runMe()
// {
//     alert('Hello World');
// }

// setTimeout(runMe,3000);

// function runMe()
// {
//     console.log("Hello world");
// }
// setInterval(runMe,1000);
// var f_name =document.Myform.f_name;
// var f_pass = document.Myform.f_pass;

// var Username = "Ruchi Pakhle";
// var Password = "1234";

// function runMe()
// {
//     if(f_name.value == Username && f_pass.value == Password)
//     {
//         console.log("Login Success");
//     }else{
//         console.log("Login Error");
//     }
// }
