
let userName = prompt("Enter user name"); // inbuilt method to take input from user in the form of string and it will always return a string value
let age = prompt("Enter your age")
let isSubscribed = "true";



function validateForm(userName , age , isSubscribed)
{

    let userNameType = typeof userName;
    let ageType = typeof age;
    let isSubscribedType = typeof isSubscribed;

    console.log("User Name : " + userName + "Data type :" + userNameType);
    console.log("Age : " + age + "Data type :" + ageType);
    console.log("isSubscribe : " + isSubscribed + "Data type :" + isSubscribedType);


    //conversion
    age = Number(age);
    isSubscribed = isSubscribed ==="true";

      console.log("User Name : " + userName + "Data type :" + userNameType);
    console.log("Age : " + age + "Data type :" + typeof age);
    console.log("isSubscribe : " + isSubscribed + "Data type :" + typeof isSubscribed);

}

validateForm(userName , age , isSubscribed)
