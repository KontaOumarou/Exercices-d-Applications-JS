// Les variables dont on a besoin 
var sp, btn_start, btn_stop, btn_reset, t, ms, s, mn, h;
//La fonction pour initialiser leds variables quand la page se chargee
window.addEventListener('load',() => {
      sp = document.getElementsByTagName('span');
      btn_start = document.getElementById('start');
      btn_stop = document.getElementById('stop');
      btn_reset = document.getElementById('reset');
      t;
      ms = 0; s=0; mn=0;h=0
}  );

// Mettre en place le compteur
function update_chrono(){
      ms+=1;
      if(ms == 10){
            ms=1;
            s+=1;
      }
      if(s == 60){
            s=0;
            mn+=1;
      }
      if(mn == 60){
            mn=0;
            h+=1;
      }
      // Insertion des valeurs dans les spans
      sp[0].innerHTML = h +"h";
      sp[1].innerHTML = mn +"min";
      sp[2].innerHTML = s +"s";
      sp[3].innerHTML = ms +"ms";
};
function Start(){
      //Cette ligne de code execute la function update_chrono() toutes les100ms
      t = setInterval(update_chrono, 100);
      btn_start.disabled = true;
};
// Stopper le chrono
function Stop(){
      clearInterval(t); // Suppression de l'intervale t;
      btn_start.disabled = false;

};
function Reset(){
      sp[0].innerHTML = 0 +"h";
      sp[1].innerHTML = 0 +"min";
      sp[2].innerHTML = 0 +"s";
      sp[3].innerHTML = 0 +"ms";
      clearInterval(t);
      btn_start.disabled = false;
}


//alert('test reussi')