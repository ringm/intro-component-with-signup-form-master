const submitBtn = document.querySelector(".btn-submit");
const fields = document.querySelectorAll(".field");
const reg = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  for (let i = 0; i < fields.length; i++) {
    let input = fields[i].children[0];
    let alertIcon = fields[i].children[1];
    let alertMsg = fields[i].children[2];

    console.log(input.type);

    if (input.value == "") {
      input.style.border = "2px solid hsl(0, 100%, 74%)";
      alertIcon.classList.remove("hidden");
      alertMsg.classList.remove("hidden");
    } else if (input.type == "email") {
      if (!reg.test(input.value)) {
        input.style.border = "2px solid hsl(0, 100%, 74%)";
        alertIcon.classList.remove("hidden");
        alertMsg.textContent = "Looks like this is not an email";
        alertMsg.classList.remove("hidden");
      } else {
        alertIcon.classList.add("hidden");
        alertMsg.classList.add("hidden");
        input.style.border = "1px solid hsl(249, 10%, 26%)";
      }
    }
  }
});
