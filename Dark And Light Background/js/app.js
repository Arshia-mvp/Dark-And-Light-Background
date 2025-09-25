alert('Hello');

let h1 = document.getElementsByTagName('h1')[0];

let userName = prompt('Whats your name ?');

alert('Hello ' + userName);

h1.innerText = ('Hello ' + userName);

let h2 = document.getElementsByTagName('h2')[0];

let userAge = prompt('How old are you ?');

alert('Your age is : ' + userAge);

h2.innerText = ('Your age is : ' + userAge);

let h4 = document.getElementsByTagName('h4')[0];

let ExplainAboutYourSelf = prompt('Write about your self (optional)');

alert('Your wrote about your self : ' + ExplainAboutYourSelf);

h4.innerText = ('Your wrote about your self : ' + ExplainAboutYourSelf);

let darMode = confirm('Do you want to us darkmode ?');

if (darMode == true) {
    document.body.classList.add('dark');
}

else {
    document.body.classList.add('light');
}