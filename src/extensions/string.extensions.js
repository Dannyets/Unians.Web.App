String.prototype.splitByUpperCase = function(){
    return this.replace(/([a-z](?=[A-Z]))/g, '$1 ').toLowerCase();
}