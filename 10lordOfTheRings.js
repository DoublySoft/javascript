function Player(name) {
    this.name = name;
    this.pv = 100;
    this.sp = 100;

    this.heal = (player) => {
        if (this.sp >= 40) {

        } else {
            console.log(this.name + " no tiene sp");
        }
        this.sp -= 40;
        player.pv += 20;

        this.status(player);
    }

    this.damage = (player) =>{
        if (player.pv > 40) {
            player.pv -= 40;
        } else {
            player.pv = 0;
            console.log("¡" + player.name + " murió!");
        }
        this.status(player);
    }

    this.status = (player) => {
        // console.log(this);
        console.log(player);
    }
}

let gandalf = new Player("Gandalf");
let legolas = new Player("Legolas");

console.log(gandalf);
console.log(legolas);

gandalf.damage(legolas);
gandalf.heal(legolas);
gandalf.damage(legolas);
gandalf.damage(legolas);
gandalf.heal(legolas);
