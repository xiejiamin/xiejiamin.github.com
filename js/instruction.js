 var curIndex = 0; 
  var timeInterval = 2000; 
  var arr = new Array(); 
  arr[0] = "img/banner-1.jpg"; 
  arr[1] = "img/banner-2.jpg"; 
  arr[2] = "img/banner-3.jpg"; 
  arr[3] = "img/banner-4.jpg"; 
  setInterval(changeImg,timeInterval); 
  function changeImg() { 
   var instructionImg = document.getElementById("instructionImg"); 
   if (curIndex == arr.length-1) { 
    curIndex = 0; 
   } else { 
    curIndex += 1; 
     } 
   instructionImg.src = arr[curIndex]; 
  }