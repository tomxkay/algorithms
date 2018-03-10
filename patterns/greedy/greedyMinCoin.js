// greedy algorithms are simplier and also faster than dynamic programming algorithms -- however, it does not give the optimal answer all the time.

function MinCoinChange(coins) {
  var coins = coins; //{1}
  this.makeChange = function(amount) {
    var change = [],
      total = 0;
    for (var i = coins.length; i >= 0; i--) {
      var coin = coins[i];
      while (total + coin <= amount) {
        change.push(coin);
        total += coin;
      }
    }
    return change;
  };
}

var minCoinChange = new MinCoinChange([1, 5, 10, 25]);
console.log(minCoinChange.makeChange(36));
