(function (){
  const elt_heure = document.getElementById('heure');
  const elt_date = document.getElementById('date');

  function format(n){
    if(n < 10) {
      return '0' + n;
    }
    return n;
  }

  function majHeure() {
    let d = new Date();
    let time = format(d.getHours()) + ':' + format(d.getMinutes()) + ':' + format(d.getSeconds());
    let date = format(d.getDate()) + '/' + (format(d.getMonth()+1)) + '/' + format(d.getFullYear());
    elt_heure.innerHTML = time;
    elt_date.innerHTML = date;
  }

  setInterval(majHeure, 1000);
})();
