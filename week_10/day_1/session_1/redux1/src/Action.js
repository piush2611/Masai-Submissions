const incCounter = 'incCounter'
const decCounter = 'decCounter'
const mulCounter = "mulCounter"
const divCounter = "divCounter"
const showRemainder = 'showRemainder'

const incrementCounter = amount => {
    return {
        type: incCounter,
        amount
    }
}

const decrementCounter = amount => {
    return {
        type: decCounter,
        amount
    }
}

const multiplyCount = amount => {
    return {
        type: mulCounter,
        amount
    }
}

const divideCount = amount => {
    return {
        type: divCounter,
        amount
    }
}

const calculateRemainder = amount => {
    return {
        type: showRemainder,
        amount
    }
}

export { incrementCounter, decrementCounter, multiplyCount, divideCount, calculateRemainder }