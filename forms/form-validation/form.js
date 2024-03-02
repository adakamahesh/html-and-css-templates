const submit=document.getElementById("mysubmit").onclick=function() {
    //first name
    const firstname=document.getElementById("first").value;
    console.log("Firstname:", firstname);
    //last name
    const lastname=document.getElementById("last").value;
    console.log("Lastname:" ,lastname)
    //date of birth
    const DOB=document.getElementById("dob").value;
    console.log("DOB:", DOB);
    //email address
    const mail=document.getElementById('mail').value;
    console.log("Email:",mail);
    //mobil number
    const phone=document.getElementById("mobil").value;
    console.log("Mobil no:",phone);
    //select gender
    var selectedGender = document.querySelector('input[name="gender"]:checked').value;
    if(selectedGender){
    console.log("Gender:",selectedGender);
    }
    //address 
    const address=document.getElementById('address').value;
    console.log("Address:",address);
    //select states
    const states=document.getElementById("state").value;
    console.log("State:",states);
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