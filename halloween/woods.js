class light {
  constructor(big){
    this.big = big;
  }
};

class entities {
  constructor(name, description, fear) {
    this.name = name;
    this.fear = fear;
    this.description = description;
  }
};

class bright_shadow extends entities {
  constructor(name, description, fear, speed) {
    super(name, description, fear);
    this.speed = speed;
  }
};

class safety {
  constructor(name, description, safe) {
    this.name = name;
    this.safe = safe;
    this.description = description;
  }
}

var SpookyWoods = [
  whisp = new light(100),
  floater = bright_shadow("glowing shadow", "A fleeting shadow that somehow glows with unearthly darkness", 2, 10),
  tree = new safety("ancient oak", "its roots create an alcove for you to hide in", 2)
];
