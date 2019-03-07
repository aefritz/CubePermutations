let i = 0;
function getBitString(dec){
  return (dec >>> 0).toString(2);
}
function myLoop () {
   setTimeout(function () {
      let BitString = getBitString(i);
      let strLength = BitString.length;
      let countdown = 12 - strLength;
      while (countdown > 0) {
        BitString = "0" + BitString;
        countdown--;
      }
      console.log(BitString);
      if (BitString.substr(0, 1) == "0") {
        line1.style="stroke:rgb(255,255,255)";
       }
      if (BitString.substr(0, 1) == "1") {
        line1.style="stroke:rgb(0,0,0)";
      }
      if (BitString.substr(1, 1) == "0") {
        line2.style="stroke:rgb(255,255,255)";
      }
      if (BitString.substr(1, 1) == "1") {
        line2.style="stroke:rgb(0,0,0)";
      }
      if (BitString.substr(2, 1) == "0") {
        line3.style="stroke:rgb(255,255,255)";
      }
      if (BitString.substr(2, 1) == "1") {
        line3.style="stroke:rgb(0,0,0)";
      }
      if (BitString.substr(3, 1) == "0") {
        line4.style="stroke:rgb(255,255,255)";
      }
      if (BitString.substr(3, 1) == "1") {
        line4.style="stroke:rgb(0,0,0)";
      }
      if (BitString.substr(4, 1) == "0") {
        line5.style="stroke:rgb(255,255,255)";
      }
      if (BitString.substr(4, 1) == "1") {
         line5.style="stroke:rgb(0,0,0)";
      }
      if (BitString.substr(5, 1) == "0") {
         line6.style="stroke:rgb(255,255,255)";
      }
      if (BitString.substr(5, 1) == "1") {
        line6.style="stroke:rgb(0,0,0)";
      }
      if (BitString.substr(6, 1) == "0") {
        line7.style="stroke:rgb(255,255,255)";
      }
      if (BitString.substr(6, 1) == "1") {
        line7.style="stroke:rgb(0,0,0)";
      }
      if (BitString.substr(7, 1) == "0") {
        line8.style="stroke:rgb(255,255,255)";
      }
      if (BitString.substr(7, 1) == "1") {
        line8.style="stroke:rgb(0,0,0)";
      }
      if (BitString.substr(8, 1) == "0") {
        line9.style="stroke:rgb(255,255,255)";
      }
      if (BitString.substr(8, 1) == "1") {
        line9.style="stroke:rgb(0,0,0)";
      }
      if (BitString.substr(9, 1) == "0") {
        line10.style="stroke:rgb(255,255,255)";
      }
      if (BitString.substr(9, 1) == "1") {
        line10.style="stroke:rgb(0,0,0)";
      }
      if (BitString.substr(10, 1) == "0") {
        line11.style="stroke:rgb(255,255,255)";
      }
      if (BitString.substr(10, 1) == "1") {
        line11.style="stroke:rgb(0,0,0)";
      }
      if (BitString.substr(11, 1) == "0") {
        line12.style="stroke:rgb(255,255,255)";
      }
      if (BitString.substr(11, 1) == "1") {
        line12.style="stroke:rgb(0,0,0)";
      }
          document.querySelector("#permutationNo").innerHTML=`Permutation No ${i+1}`;
      i++;
      if (i < 4096) {
         myLoop();
      }
   }, 100)
}
myLoop();  
