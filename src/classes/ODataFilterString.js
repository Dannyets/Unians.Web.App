export default class ODataFilterString{
    constructor(){
        this.value = '';
    }

    filter = (propertyName, operation, value) => {
        let filterStr = `${propertyName} ${operation}`;

        if(Array.isArray(value) && value.length > 0){
            const values = value.map(v => `${filterStr} ${v}`).join(' or ');
            filterStr = `(${values})`;
        } else if(value.length === 0){
            filterStr = '';
        } else {
            filterStr += ` ${value}`;
        }

        this.value += filterStr;

        return this;
    }

    and = () => {
        this.value += ' and ';

        return this;
    }

    or = () => {
        this.value += ' or ';

        return this;
    }
}