

function myfunction() {
  var user = prompt("Enter any alphabet : ");

  var outputDigit = "You entered : " + user;
  var output1 = " is : vowel";
  var output2 = " is : consonant";

  // program start

  if (user == "a"| user=="A") {
    document.getElementById('vc').innerHTML=user + output1;
  }
  //vowel
  else if (user == "e"| user=="E") {
    document.getElementById('vc').innerHTML=user + output1;
  } else if (user == "i"| user=="I") {
    document.getElementById('vc').innerHTML=user + output1;
  } else if (user == "o"| user=="O") {
    document.getElementById('vc').innerHTML=user + output1;
  } else if (user == "u"| user=="U") {
    document.getElementById('vc').innerHTML=user + output1;
  }
  // consonant
  else if (user == "b" | user=="B") {
    document.getElementById('vc').innerHTML=user + output2;;
  } else if (user == "c"| user=="C") {
    document.getElementById('vc').innerHTML=user + output2;;
  } else if (user == "d"| user=="D") {
    document.getElementById('vc').innerHTML=user + output2;;
  } else if (user == "f"| user=="F") {
    document.getElementById('vc').innerHTML=user + output2;;
  } else if (user == "g"| user=="G") {
    document.getElementById('vc').innerHTML=user + output2;;
  } else if (user == "h"| user=="H") {
    document.getElementById('vc').innerHTML=user + output2;;
  } else if (user == "j"| user=="J") {
    document.getElementById('vc').innerHTML=user + output2;;
  } else if (user == "k"| user=="K") {
    document.getElementById('vc').innerHTML=user + output2;;
  } else if (user == "l"| user=="L") {
    document.getElementById('vc').innerHTML=user + output2;;
  } else if (user == "m"| user=="M") {
    document.getElementById('vc').innerHTML=user + output2;;
  } else if (user == "n"| user=="N") {
    document.getElementById('vc').innerHTML=user + output2;;
  } else if (user == "p"| user=="P") {
    document.getElementById('vc').innerHTML=user + output2;;
  } else if (user == "q"| user=="Q") {
    document.getElementById('vc').innerHTML=user + output2;;
  } else if (user == "r"| user=="R") {
    document.getElementById('vc').innerHTML=user + output2;;
  } else if (user == "s"| user=="S") {
    document.getElementById('vc').innerHTML=user + output2;;
  } else if (user == "t"| user=="T") {
    document.getElementById('vc').innerHTML=user + output2;;
  } else if (user == "v"| user=="V") {
    document.getElementById('vc').innerHTML=user + output2;;
  } else if (user == "w"| user=="W") {
    document.getElementById('vc').innerHTML=user + output2;;
  } else if (user == "x"| user=="X") {
    document.getElementById('vc').innerHTML=user + output2;;
  } else if (user == "y"| user=="Y") {
    document.getElementById('vc').innerHTML=user + output2;;
  } else if (user == "z"| user=="Z") {
    document.getElementById('vc').innerHTML=user + output2;;
  }else{
    alert('you didn\'t enter any alphabet! Please enter an alphabet')
    document.getElementById('vc').innerHTML="Please enter any  alphabet"
  }


  // Output 
  document.getElementById("letter").innerHTML = outputDigit;
  
}
