function TTT(){
  var board = [[0,0,0],
               [0,0,0],
               [0,0,0]];
    
  var whosTurn = 1;
  
  this.show = function(){
    return board;
  }
  
  this.isWon = function(){
    var sum;
    //won by row
    for(var i=0; i<3; i++){
      sum = 0;
      sum = board[i][0] + board[i][1] + board[i][2];
      if (sum == 3 || sum == -3){
        return sum;
      }  
    }
    //won by col
    for(i=0; i<3; i++){
      sum = 0;
      sum = board[0][i] + board[1][i] + board[2][i];
      if (sum == 3 || sum == -3){
        return sum;
      }  
    }
    //won by diagonal row
    sum = 0;
    sum = board[0][0] + board[1][1] + board[2][2];
      
    if (sum == 3 || sum == -3){
        return sum;
    }
    sum = 0;
    sum = board[0][2] + board[1][1] + board[2][0];
      
    if (sum == 3 || sum == -3){
        return sum;
    }
      return false;
  };
  
  this.has = function(a,b){
        if(board[a][b] == 1 || board[a][b] == -1){
            return true;
        }
        return false;
  };
  
  this.check = function(a,b){
    if(!this.has(a,b)){
      board[a][b] = whosTurn;
      whosTurn *= -1;
      return true;
    }
    return false;
  };
    
  this.clear = function(){
      board = [[0,0,0],
               [0,0,0],
               [0,0,0]];
      return true;
  }
  
  this.isOnesTurn = function(){
      return whosTurn == 1;
  }
}

var game1 = new TTT();

game1.check(1,1);
game1.check(0,0);
game1.check(0,1);
game1.check(1,0);
game1.check(0,2);
game1.check(2,1);
game1.check(2,0);
var a = game1.show();
console.log( a[0][0], a[0][1], a[0][2] );
console.log( a[1][0], a[1][1], a[1][2] );
console.log( a[2][0], a[2][1], a[2][2] );
console.log(game1.isWon());
game1.clear();
var a = game1.show();
console.log( a[0][0], a[0][1], a[0][2] );
console.log( a[1][0], a[1][1], a[1][2] );
console.log( a[2][0], a[2][1], a[2][2] );