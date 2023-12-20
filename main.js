// โจทย์ : ให้สร้างฟังก์ชั่นเพื่อ validate(ตรวจสอบ) ค่าที่ submit จาก form
// 1. ทุก input ต้องไม่เป็นค่าว่างหรือ ใส่ space มาล้วนๆ
// 2. username ความยาวต้องมากกว่า 3 ตัวอักษร
//      - ตัด space หน้า-หลัง
//      (option) - และไม่มี space คั่นกลาง
//      - ห้ามนำหน้าด้วยตัวเลข
// 3. password ความยาวต้องมากกว่า 4 ตัวอักษร
//      (option) - ต้องมีทั้งตัวเลขและตัวอักษร
// ถ้า validate ไม่ผ่านให้เปลี่ยน input เป็นสีแดง
// ถ้า validate ผ่านให้ไปที่ https://www.example.com
// หรือ
// ถ้า validate ผ่านให้ไปทำการ login โดยตรวจสอบ username, password
// กับ array แบบที่เคยทำตอนโจทย์ javascript แล้วแจ้ง login successful



const loginForm = document.querySelector(".login-form");

const validateInput = (inputObj) => {
  for (const check in inputObj) {
    const value = inputObj[check].trim();

    if (value === "") {
      document.getElementById(check).style.backgroundColor = "red";
      alert(`${check} ไม่ใส่ค่าว่างจ้า`);
      return false;
    }

    if (check === "username") {
      if (value.length <= 3) {
        document.getElementById("username").style.backgroundColor = "red";
        alert("Username ต้องมีความยาวมากกว่า 3 ตัวอักษรเด้ออ");
        return false;
      }

      if (/^\d/.test(value)) {
        document.getElementById("username").style.backgroundColor = "red";
        alert("Username ห้ามนำหน้าด้วยตัวเลขเด้อ");
        return false;
      }
    }

    if (check === "password") {
      if (value.length <= 4) {
        document.getElementById("password").style.backgroundColor = "red";
        alert("Password ต้องมีความยาวมากกว่า 4 ตัวอักษรเด้อ");
        return false;
      }
      if (!/\d/.test(value) || !/[a-zA-Z]/.test(value)) {
        document.getElementById("password").style.backgroundColor = "red";
        alert("Password ต้องใส่ภาษาอังกฤษและตัวเลขเด้อ");
        return false;
      }
    }
  }

  return true;
};

const hdlLogin = (e) => {
  e.preventDefault();
  let inputObj = {};
  for (let el of loginForm.elements) {
    inputObj[el.id] = el.value;
  }
  if (validateInput(inputObj)) {
    alert(`login successful`);
    console.log(inputObj);
    window.location.assign('https://www.example.com');
  }
};

loginForm.addEventListener("submit", hdlLogin);

