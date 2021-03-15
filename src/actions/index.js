export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY"
export const ADD_TO_MEMORY = "ADD_TO_MEMORY"
export const CLEAR_MEMORY = "CLEAR_MEMORY"
export const USE_MEMORY = "USE_MEMORY"

const addOne = () => {
    return({type:ADD_ONE});
}

const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

const changeOperation = (operation) => {
    return({type:CHANGE_OPERATION, payload:operation})
}

const clearDisplay = () => {
    return({type:CLEAR_DISPLAY})
}
const addToMemory = (memory) => {
    return({type:ADD_TO_MEMORY, payload:memory})
}
const clearMemory = () => {
    return({type:CLEAR_MEMORY})
}

const useMemory = () => {
    return({type:USE_MEMORY})
}

export default {
    addOne,
    applyNumber,
    changeOperation,
    clearDisplay,
    addToMemory,
    clearMemory,
    useMemory

}