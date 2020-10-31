class light {
  constructor(big){
    this.big = big;
  }
};

class entities {
  constructor(name, fear){
    this.name = name;
    this.fear = fear;
  }
};

class bright_shadow extends entities {
  constructor(name, fear, speed) {
    super(name, fear);
    this.speed = speed;
  }
};

var SpookyWoods = [
  whisp = new light(100),
  floater = bright_shadow("glowing shadow", 2, 10)
];
