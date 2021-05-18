// Descrizione:
// Rifare l'esercizio dello slider come fatto assieme in classe.
// Bonus:
// Gestire il cambio dell'immagine al click sui pallini in basso (nav);
// Applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente.

// istanza vue
var app = new Vue({
  // elemento html vue
  el: '#root',
  data: {
    immagini:
    [
      "https://img.redbull.com/images/c_crop,w_1999,h_1333,x_1,y_0,f_auto,q_auto/c_scale,w_1500/redbullcom/2019/11/10/9dad23f6-2e82-45d8-a39c-232a7d2e611f/league-of-legends-world-championship-2019-finals-crowd",
      "https://esports.gazzetta.it/wp-content/uploads/2020/05/23/22/lol_worldchampionship.jpg",
      "https://www.dexerto.com/wp-content/uploads/thumbnails/_thumbnailLarge/lol-worlds-2018-bracket-draw.jpg",
      "https://www.powned.it/wp-content/uploads/2019/12/mondiale-lol.jpg",
      "https://i.ytimg.com/vi/mP3fGkpmVM0/maxresdefault.jpg"
    ],
    indiceImmagini: 0,
  },

  mounted: function(){
    let self = this;
    setInterval(function() {
    
      self.indiceImmagini++;
      
      if (self.indiceImmagini == self.immagini.length) {
        self.indiceImmagini = 0;
      }
    }, 3000);
  },
    
  


  
// funzioni
  methods: {
    avanti: function () {

      this.indiceImmagini++;
      console.log(this.indiceImmagini);

      if (this.indiceImmagini == this.immagini.length) {
        this.indiceImmagini = 0;
      }
       
    },
  
    // pallinoCliccato: function(){
    //   this.indiceImmagini = ;
    //   console.log(this.indiceImmagini);
    // },

    indietro: function () {
      this.indiceImmagini--;
      if (this.indiceImmagini < 0) {
        this.indiceImmagini = this.immagini.length - 1;
      }
      console.log(this.indiceImmagini);
    },
      

  }
})