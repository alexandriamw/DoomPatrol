document.addEventListener("keyup", function(event) {
  // console.log("Somehting is happening: public/index.js");

  // array to hold the values we want to check so code isn't so wet
  let inputArr =
    // login credentials
    [
      document.getElementById("uname").value,
      document.getElementById("psw").value,
      // create ACC credentials
      document.getElementById("signup_uname").value,
      document.getElementById("signup_psw").value,
      document.getElementById("email").value,
      document.getElementById("olduname").value,
      document.getElementById("newuname").value,
      document.getElementById("newpsw").value
    ];

  for (let i = 0; i < inputArr.length; i++) {
    // these are the coding symbols we should look out for
    // for loop to go through them and check to see if they are in the input fields
    if (
      inputArr[i].includes("/") ||
      inputArr[i].includes("/") ||
      inputArr[i].includes("<") ||
      inputArr[i].includes(">") ||
      inputArr[i].includes("(") ||
      inputArr[i].includes(")") ||
      inputArr[i].includes("%") ||
      inputArr[i].includes("*") ||
      inputArr[i].includes(":") ||
      inputArr[i].includes(";") ||
      inputArr[i].includes("'") ||
      inputArr[i].includes("{") ||
      inputArr[i].includes("}") ||
      inputArr[i].includes(",") ||
      inputArr[i].includes('"') ||
      inputArr[i].includes("[") ||
      inputArr[i].includes("]")
    ) {
      // console.log("\nyou can't do this and it works: public/index.js\n");
      // return here so we can stop the loop function so that the buttons dont reactivate when there are no values in other places
      return disable();
    } else if (
      !inputArr[i].includes("/") ||
      !inputArr[i].includes("/") ||
      !inputArr[i].includes("<") ||
      !inputArr[i].includes(">") ||
      !inputArr[i].includes("(") ||
      !inputArr[i].includes(")") ||
      !inputArr[i].includes("%") ||
      !inputArr[i].includes("*") ||
      !inputArr[i].includes(":") ||
      !inputArr[i].includes(";") ||
      !inputArr[i].includes("'") ||
      !inputArr[i].includes("{") ||
      !inputArr[i].includes("}") ||
      !inputArr[i].includes(",") ||
      !inputArr[i].includes('"') ||
      !inputArr[i].includes("[") ||
      !inputArr[i].includes("]")
    ) {
      enable();
    }
  }
  // console.log("\n\n", inputArr);
});

// function to disable buttons when user uses code syntax
function disable() {
  // .disabled method allows the submit button to not go through if it returns true
  document.getElementById("loginFormButton").disabled = true;
  document.getElementById("signUpButton").disabled = true;
  document.getElementById("confirmChangeBtn").disabled = true;
}

// function to enable buttons when user  code syntax
function enable() {
  document.getElementById("loginFormButton").disabled = false;
  document.getElementById("signUpButton").disabled = false;
  document.getElementById("confirmChangeBtn").disabled = false;
}
