Object.prototype.length = function(){
    if(!this){
      return 0;
    }

    return Object.keys(this).length;  
}
