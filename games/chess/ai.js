window.PlayHub=window.PlayHub||{};window.PlayHub.Chess=window.PlayHub.Chess||{};
(function(P){
 function val(p){return {p:100,n:320,b:330,r:500,q:900,k:20000}[p.toLowerCase()]||0}function evaluate(b){let s=0;for(let y=0;y<8;y++)for(let x=0;x<8;x++){const p=b[y][x];if(p)s+=(p===p.toUpperCase()?val(p):-val(p))}return s}
 function choose(state,depth){const moves=state.legalMoves().filter(m=>m.piece===m.piece.toLowerCase());if(!moves.length)return null;let best=-Infinity,bm=moves[0];for(const m of moves){const u=state.makeMove(m);const sc=-negamax(state,depth-1,-Infinity,Infinity);state.undo(u);if(sc>best){best=sc;bm=m}}return bm}
 function negamax(state,depth,alpha,beta){if(depth<=0){const e=evaluate(state.board);return state.turn==='w'?e:-e;}const ms=state.legalMoves();if(!ms.length)return state.inCheck(state.turn)?-999999:0;let best=-Infinity;for(const m of ms){const u=state.makeMove(m);const sc=-negamax(state,depth-1,-beta,-alpha);state.undo(u);if(sc>best)best=sc;if(sc>alpha)alpha=sc;if(alpha>=beta)break}return best}
 P.ChessAI={choose};
})(window.PlayHub);
