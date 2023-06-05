// number towers
let n = 1;
// height towers
let m = 4;

class Tower {
    constructor(m)
    {
        this.height = m;
    }
    maxReduce() {
        let canReduce = false;
        let y = this.height;
        for (let x = 1; x < y; x++) {
            console.log(`y:${y}`);
            console.log(`x:${x}`);
            if (y % x == 0) {
                canReduce = true;
                this.height = x;
                console.log(`height:${this.height}`);
                break;
            }
        }
        return canReduce;
    }
}

// let towers = new Array(n).fill(new Tower(m));
let towers = [];
for(let i = 0; i < n; i++)
    towers.push(new Tower(m));

let player1 = 1;
let player2 = 2;

let canGameContinue = true;
let currentPlayer = null;

console.log(towers);

while(canGameContinue)
{
    if(currentPlayer == null)
        currentPlayer = player1;
    else
        currentPlayer = (currentPlayer == player1) ? player2: player1;

    console.log(`Current player: ${currentPlayer}`);

    let canReduce = false;

    for(let t of towers)
    {
        canReduce = t.maxReduce();
        
        if(canReduce)
        {
            console.log(`New height: ${t.height}`);
            break;
        }
    }

    towers.sort((a, b) => {
        if (a.height < b.height)
            return 1;
        else if (a.height > b.height)
            return -1;
        else
            return 0;
    });

    console.log(towers);

    canGameContinue = towers[0].height > 1;
    
    console.log(`Can game continue: ${canGameContinue}`);
}

console.log(currentPlayer);