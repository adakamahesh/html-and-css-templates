const submit = (document.getElementById("mysubmit").onclick = function () {
  //first name
  const firstname = document.getElementById("first").value;
  console.log("Firstname:", firstname);
  if (firstname.length == 0) {
    document.getElementById("first-error").style.display = "block";
  } else {
    document.getElementById("first-error").style.display = "none";
  }
  //last name
  const lastname = document.getElementById("last").value;
  console.log("Lastname:", lastname);
  if (lastname.length == 0) {
    document.getElementById("last-error").style.display = "block";
  } else {
    document.getElementById("last-error").style.display = "none";
  }
  //date of birth
  const DOB = document.getElementById("dob").value;
  console.log("DOB:", DOB);
  if (DOB.length == 0) {
    document.getElementById("dob-error").style.display = "block";
  } else {
    document.getElementById("dob-error").style.display = "none";
  }
  //email address
  const email = document.getElementById("mail").value;
  console.log("Email:", email);
  if (email.length == 0) {
    document.getElementById("mail-error").style.display = "block";
  } else {
    document.getElementById("mail-error").style.display = "none";
  }
  //mobil number
  const phone = document.getElementById("mobil").value;
  console.log("Mobil no:", phone);
  if (phone.length == 0) {
    document.getElementById("mobil-error").style.display = "block";
  } else {
    document.getElementById("mobil-error").style.display = "none";
  }
  //select gender
  var selectedGender = document.querySelector(
    'input[name="gender"]:checked'
  );
  if (selectedGender) {
    // debugger;
    console.log("Gender:", selectedGender.value);

    document.getElementById("gender-error").style.display = "none";
  } else {
    // debugger;
    document.getElementById("gender-error").style.display = "block";
  }
  //address
  const address = document.getElementById("address").value;
  console.log("Address:", address);
  if (address.length == 0) {
    document.getElementById("address-error").style.display = "block";
  } else {
    document.getElementById("address-error").style.display = "none";
  }
  //select states
  const state = document.getElementById("state").value;
  var select_error=document.getElementById("select-error")
  console.log("State:", state);
  if (state == "") {
    select_error.style.display = "block";
  } else {
    select_error.style.display = "none";
  }
  //select hobbies
  var selectedHobbies = document.querySelectorAll(
    'input[name="hobbies"]:checked'
  );
  var selectedValues = [];
  selectedHobbies.forEach(function (checkbox) {
    selectedValues.push(checkbox.value);
  });
  if (selectedValues.length == 0) {
    console.log("Hobbies:", selectedValues.join(","));
    document.getElementById("select-errors").style.display = "block";
  }
  else{
    document.getElementById("select-errors").style.display = "none";
  }
});