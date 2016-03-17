var arr = [];
for ( var i = 0; i < 2; i++ ){
 arr.push( prompt( arr[i] ) );
}
    alert( arr );

//***************/

var name = prompt('Your Name:');
    //alert(name);

//***********

for ( var n = 0; n < 2; n++ ){
    var yesName = false;
  if (arr[n] == name){
      yesName = true;
  } 
    while(yesName){
        alert( name + ' вы успешно вошли');
        break;
    }
}
if (yesName == false){
    alert(' Error');
}

//******************************************
/*for ( var n = 0; n < 2; n++ ){
  if (arr[n] == name){
   alert( name + ' вы успешно вошли');
    break;
  } else {;
      alert(' Error');
     
  }
}*/
    