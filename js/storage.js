window.PlayHub=window.PlayHub||{};
(function(P){
 const KEY='playhub:v1';
 const defaults=()=>({favorites:[],highScores:{},achievements:{},stats:{gamesPlayed:0,wins:0,losses:0,draws:0,playTimeMs:0,lastPlayedAt:null,gameStats:{}},settings:{theme:'light',sound:true,music:false,reducedMotion:false},daily:{date:'',challenge:null,progress:0,completed:false}});
 function normalize(raw){const d=defaults(); if(!raw||typeof raw!=='object') return d; const out={...d,...raw};
  out.favorites=Array.isArray(raw.favorites)?raw.favorites.filter(x=>typeof x==='string'):[];
  out.highScores=raw.highScores&&typeof raw.highScores==='object'?raw.highScores:{};
  out.achievements=raw.achievements&&typeof raw.achievements==='object'?raw.achievements:{};
  out.stats={...d.stats,...(raw.stats&&typeof raw.stats==='object'?raw.stats:{})};
  out.stats.gameStats=raw.stats?.gameStats&&typeof raw.stats.gameStats==='object'?raw.stats.gameStats:{};
  out.settings={...d.settings,...(raw.settings&&typeof raw.settings==='object'?raw.settings:{})};
  if(!['light','dark'].includes(out.settings.theme)) out.settings.theme='light';
  ['sound','music','reducedMotion'].forEach(k=>out.settings[k]=!!out.settings[k]);
  out.daily={...d.daily,...(raw.daily&&typeof raw.daily==='object'?raw.daily:{})};
  return out;
 }
 function load(){try{return normalize(JSON.parse(localStorage.getItem(KEY)||'null'))}catch(e){return defaults()}}
 let state=load();
 function save(){try{localStorage.setItem(KEY,JSON.stringify(state))}catch(e){} window.dispatchEvent(new CustomEvent('playhub:state',{detail:state}))}
 function get(path){if(!path)return state;return path.split('.').reduce((o,k)=>o?.[k],state)}
 function set(path,val){const keys=path.split('.');let o=state;keys.slice(0,-1).forEach(k=>o=o[k]||(o[k]={}));o[keys[keys.length-1]]=val;save();return val}
 function update(fn){const next=fn(JSON.parse(JSON.stringify(state)));state=normalize(next);save();return state}
 function reset(section){if(section){const d=defaults();state[section]=d[section];save()}else{state=defaults();save()}}
 P.Storage={KEY,state:()=>state,get,set,update,reset,defaults};
})(window.PlayHub);
