// code your solution here
function saturdayFun(fun = "roller-skate"){
    return `This Saturday, I want to ${fun}!`
}

const mondayWork = function(work = "go to the office"){
    return `This Monday, I will ${work}.`
}


function wrapAdjective(symbol = "*"){

    return  function(name = "special"){
        return `You are ${symbol}${name}${symbol}!`
    }
  
}
