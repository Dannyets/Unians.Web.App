import { NestedODataParameter, ODataFilterString } from '../classes';

function calculateLinqActionAndUpdateBuilderValue(args, actionType, builder){
    const parametersString = getParametersString(args);

    if(!parametersString){
        return builder;
    }

    const actionWithParameters = `$${actionType}=${parametersString}`;

    builder.updateValue(actionWithParameters);

    return builder;
}

function getParametersString(args){
    if(args.length === 0){
        return null;
    }

    let parametersToSelect = [];

    args.forEach(arg => {
        if(typeof arg === 'string'){
            parametersToSelect.push(arg);
        }
        else if(arg instanceof NestedODataParameter){
            parametersToSelect.push(arg.getValue())
        }
        else if(arg instanceof ODataFilterString){
            parametersToSelect.push(arg.value);
        }
    });

    const parametersString = parametersToSelect.join(',');

    return parametersString;
}

export default {
    calculateActionAndUpdateValue: calculateLinqActionAndUpdateBuilderValue
}