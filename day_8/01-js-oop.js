const squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];

class Player {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.position = 0;
    this.cash = 1000;
  };

  move() {
    const dice = Math.floor(Math.random() * 6) + 1;
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position];

    if (this.cash < 0) {
      console.log(`Game over para o jogador ${this.name}`);
    }
  };

  displayInfo() {
    console.log(`${this.name} está na posição ${this.position} e tem $${this.cash}`)
  };
}

// criando jogadores
const player1 = new Player('Matheus', 'green');
const player2 = new Player('Bruno', 'brown');
const player3 = new Player('Lucas', 'yellow');
// const player4 = new Player(); // sem passar argumentos, fica como undefined

// turno 1
player1.move();
player2.move();
player3.move();
// player4.move()

// fim do turno 1
player1.displayInfo();
player2.displayInfo();
player3.displayInfo();
// player4.displayInfo()

// turno 2
player1.move();
player2.move();
player3.move();
// player4.move()

// fim do turno 2
player1.displayInfo();
player2.displayInfo();
player3.displayInfo();
// player4.displayInfo()
