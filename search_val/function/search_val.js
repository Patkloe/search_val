function searchval(tab,c){
  if(tab === null || tab.length === 0){
     return 0;
  }
  else{
   var i = 0;
    while ( i < tab.length){
      if( tab[i] === c){
        console.log("find at index :" + " " + i);
        return i;
      }
     i++;
    } // end while
       console.log("Not found");
       return -1;
  }
}
 var arr = [1,2,5,7,9,0,6];
 searchval(arr,5);