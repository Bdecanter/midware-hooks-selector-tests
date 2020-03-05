import { createSelector } from 'reselect'
var lodash = require('lodash');

export const getIntegerList = (state) => {
    return state.ressource.ressourceList
}

export const getContainOneList = (state) => {
    return getIntegerList(state).filter(r => r.toString().indexOf('1') > -1)
}

export const getEntierPremierList = (state) => {
    return getIntegerList(state).filter(r => isPrimeNumber(r))
}

function isPrimeNumber(value) {
    for(let i = 2; i < value; i++) {
        if(value % i === 0){
            return false
        }
    }
    return value > 1
}

export const getSpecialNumberList = createSelector(
    getContainOneList,
    getEntierPremierList,
    (containsOneList, premierList) => {
        return lodash.intersection(containsOneList, premierList)
    }

)
