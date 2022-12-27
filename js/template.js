let a = new Vue({
  el: ".main",
  data: {
    showMain: false,
    showSocial: false,
    showAchivments: false,
    showQuestions: false,
    showResults: false,
    number: 0,
    score: {
      zerg: 0,
      primal: 0,
      protoss: 0,
      taldarim: 0,
      terra: 0,
    },
    totalGame: localStorage.getItem("sc2TotalGame")
      ? JSON.parse(localStorage.getItem(sc2TotalGame))
      : {
          zerg: 0,
          primal: 0,
          protoss: 0,
          taldarim: 0,
          terra: 0,
          infested: 0,
          hybrid: 0,
        },
    totalGAmes: localStorage.getItem("sc2TotalGame")
      ? localStorage.getItem("sc2TotalGame")
      : 0,
    questions: questions,
    results: results,
    resultRace: "infested",
  },
  methods: {
    goToMain() {
      this.showMain = true;
      this.showSocial = false;
      this.showAchivments = false;
      this.showQuestions = false;
      this.showResults = false;
    },
    goToSocial() {
      this.showMain = false;
      this.showSocial = true;
      this.showAchivments = false;
      this.showQuestions = false;
      this.showResults = false;
    },
    goToAchivments() {
        if(this.totalGAmes > 0 ) {
            this.showMain = false;
            this.showSocial = false;
            this.showAchivments = true;
            this.showQuestions = false;
            this.showResults = false;
        } 
        else{
            this.toGoQuestions()
        }
    },
    goToQuestions() {
        this.showMain = false;
        this.showSocial = false;
        this.showAchivments = false;
        this.showQuestions = true;
        this.showResults = false;
        // score = {
        //     zerg: 0,
        //     primal: 0,
        //     protoss: 0,
        //     taldarim: 0,
        //     terra: 0,
        //   }
      },
      goToResult(race) {
        this.showMain = false;
        this.showSocial = false;
        this.showAchivments = false;
        this.showQuestions = false;
        this.showResults = true;
        this.results = race
      }
  },
});
