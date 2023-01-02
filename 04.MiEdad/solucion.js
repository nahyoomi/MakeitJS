
let yearGiven = prompt('What year were you born?')
let today = new Date()
let ActualYear = today.getFullYear();
let years = ActualYear - yearGiven

console.log('Tienes '+ years + ' años');