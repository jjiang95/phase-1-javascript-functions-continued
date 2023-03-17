// code your solution here
function saturdayFun(doWhat = "roller-skate") {
    return `This Saturday, I want to ${doWhat}!`;
}

function mondayWork(doWhat = "go to the office") {
    return `This Monday, I will ${doWhat}.`;
}

function wrapAdjective(flair="*") {
    return function (input="special") {
        return `You are ${flair}${input}${flair}!`
    }

}