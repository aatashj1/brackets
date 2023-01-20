module.exports = function check(str, bracketsConfig) {
 if (str.length % 2 == 1) {
  return false;
 }
 let beforeLength;
 for (let i = 0; i < bracketsConfig.length; i++) {
  let parfOfArr = bracketsConfig[i];
  let malenkiuLychek = parfOfArr[0] + parfOfArr[1];
  do {
   beforeLength = str.length;
   str = str.replaceAll(malenkiuLychek, "");
   if(beforeLength>str.length){
    i=-1;
   }
  }
  while (beforeLength>str.length && str.length !== 0);

  if (str.length===0) {
   break;
  }
 }
 if(str.length !== 0){
  return false;
 }
 return true;
}

