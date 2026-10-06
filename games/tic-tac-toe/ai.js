window.PlayHub=window.PlayHub||{};window.PlayHub.TTT=window.PlayHub.TTT||{};
(function(P){
 function winner(b){for(const [a,c,d] of [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]])if(b[a]&&b[a]===b[c]&&b[a]===b[d])return b[a];return b.every(Boolean)?'draw':null}
 function moves(b){return b.map((v,i)=>v?null:i).filter(i=>i!==null)}
 function minimax(b,maximizing){const w=winner(b);if(w==='O')return {score:10};if(w==='X')return {score:-10};if(w==='draw')return {score:0};let best=maximizing?-Infinity:Infinity,bestMove=null;for(const i of moves(b)){b[i]=maximizing?'O':'X';const sc=minimax(b,!maximizing).score;b[i]='';if(maximizing?sc>best:sc<best){best=sc;bestMove=i}}return {score:best,move:bestMove}}
 P.TTTAI={winner,moves,choose(b,diff){const ms=moves(b);if(diff==='easy')return P.Utils.choice(ms);if(diff==='normal'&&Math.random()<.28)return P.Utils.choice(ms);return minimax(b,true).move}};
})(window.PlayHub);
