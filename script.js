function validateForm() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const gender = document.querySelectorAll('input[name="gender"]:checked');
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
  
    if (gender.length === 0) {
      alert("Please select gender.");
      return false;
    }
  
    if (!firstName || !lastName || !dob || !country || !profession || !email || !mobile) {
      alert("Please fill in all the required fields.");
      return false;
    }
  
    showPopup({
      "First Name": firstName,
      "Last Name": lastName,
      "Date of Birth": dob,
      "Country": country,
      "Gender": Array.from(gender).map(g => g.value).join(", "),
      "Profession": profession,
      "Email": email,
      "Mobile Number": mobile
    });
  
    return false;
  }
  
  function showPopup(formData) {
    let popupContent = "<ul style='list-style-type:none;'>";
    for (const [label, value] of Object.entries(formData)) {
      popupContent += `<li><strong>${label}:</strong> ${value}</li>`;
    }
    popupContent += "</ul>";
  
    document.getElementById("popupValues").innerHTML = popupContent;
    document.getElementById("popup").style.display = "flex";
  }
  
  function closePopup() {
    document.getElementById("popup").style.display = "none";
    resetForm();
  }
  
  function resetForm() {
    document.getElementById("surveyForm").reset();
    document.getElementById("popup").style.display = "none";
  }
  