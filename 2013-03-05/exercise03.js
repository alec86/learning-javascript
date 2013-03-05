// exercise03

var i;
var j;
var stringa ="";
for (i = 1; i <= 10; i +=1) {
  	for (j = 1; j <= 10; j +=1) {
  		if(i===j){
  			if(j===10)
  				stringa +=1+" ";
  			else
  				stringa +=1+", ";
  		}
  		else{
  			if(j===10)
  				stringa +=0+" ";
  			else
  				stringa +=0+", ";
  		}
	}
console.log(stringa);
stringa="";
}