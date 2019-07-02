import ODataQueryBuilder from './ODataQueryBuilder';

class NestedODataParameter extends ODataQueryBuilder {
    constructor(parameterName){        
        super();
        this.joinParametersChar = ';'

        this.parameterName = parameterName;
        this.getValue = this.getValue.bind(this);
    }

    getValue(){
        return `${this.parameterName}(${this.value})`;
    }
}

export default NestedODataParameter;