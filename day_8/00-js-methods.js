// INICIALIZAÇÃO DO JOGO BANCO IMOBILIÁRIO
const squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];

let dice;

let player1 = {
  name: 'Joaquim',
  color: 'red',
  position: 0,
  cash: 1000,
  move() {
    dice = Math.floor(Math.random() * 6) + 1;
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position];

    if (this.cash < 0) {
      console.log(`Game over para o jogador ${this.name}`);
    }
  },
  displayInfo() {
    console.log(`${this.name} está na posição ${this.position} e tem $${this.cash}`)
  }
};
let player2 = {
  name: 'Maxence',
  color: 'blue',
  position: 0,
  cash: 1000,
  move() {
    dice = Math.floor(Math.random() * 6) + 1;
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position];

    if (this.cash < 0) {
      console.log(`Game over para o jogador ${this.name}`);
    }
  },
  displayInfo() {
    console.log(`${this.name} está na posição ${this.position} e tem $${this.cash}`)
  }
};
let player3 = {
  name: 'Mostafa',
  color: 'black',
  position: 0,
  cash: 1000,
  move() {
    dice = Math.floor(Math.random() * 6) + 1;
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position];

    if (this.cash < 0) {
      console.log(`Game over para o jogador ${this.name}`);
    }
  },
  displayInfo() {
    console.log(`${this.name} está na posição ${this.position} e tem $${this.cash}`)
  }
};

// turno 1
// dado é um número aleatório entre 1 a 6
// Math.random() -> 0 até 0.999
// x6 -> 0 até 5.999
// Math.round() -> 0 / 0.49>0 / 0.5>1<1.49 / 5.49>5 / 5.5>6
// Math.floor() -> 0<0.99 / 1<1.99 / 2<2.99 / ... / 5<5.99 -> 0, 1, 2, 3, 4, 5
// +1
// const random = Math.random();
// console.log(random);
// const r6 = random*6;
// console.log(r6);
// const arredParaBaixo = Math.floor(r6);
// console.log(arredParaBaixo);
// dice = arredParaBaixo + 1;
// console.log(dice);

// dice = Math.floor(Math.random() * 6) + 1;
// exemplo de sequencia de turnos
// (+3) 3 / 16 = 0 | 3
// (+5) 8 / 16 = 0 | 8
// (+4) 12 / 16 = 0 | 12
// (+6) 18 / 16 = 1 | 2

// dice = Math.floor(Math.random() * 6) + 1;
// player1.position = (player1.position + dice) % squares.length;
// player1.cash += squares[player1.position];

// if (player1.cash < 0) {
//   console.log(`Game over para o jogador ${player1.name}`);
// }

// player 2
// dice = Math.floor(Math.random() * 6) + 1;
// player2.position = (player2.position + dice) % squares.length;
// player2.cash += squares[player2.position];

// if (player2.cash < 0) {
//   console.log(`Game over para o jogador ${player2.name}`);
// }

// player 3
// dice = Math.floor(Math.random() * 6) + 1;
// player3.position = (player3.position + dice) % squares.length;
// player3.cash += squares[player3.position];

// if (player3.cash < 0) {
//   console.log(`Game over para o jogador ${player3.name}`);
// }

// turno 1 com métodos dentro do próprio obj
player1.move();
player2.move();
player3.move();

// fim do turno 1
player1.displayInfo();
player2.displayInfo();
player3.displayInfo();

