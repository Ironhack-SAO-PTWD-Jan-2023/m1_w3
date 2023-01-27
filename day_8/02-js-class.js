class Animal {
  constructor(name, mainColor, sound){
    this.name = name;
    this.mainColor = mainColor;
    this.sound = sound;
  }
  scream(intensity) {
    console.log(`${this.sound}${'!'.repeat(intensity)}`);
  }
};

// const myAnimal = new Animal('Chita', 'Preto', 'Uh uh ah ah');
// console.log(myAnimal);

class Cat extends Animal {
  constructor(name, mainColor, sound, numberOfLegs) {
    super(name, mainColor, sound);
    this.numberOfLegs = numberOfLegs;
  }
}

const myCat = new Cat('Otacílio', 'Cinza', 'Miau', 4);
myCat.scream(2);
// console.log(myCat);

class Chameleon extends Animal {
  constructor(name) {
    super(name, 'green', '...');
  };

  changeColor(newColor) {
    this.mainColor = newColor;
  };

  scream() {
    console.log('>_>')
  };
}

const myChameleon = new Chameleon('Curintia');
myChameleon.scream(10);
myChameleon.changeColor('purple');
console.log(myChameleon);