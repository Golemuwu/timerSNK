
var snk = 73;
var nAm = 40;
var sbg = 13;
var mer = 13+ 13 + 14;
var atp = 8 + 10 + 10;
cantidadDecaps = snk + nAm + sbg+ mer + atp;

inicioPor = 'Mar 14 2021 00:00:00 GMT-0300';
inicioCap = 'Apr 5 2021 21:00:00 GMT-0300';

var cant = false;

const getRemainingTime = (deadline,ini) => {
    let now = (cant)? new Date(inicioCap) : new Date();
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24));

        totalTime = new Date('Oct 27 2024 00:00:00 GMT-0300').getTime()-(new Date(ini).getTime())+1000;
  
    return {
      remainSeconds,
      remainMinutes,
      remainHours,
      remainDays,
      remainTime,
      totalTime
    }
  };
  
  const countdown = (deadline,elem,finalMessage) => {
    const el = document.getElementById(elem);
  
    const timerUpdate = setInterval( () => {
      let t = getRemainingTime(deadline,inicioPor);

      var porcentaje = (100- 100*(t.remainTime*1000 /t.totalTime));

      el.innerHTML = `${t.remainDays}d:${t.remainHours}h:${t.remainMinutes}m:${t.remainSeconds}s`+"<br>"+("" +porcentaje).substr(0,9)+ "%";

      el.innerHTML += "<br>" + (""+(100-porcentaje)/porcentaje*100).substr(0,9)+ "%";

      let t2 = getRemainingTime(deadline,inicioCap);

      var cap = Math.floor(cantidadDecaps-(t2.remainTime * 1000 /t2.totalTime) * cantidadDecaps);

      el.innerHTML += "<br><br> Ver hasta el cap: "+cap+"<br><br>";

      var cop = (cantidadDecaps-(t2.remainTime * 1000 /t2.totalTime) * cantidadDecaps);

      var owo = (cantidadDecaps-cap-1)/cantidadDecaps * t2.totalTime *10;

      var awa = Math.floor(t.remainTime*10000 - owo)/10000;

      //el.innerHTML += "<br><br> Ver hasta el cap: "+cop;
      //el.innerHTML += "<br><br> Ver hasta el cap: "+owo+"<br>"+t.remainTime*10000+"<br>"+awa+"<br>";

      remainSeconds = ('0' + Math.floor(awa % 60)).slice(-2)
      remainMinutes = ('0' + Math.floor(awa / 60 % 60)).slice(-2)
      remainHours = ('0' + Math.floor(awa / 3600 % 24)).slice(-2)
      remainDays = Math.floor(awa / (3600 * 24))

      el.innerHTML += "Siguiente cap en: "+`${remainDays}d:${remainHours}h:${remainMinutes}m:${remainSeconds}s`;

      

     



      

      

      if(t.remainTime <= 1) {
        clearInterval(timerUpdate);
        el.innerHTML = finalMessage;
      }
  
    }, 1000)
  };
  
  countdown('Oct 27 2024 00:00:00 GMT-0300', 'clock', 'UwU');
  
