function generatePassword(passwordLength,includeLowercase,includeUppercase,includeNumbers,includeSymbols){
  const lowercaseChars="abcdefghijklmnopqrstuvwxyz";
   const uppercaseChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const numberChars="0123456789";
   const symbolChars="!?}{[]()&*%^#$@";
  let allowedChars="";
  let password="";
  allowedChars+=includeLowercase? lowercaseChars: "";
  allowedChars+=includeUppercase? uppercaseChars: "";
  allowedChars+=includeNumbers? numberChars : "";
  allowedChars+=includeSymbols? symbolChars: "";
 if(passwordLength<=0){
   return (`Password length at le ast must be 1`);
 }
 if(allowedChars.length===0){
 return (`At least 1 set of characters need to be set`);
 }

  for(i=0;i<length;i++){
   const randonIndex=Math.floor(Math.random() * allowedChars.length);
   password+=allowedChars[randonIndex];
   return password``;
  }
}
const passwordLength=12;
const includeLowercase=true;
const includeUppercase=true;
const includeNumbers=true;
const includeSymbols=true;
const password=generatePassword(passwordLength,
                                includeLowercase,
                                includeUppercase,
                                includeNumbers,
                                includeSymbols);
      console.log(`Generated password: ${password}`);
 
