let username;

function Default_User() {
  localStorage.setItem(
    "NWG0721",
    "FullName = 'Nima Adel', PassWord = '1234', DBAddress = '0'"
  );
}

let DBCount = 0;
let DBCountA = [];
function DB_Counter() {
  DBCountA[DBCount] = DBCount;
  DBCount++;
  console.log(DBCountA);
  return DBCount;
}

function DB_Address_Maker() {
  let DB_ADDress = localStorage.length;
  return DB_ADDress++;
}

function Submit(n) {
  username = document.getElementsByName("UserName")[0].value;
  let password = document.getElementsByName("PassWord")[0].value;
  let userValid;
  let userProfile;

  switch (n) {
    case 1:
      let passWord = "'" + password + "'";
      userValid = localStorage.getItem(username);
      if (userValid == null) {
        alert("User not found!");
        break;
      }

      let passPose = userValid.indexOf("PassWord = '");
      let passValid = userValid
        .slice(passPose + 11, userValid.length)
        .split(" ")[0]
        .indexOf(passWord);
      if (userValid != null) {
        if (passValid != -1 && password != "") {
          alert("All right!");
          window.location.href =
            "../PhP/Todo.php?username=" +
            username +
            "&id=" +
            DBAccess("NWG0721");
        } else {
          alert("Password is incorrect!");
          break;
        }
      }

      break;

    case 2:
      let fullname = document.getElementsByName("FullName")[0].value;
      let rpw = document.getElementsByName("RPW")[0].value;
      userValid = localStorage.getItem(username);
      if (userValid !== null) {
        alert("Username already exists");
        break;
      }

      if (rpw !== password) {
        alert("Passwords don't match!!");
        break;
      }

      if (fullname == "") {
        alert("Enter Your Full Name");
        break;
      }
      userProfile =
        "FullName = '" +
        fullname +
        "', PassWord = '" +
        password +
        "', DBAddress = '" +
        DB_Address_Maker() +
        "'";

      localStorage.setItem(username, userProfile);
      alert("Account created successfully!");
      window.location.href =
        "../PhP/Todo.php?username=" + username + "&id=" + DBAccess(username);
      break;
  }
}

function getDBCode() {
  var urlParams = new URLSearchParams(window.location.search);
  var id = urlParams.get("id");
  return id;
}

let passindex;
let passExpss; // Its an exported key of personal DataBase
function DBAccess(username) {
  let FDB = localStorage.getItem(username);
  passindex = 12 + FDB.indexOf("DBAddress = '");
  passExpss = FDB.slice(passindex + 1, FDB.length - 1);
  return passExpss;
}

let UserCode;
let Isset = true;
function DBSetter(Chek, Sub, Cap) {
  if (Isset == true) {
    UserCode = getDBCode();
    Isset = false;
  }
  localStorage.setItem(UserCode + "-" + DB_Counter(), DBEngin(Chek, Sub, Cap));
  DB_reader(getDBCode());
}

function DBEngin(Chek, subject, caption) {
  let Data = "Chek = " + Chek + " , Sub = " + subject + " , Cap = " + caption;
  console.log(Data);
  return Data;
}

function Cheker() {
  if (document.getElementById("02-11").checked == true) {
    return true;
  } else {
    return false;
  }
}
//DataBase User Code
function DB_reader(DBUC) {
  for (i = 0; i < DBCountA.length; i++) {
    let AllDatas = localStorage.getItem(DBUC + "-" + DBCountA[i]);
    console.log(AllDatas);
  }
}
function getUserName() {
  var urlParams = new URLSearchParams(window.location.search);
  username = urlParams.get("username");
  document.getElementById("U-N-L").innerText = username;
}
