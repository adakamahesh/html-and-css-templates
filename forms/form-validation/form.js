const submit=document.getElementById("mysubmit").onclick=function() {
    //first name
    const firstname=document.getElementById("first").value;
    console.log("Firstname:", firstname);
    if(firstname.length==0){
      document.getElementById('first-error').style.display="block";
    }
    else{
      document.getElementById('first-error').style.display="none" ;
    }
    //last name
    const lastname=document.getElementById("last").value;
    console.log("Lastname:" ,lastname)
    if(lastname.length==0){
      document.getElementById('last-error').style.display="block";
    }
    else{
      document.getElementById('last-error').style.display="none"; 
    }
    //date of birth
    const DOB=document.getElementById("dob").value;
    console.log("DOB:", DOB);
    if(DOB.length==0){
      document.getElementById('dob-error').style.display="block";
    }
    else{
      document.getElementById('dob-error').style.display="none"; 
    }
    //email address
    // var email_chech=(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)
    const email=document.getElementById('mail').value;
    console.log("Email:",email);
    if(email.length==0){
      document.getElementById('mail-error').style.display="block";
    }
    else{
      document.getElementById('mail-error').style.display="none"; 
    }
    //mobil number
    const phone=document.getElementById("mobil").value;
    console.log("Mobil no:",phone);
    if(phone.length==0){
      document.getElementById('mobil-error').style.display="block";
    }
    else{
      document.getElementById('mobil-error').style.display="none"; 
    }
    //select gender
    var selectedGender = document.querySelector('input[name="gender"]:checked').value;
    if(selectedGender){
    console.log("Gender:",selectedGender);
    }
    // if(selectedGender.length==0){
    //   document.getElementById('gender-error').style.display="block";
    // }
    // else{
    //   document.getElementById('gender-error').style.display="none"; 
    // }
    //address 
    const address=document.getElementById('address').value;
    console.log("Address:",address);
    if(address.length==0){
      document.getElementById('address-error').style.display="block";
    }
    else{
      document.getElementById('address-error').style.display="none"; 
    }
    //select states
    const states=document.getElementById("state").value;
    console.log("State:",states);
    if(states.length==0){
      document.getElementById('select-error').style.display="block";
    }
    else{
      document.getElementById('select-error').style.display="none"; 
    }
    //select hobbies
    var selectedHobbies = document.querySelectorAll('input[name="hobbies"]:checked');
    var selectedValues = [];
    selectedHobbies.forEach(function(checkbox) {
        selectedValues.push(checkbox.value);
      });
     if(selectedValues.length>0) {
        console.log("Hobbies:",selectedValues.join(","));
     } 
}
// const first=document.getElementById("first");
// const form=document.getElementById('forms');
// const first_error=document.getElementById("first_error");

// form.addEventListener('submit',(e)=>{
//   if(first.value==='' || first.value== null){
//     e.preventDefault();
//     first_error.innerHTML="first name is required"
//   }
// })