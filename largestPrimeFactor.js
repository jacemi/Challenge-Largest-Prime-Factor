exports.largestPrimeFactor = function(n){
  var primeNumber = 0;
  var factorArr = [];
  for(let i = 0; i <= n; i++){
    if(n%[i] === 0){
      factorArr.push([i]);
    }
  }

  return primeNumber;
};


function primeFactor(n) {
  let primeNumber = 0;
  let factorArr = [];
  let primeFactorArr = [];
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      factorArr.push(i);
    }
    
  }
  for (let x = 0; x <= factorArr.length; x++) {
    for (let y = 0; y <= factorArr.pop(); y++){
    if (factorArr[x] % y !== 0) {
      primeFactorArr.push(factorArr[x]);
    }
  }
  } return primeFactorArr;
}