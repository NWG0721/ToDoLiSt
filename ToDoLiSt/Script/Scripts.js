function Default_User() {
  //------------------------------| Default User Set on loclStorage |------------------------------//
  localStorage.setItem("NWG0721-Un", "NWG0721");
  localStorage.setItem("NWG0721-Pw", "1234");
  localStorage.setItem("NWG0721-Fn", "Nima Adel");
} //------------------------------| Default User Set on loclStorage |------------------------------//
function CU() {
  //------------------------------| Current User |------------------------------//
  let UN = localStorage.getItem("CurrentUser");
  return UN;
} //------------------------------| Current User |------------------------------//
let username;
function Submit(Mod) {
  username = document.getElementsByName("UserName")[0].value;
  console.log(username);
  let password = document.getElementsByName("PassWord")[0].value;
  let fullName;
  let PasWord2;
  let userValid;
  let passValid;
  switch (Mod) {
    case 1: //------------------------------| LogIn Form Code Stact |------------------------------//
      userValid = localStorage.getItem(username + "-Un"); // get Username from Local Storage
      if (username == userValid) {
        passValid = localStorage.getItem(username + "-Pw"); // get PassWord from Local Storage
        if (passValid == password) {
          alert("Wellcome back " + username);
          localStorage.setItem("CurrentUser", username);
          window.location.href = "../PhP/Todo.php";
        } else {
          alert("PassWord is invalid!");
          break;
        }
      } else {
        alert("Username is not valid!");
        break;
      }

      break; //------------------------------| LogIn Form Code Stact |------------------------------//

    case 2: //------------------------------| SignIn Form Code Stact |------------------------------//
      fullName = document.getElementsByName("FullName")[0].value;
      PasWord2 = document.getElementsByName("RPW")[0].value;
      userValid = localStorage.getItem(username + "-Un"); // get Username from Local Storage
      if (userValid != username) {
        localStorage.setItem(username + "-Un", username);
        if (PasWord2 == password) {
          localStorage.setItem(username + "-Pw", password);
        } else {
          alert("Passwords are not same");
        }
        localStorage.setItem(username + "-Fn", fullName);
        alert("Wellcome " + username);
        localStorage.setItem("CurrentUser", username);
        window.location.href = "../PhP/Todo.php";
      } else {
        alert("Username already exists");
      }
      break; //------------------------------| SignIn Form Code Stact |------------------------------//
  }
}

function getUserName() {
  //------------------------------| For Showing  UserName In NavBar |------------------------------//
  document.getElementById("U-N-L").innerText = CU();
} //------------------------------| For Showing  UserName In NavBar |------------------------------//
function Cheker() {
  if (document.getElementById("Check").checked == true) {
    return true;
  } else {
    return false;
  }
}
localStorage.setItem("isset", true);
function Counter() {
  let Key = CU() + "-UTC";
  let isset = localStorage.getItem("isset");
  if (isset == true) {
    localStorage.setItem(Key, 0);
    localStorage.setItem("isset", false);
  } else {
    //UTC == User Todo Counter//
    let UTC;
    UTC = localStorage.getItem(Key);
    UTC++;
    localStorage.setItem(Key, UTC);
    return UTC;
  }
}

function DBSetter(checked, subject, caption) {
  let Numbrela = Counter();
  document.getElementById("UserNamePut").innerHTML = CU();
  document.getElementById("NumbrelaPut").innerHTML = Numbrela;
  localStorage.setItem(CU() + "-DB-Check-" + Numbrela, checked);
  localStorage.setItem(CU() + "-DB-Sub-" + Numbrela, subject);
  localStorage.setItem(CU() + "-DB-Cap-" + Numbrela, caption);
}
function DBreader(count) {
  let Item_Ch = localStorage.getItem(CU() + "-DB-Check-" + count);
  alert(Item_Ch);
  document.getElementById("Check" + count).innerHTML = Item;
  let Item_Sub = localStorage.getItem(CU() + "-DB-Sub-" + count);
  alert(Item_Sub);
  document.getElementById("Subject" + count).innerHTML = Item;
  let Item_Cap = localStorage.getItem(CU() + "-DB-Cap-" + count);
  alert(Item_Cap);
  document.getElementById("Caption" + count).innerHTML = Item;
}
function DataSender() {
  document.getElementById("UserNamePut").value = CU();
  document.getElementById("NumbrelaPut").value = localStorage.getItem(
    CU() + "-UTC"
  );
}
function DataDeleter(Number) {
  localStorage.removeItem(CU() + "-DB-Check-" + Number);
  localStorage.removeItem(CU() + "-DB-Sub-" + Number);
  localStorage.removeItem(CU() + "-DB-Cap-" + Number);
  let numer = localStorage.getItem(CU() + "-UTC");
  localStorage.setItem(CU() + "-UTC", numer - 1);
}
// Data Editor Data Sender //
function DEDS(Number) {
  //Check Box//
  let Su = localStorage.getItem(CU() + "-DB-Sub-" + Number);
  let Ca = localStorage.getItem(CU() + "-DB-Cap-" + Number);
  document.getElementById("Re-Subject").value = Su;
  document.getElementById("Re-Caption").value = Ca;
  document.getElementById("Re-hiden").value = Number;
}
function DataEditor(Number, subject, caption) {
  localStorage.setItem(CU() + "-DB-Sub-" + Number, subject);
  localStorage.setItem(CU() + "-DB-Cap-" + Number, caption);
}
