window.PlayHub=window.PlayHub||{};
(function(P){
 function apply(){const s=P.Storage.get('settings')||{};document.body.classList.toggle('dark',s.theme==='dark');document.body.classList.toggle('reduce-motion',!!s.reducedMotion);}
 function setTheme(theme){P.Storage.set('settings.theme',theme);apply();}
 function toggle(k){if(k==='theme'){setTheme(P.Storage.get('settings.theme')==='dark'?'light':'dark')}else{P.Storage.set('settings.'+k,!P.Storage.get('settings.'+k));apply();}}
 window.addEventListener('playhub:state',apply); P.Settings={apply,setTheme,toggle};
})(window.PlayHub);
