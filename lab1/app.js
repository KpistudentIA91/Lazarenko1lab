function first(number){
  let numbers = []
  for (let i = 0; i < number; i++)
    numbers.push(i)
  return numbers
}
console.log(first(7))

function second(fn, sn, tn){
  if(fn % sn == 0 && fn % tn == 0){
    console.log('true')
  }
  else{
    console.log(' Please enter numbers correctly')
  }
}
console.log(second(4, 1, 4))

function third(str){
  if(str.length < 10 && str.length > 0){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  else{
    console.log('please enter up to 10 letters and at least 1')
  }
}
console.log(third('artem'))
