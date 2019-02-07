

function makeIdGenerator() {
    var id = 0;
    // The following is the closure function
    return function() {
      // This inner function accesses and assigns the value of
      // the variable id, which was defined in the parent function
      id += 1;
      return id;
    }
  }
  
  // makeIdGenerator returns a function which is assigned to
  // the variable nextId
  var nextId = makeIdGenerator();
  
  console.log(nextId()); // Logs: 1
  console.log(nextId()); // Logs: 2

console.log("-".repeat(20));



// loaded die
var rollDie = function () {
    return Math.floor(1 + Math.random() * 6);
}

console.log(rollDie());  // 1 (for example)


function makeLoadedDie() {
    var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
    var myInd = 0;
  
    return function() {
        result = list[myInd];
        myInd += 1;
        return result;
      
    }
  }
  
  var rollLoadedDie = makeLoadedDie();
  
  console.log(rollLoadedDie());  // 5
  console.log(rollLoadedDie());  // 4
  console.log(rollLoadedDie());  // 6

console.log("-".repeat(10));

  var countdownGenerator = function (x) {
    var message;
    return function(){
        if (x >= 1){
            message = (`T-minus ${x}...`);
        } else if (x === 0){
            message = "Blast Off!";
        } else {
            message = "Rocket's already gone, bub!";
        }
        x-=1;
        console.log(message);
    };
  };
  
  var countdown = countdownGenerator(3);
  countdown(); // T-minus 3...
  countdown(); // T-minus 2...
  countdown(); // T-minus 1...
  countdown(); // Blast Off!
  countdown(); // Rockets already gone, bub!
  countdown(); // Rockets already gone, bub!