window.PlayHub=window.PlayHub||{};
(function(P){
 let ctx=null;
 function ensure(){if(!ctx)ctx=new (window.AudioContext||window.webkitAudioContext)(); if(ctx.state==='suspended')ctx.resume();return ctx}
 function beep(freq=440,duration=.07,type='sine',gain=.035){if(!P.Storage.get('settings.sound'))return;try{const c=ensure(),o=c.createOscillator(),g=c.createGain();o.type=type;o.frequency.value=freq;g.gain.setValueAtTime(gain,c.currentTime);g.gain.exponentialRampToValueAtTime(.0001,c.currentTime+duration);o.connect(g);g.connect(c.destination);o.start();o.stop(c.currentTime+duration)}catch(e){}}
 function sequence(notes=[440,660]){notes.forEach((n,i)=>setTimeout(()=>beep(n,.08,'sine',.028),i*80))}
 P.Sound={click(){beep(520,.035,'square',.018)},point(){beep(760,.06,'sine',.025)},win(){sequence([520,660,880])},lose(){sequence([320,250])},line(){sequence([660,840])},beep,ensure};
})(window.PlayHub);
