/*
 *exercise 01
 *write a script exercise01.js containing a function identity(n)
 *that returns the n rows by n columns identity matrix   
 */

function identity (n) {

var i,j;	
var stringa ="";
var raws = {};


for (i = 1; i <= n; i +=1) {
  	for (j = 1; j <= n; j +=1) {
  		if(i===j){
  			if(j===n)
  				stringa +=1+" ";
  			else
  				stringa +=1+", ";
  		}
  		else{
  			if(j===n)
  				stringa +=0+" ";
  			else
  				stringa +=0+", ";
  		}
	}

raws['riga '+i] = stringa;
stringa="";
}
	return raws;
	
}
