window.PlayHub=window.PlayHub||{};
(function(P){
 const G=[
  {id:'rock-paper-scissors',name:'Kéo Búa Bao',en:'Rock Paper Scissors',icon:'🪨',category:'Casual',desc:'Outsmart the computer across fast, satisfying rounds.',mount:()=>P.RPS.mount},
  {id:'uno',name:'UNO',en:'UNO',icon:'🃏',category:'Casual',desc:'Match colors and numbers while special cards flip the turn.',mount:()=>P.UNO.mount},
  {id:'chess',name:'Cờ vua',en:'Chess',icon:'♟️',category:'Strategy',desc:'Play full local chess with legal moves and a tactical AI.',mount:()=>P.Chess.mount},
  {id:'number-guess',name:'Đoán số',en:'Number Guess',icon:'🔢',category:'Puzzle',desc:'Find the hidden number before the attempt counter runs out.',mount:()=>P.NumberGuess.mount},
  {id:'pong',name:'Pong',en:'Pong',icon:'🏓',category:'Arcade',desc:'Battle a responsive computer paddle and chase the winning score.',mount:()=>P.Pong.mount},
  {id:'flappy-bird',name:'Flappy Flight',en:'Flappy-style',icon:'🐦',category:'Arcade',desc:'Flap through moving gaps while speed and pressure rise.',mount:()=>P.Flappy.mount},
  {id:'minesweeper',name:'Dò mìn',en:'Minesweeper',icon:'💣',category:'Puzzle',desc:'Reveal safe cells, use clues, and flag every hidden mine.',mount:()=>P.Mines.mount},
  {id:'snake',name:'Rắn săn mồi',en:'Snake',icon:'🐍',category:'Arcade',desc:'Grow longer, move faster, and survive your own tail.',mount:()=>P.Snake.mount},
  {id:'tetris',name:'Tetris',en:'Tetris',icon:'🧱',category:'Puzzle',desc:'Rotate, stack, clear lines, and keep the board alive.',mount:()=>P.Tetris.mount},
  {id:'doodle-jump',name:'Sky Hopper',en:'Doodle-style',icon:'🏃',category:'Arcade',desc:'Auto-jump across procedural platforms and climb as far as you can.',mount:()=>P.Doodle.mount},
  {id:'memory-match',name:'Memory Match',en:'Memory Match',icon:'🧠',category:'Puzzle',desc:'Flip cards, remember symbols, and finish with fewer moves.',mount:()=>P.Memory.mount},
  {id:'tic-tac-toe',name:'❌⭕ Tic-Tac-Toe',en:'Tic-Tac-Toe',icon:'❌',category:'Strategy',desc:'Classic X and O with a genuinely unbeatable minimax difficulty.',mount:()=>P.TTT.mount}
 ];
 function get(id){return G.find(g=>g.id===id)} function all(){return G.slice()}
 function card(g){const fav=P.Storage.get('favorites')||[];const hs=P.Storage.get('highScores.'+g.id)||0;return `<article class="game-card"><div class="game-icon">${g.icon}</div><h3>${g.name}</h3><p class="desc">${g.desc}</p><div class="game-card-footer"><span class="card-meta">${g.category}${hs?` · Best ${P.Utils.formatNum(hs)}`:''}</span><button class="favorite-btn ${fav.includes(g.id)?'active':''}" data-favorite="${g.id}" aria-label="${fav.includes(g.id)?'Remove':'Add'} ${g.name} favorite">${fav.includes(g.id)?'★':'☆'}</button><button class="button primary small" data-play="${g.id}">Play</button></div></article>`}
 P.GameManager={games:G,get,all,card};
})(window.PlayHub);
