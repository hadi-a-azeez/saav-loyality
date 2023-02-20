// let otplessUser = null;
function otpless() {
  otplessFrame();
}

function otplessFrame() {
  const otplessAuthlink = `https://otpless.com/auth?authPage=${encodeURIComponent(
    window.top.location.href
  )}`;
  const o = document.getElementById("otpless");
  const i = document.createElement("iframe");
  i.id = "otplessFrame";
  i.sandbox =
    "allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation";
  i.src = otplessAuthlink;
  i.style.cssText = `
        width: 100%;
        height: 0;
        border: none;
        padding: 0;
        border: none;
        overflow: hidden;
        `;
  o.appendChild(i);
  window.history.pushState(
    {},
    document.title,
    window.top.location.href.split("?")[0]
  );
}

function receiveMessage(event) {
  if (event.origin !== "https://otpless.com") return;
  const data = event.data;
  switch (data.event) {
    case "initialize":
      var iframe = document.getElementById("otplessFrame");
      iframe.style.height = data.screen.height;
      break;
    case "otplessUser":
      otplessUser = data.otplessUser;
      console.log({
        clientData: otplessUser,
      });
      break;
    default:
      break;
  }
}

window.addEventListener("message", receiveMessage, false);
window.addEventListener("load", () => {
  otpless();
});

// var userDetails = otplessUser;
//otpless(otplessUser.uid, "SIGNUP", "/signup.html")
//otpless(otplessUser.uid, "SIGNIN", "/signin.html")
//otpless(otplessUser.uid, "SIGNOUT", "/signout.html")
//otpless(otplessUser.uid, "DELETE", "/delete.html")
