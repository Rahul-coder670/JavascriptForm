let data = {
   "India":{
       "UP":["Lucknow","Kanpur","Meerut"],
       "MP":["Indore","Jabalpur","Manikpur"],
       "WB":["Kolkata","Durgapur","Asansol"],
   },
   "USA":{
       "California":["Los Angeles","San Diego","San Jose"],
       "Texas":["Houston","Dallas","San Antonio"],
       "Ohio":["Columbus","Cleveland","Cincinnati"],
   },
   "Nepal":{
       "Lumbini":["Ghorahi","Butwal","Siddharthnagar"],
       "Karnali":["Birendranagar","Simikot","Dullu"],
       "Sudurpaschim":["Dhangadhi","Bhimdatta","Tikapur"],
   },
}

var country = document.querySelector('#country');
let options = "";
options+= `<option value="0">--Select Country--</option>`;
for(cn in data){
options+= `<option value="${cn}">${cn}</option>`;
}
country.innerHTML = options;


function getState(country){
  let value = country.value;
  if(value!="0"){
    let state = document.getElementById("state");
    let options = "";
    options+=`<option value="0">--Select State--</option>`;
    for(cn in data[value]){
       options+=`<option value="${cn}">${cn}</option>`;
    }
    state.innerHTML = options;  
  }
  else{
   state.style.display = "none";
   document.getElementById("city").style.display = "none";
  }
}


function getCity(state){
   let value = state.value;
   let country = document.getElementById("country").value;
  if(value!="0"){
    let city = document.getElementById("city");
    let options = "";
    options+=`<option value="0">--Select City--</option>`;
    for(cn of data[country][value]){
     options+=`<option value="${cn}">${cn}</option>`;
    }
    city.innerHTML = options;  
}
  else{
   city.style.display = "none";
  }
}

 
function Gender(){
   let gender = document.getElementsByName("gender");     
   let gen = "";   
   for (x of gender){
     if(x.checked==true){
          gen = x.value;
      }
   } 
     console.log(gen);  
}


function Course(){
   let checkboxes = document.querySelectorAll("input[type=checkbox]:checked");  
   if(checkboxes.length===2) {       
     [...document.querySelectorAll("input[type=checkbox]:not(:checked)")]
      .forEach(cb => cb.disabled = true);               
   }    
}


 var code;
 
   document.getElementById("captcha").innerHTML = "";
   var charsArray= "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*";
   var lengthOtp = 6;
   var captcha = [];
   for(var i=0; i<lengthOtp; i++){
      var index = Math.floor(Math.random() * charsArray.length+1);
      if(captcha.indexOf(charsArray[index])== -1){
         captcha.push(charsArray[index]);
      }
      else {
         i--;
      }      
   }
   var canv = document.createElement("canvas");
   canv.id = "captcha";
   canv.width = "100";
   canv.height = "50";
   var ctx = canv.getContext("2d");
   ctx.font = "25px Georgia";
   ctx.strokeText(captcha.join(""),0,30);

   code = captcha.join("");
   document.getElementById("captcha").appendChild(canv);
 

   function ValidatePassword(){
      document.getElementById("passdiv").style.display="inline";
      let password = document.getElementById("password");
      let pw = password.value;
      while(pw.length>8 && pw.length<12){
         document.querySelector("#minimum").checked = true;
      }
      if(/[A-Z]/.test(pw)){       
        document.querySelector("#uppercase").checked = true;
      }
      if(/[a-z]/.test(pw)){      
         document.querySelector("#lowercase").checked = true;
       }
      if(/[0-9]/.test(pw)){      
        document.querySelector("#digit").checked = true;
      }
      if(/[@#$%&*_]/.test(pw)){
         document.querySelector("#special").checked = true;
      }
     // document.getElementById("passdiv").style.display="none";  
   }

function Validate(){
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let cnfemail = document.getElementById("cnfemail");
    let password = document.getElementById("password");
    let cnfpassword = document.getElementById("cnfpassword");
    let dob = document.getElementById("dob");
    
    let errorPara = document.getElementById("error");
    let nm = name.value;
    let em = email.value;
    let pw = password.value;
    let pnm = new RegExp("^[a-zA-Z\\s]+$");
    let pem = new RegExp("^[\\w.]+@[\\w]+.[a-zA-Z]+$");
    let errors = [];
    if(nm.length<2 || nm.length>10){
       errors.push("Invalid name length");
    }
    if(!pnm.test(nm)){
       errors.push("Invalid Name");
    }
    if(!pem.test(em)){
        errors.push("Invalid Email");
     }
     if(cnfemail.value != em){
      errors.push("Email dismatched");
   }
  
     if(cnfpassword.value != pw){
      errors.push("Password dismatched");
     }
    
   //   if(dob.value > new Date()){
   //    errors.push("Password dismatched");
   //   }
     if(document.getElementById("captcha2").value != code){
        errors.push("Invalid Captcha")
     }
     if(errors.length > 0){
        let ul = "";
        for(let x of errors){
           ul += `<li>${x}</li>`;
        }
        errorPara.innerHTML = ul;
        console.log(ul);
        return false;
     }
     return true;
}
