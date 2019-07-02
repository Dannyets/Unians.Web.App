import { oDataUriService } from '../services';
import ODataFilterString from './ODataFilterString';

class ODataQueryBuilder {
    constructor(){
        this.value = '';
        this.joinParametersChar = '&'

        this.select = this.select.bind(this);
        this.updateValue = this.updateValue.bind(this);
        this.getValue = this.getValue.bind(this);
    }
    
    select(){
        const args = [...arguments]

        return oDataUriService.calculateActionAndUpdateValue(args, 'select', this);
    }

    expand(){
        const args = [...arguments]

        return oDataUriService.calculateActionAndUpdateValue(args, 'expand', this);
    }

    filter(filterStr){
        return oDataUriService.calculateActionAndUpdateValue([filterStr], 'filter', this);
    }

    updateValue(newStatment){
        if(this.value && this.value.length > 0){
            this.value += this.joinParametersChar + newStatment;
        } else {
            this.value = newStatment;
        }
    }

    getValue(){
        return this.value || '';
    }
}

export default ODataQueryBuilder;