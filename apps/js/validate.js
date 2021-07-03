window.addEventListener("load", function () {
  let form = document.querySelector("#form"); //get form
  form["email"].addEventListener("focus", (event) => {
    form["email"].style.color = "hsl(249, 10%, 26%)";
    //change font colot of email field on focus from red to dark grey
  });
  form.addEventListener("submit", (event) => {
    //call validate on form submit
    validate(event);
  });
});
validate = (event) => {
  let form = document.querySelector("#form");
  let icon = document.querySelectorAll(".erricon");
  let warntext = document.querySelectorAll(".intro__warning");
  //call checkempty to check if fields are empty
  let v1 = checkempty(
    form["fname"],
    icon[0],
    warntext[0],
    "First Name cannot be empty"
  );
  let v2 = checkempty(
    form["lname"],
    icon[1],
    warntext[1],
    "Last Name cannot be empty"
  );
  let v3 = checkempty(
    form["pass"],
    icon[3],
    warntext[3],
    "Password cannot be empty"
  );

  let v4 = validemail(
    form["email"],
    icon[2],
    warntext[2],
    "looks like this not an email"
  );
  //check if all fields are non empty
  if (!v1 || !v2 || !v3 || !v4) {
    event.preventDefault();
  }
};
checkempty = (input, icon, warntext, message) => {
  if (input.value.trim() === "") {
    input.classList.add("intro__warnicon"); //add class to put a red border
    icon.classList.remove("hide"); //remove hide class
    warntext.classList.remove("hide"); //remove hide class
    warntext.innerHTML = message; //display message
    return false; //return false if empty
  } else {
    //this section is a for second attempt
    input.classList.remove("intro__warnicon");
    icon.classList.add("hide");
    warntext.classList.add("hide");
    warntext.innerHTML = "";
    return true;
  }
};
validemail = (input, icon, warntext, message) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(input.value.trim()) || input.value.trim() === "") {
    input.classList.add("intro__warnicon");
    input.style.color = "hsl(0, 100%, 74%)";
    icon.classList.remove("hide");
    warntext.classList.remove("hide");
    warntext.innerHTML = message;
    return false;
  } else {
    input.classList.remove("intro__warnicon");
    input.style.color = "hsl(249, 10%, 26%)";
    icon.classList.add("hide");
    warntext.classList.add("hide");
    warntext.innerHTML = "";
    return true;
  }
};
