//send email with emailjs

function sendMail(name, lastName, phone, selectedLocal, city, email) {
  console.log(name, lastName, phone, selectedLocal, city, email);
  console.log("aaaaaaaaa");
  emailjs.init("E5rsfxBHko2SQulRw");
  emailjs
    .send("service_zerzcx8", "template_q5dg1te", {
      name: name,
      lastName: lastName,
      phone: phone,
      selectedLocal: selectedLocal,
      city: city,
      email: email,
    })
    .then(function () {
      document.getElementById("success").innerHTML =
        "Sua mensagem foi enviada com sucesso!";
      document.getElementById("error").innerHTML = "";
      fbq("track", "email");
    })

    .catch(function () {
      document.getElementById("error").innerHTML =
        "Não foi possível enviar sua mensagem, tente novamente mais tarde";
    }); // To block from loading a new page*/
}

function getEmailParamsAndFilter() {
  let name = document.getElementById("name").value;
  let lastName = document.getElementById("lastName").value;
  let phone = document.getElementById("phone").value;
  let selectedLocal = document.getElementById("selectedLocal").value;
  let city = document.getElementById("city").value;
  let email = document.getElementById("email").value;

  if (!name || !email || !lastName || !phone || !selectedLocal || !city) {
    document.getElementById("error").innerHTML =
      "Por favor, complete todos os campos";
    //test email regex
  } else if (
    !email.match(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  ) {
    document.getElementById("error").innerHTML =
      "Por favor, insira um e-mail válido";
    //test phone regex
  } else {
    sendMail(name, lastName, phone, selectedLocal, city, email);
  }
}

function sendAClickButtonToFacebookPixel() {
  console.log("sendAClickButtonToFacebookPixel");

  fbq("track", "whatsapp");
}

document
  .getElementById("whatsapp-link")
  .addEventListener("click", function (event) {
    sendAClickButtonToFacebookPixel();
  });

document.getElementById("sub").addEventListener("click", function (event) {
  event.preventDefault();
  getEmailParamsAndFilter();
});

$(document).ready(function () {
  $("#phone").mask("(00) 00000-0000");
});

function menuOpen(cbx, idMenu) {
  console.log(document.getElementById(idMenu));
  if (cbx.checked) {
    document.getElementById(idMenu).style.display = "none";
  } else {
    document.getElementById(idMenu).style.display = "flex";
  }
}

function counted() {
  const eleResult = document.getElementById("counted");
  if (!eleResult) return;
  for (let i = 0; i <= 350; i++) {
    setTimeout(function () {
      eleResult.innerHTML = i;
    }, 5 * i);
  }
  eleResult.removeAttribute("id"); //remove o id para nao contar novamente;
}

//quando o ususario visulisar a div o contador começa
window.addEventListener("scroll", function () {
  const ele = document.getElementById("counted");
  if (!ele) return;
  const elePosition = ele.getBoundingClientRect().top;
  const screenPosition = window.innerHeight;
  if (elePosition < screenPosition) {
    counted();
  }
});

setTimeout(function () {
  document.getElementById("myImg").style.display = "block";
}, 20000);
