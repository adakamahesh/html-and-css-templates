const submit=document.getElementById("mysubmit").onclick=function() {
    const firstname=document.getElementById("first").value;
    console.log(firstname);
    const lastname=document.getElementById("last").value;
    console.log(lastname)
    const DOB=document.getElementById("dob").value;
    console.log(DOB);
    const mail=document.getElementById('mail').value;
    console.log(mail);
    const phone=document.getElementById("mobil").value;
    console.log(phone);
    const gender=document.getElementById('gender1').value;
    // console.log(gender);
    const gender1=document.getElementById('gender2').value;
    if(gender.checked==male){
    console.log(gender1);
    }
    else{
        console.log(gender);   
    }
    // const states=document.getElementByAll("select").value;
    // console.log(states);
}