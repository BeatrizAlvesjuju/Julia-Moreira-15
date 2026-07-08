
function u(){const d=new Date('2026-09-27T12:00:00')-new Date();const e=document.getElementById('contador');if(d<0){e.textContent='Chegou o grande dia!';return;}const dias=Math.floor(d/86400000);e.textContent='Faltam '+dias+' dias';}u();setInterval(u,1000);
