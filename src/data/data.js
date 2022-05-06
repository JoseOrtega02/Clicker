import slime01 from "../assets/slime01.png"
import enemigo2 from "../assets/enemigoSimple01.png"
import enemigo3 from "../assets/ghost01.png"

import sword from "../assets/espada01.png"
import chest from "../assets/cofre-01.png"
import axe from "../assets/axe01.png"


let enemyArr = [
    {img: slime01,hp: 200},
    {img: enemigo2,hp: 300},
    {img: enemigo3,hp: 500}
];

let storeArr = [
    {name: "sword",price: 100, statDMG: 1,statGLD:1,img: sword},
    {name: "chest",price: 200, statDMG: 0,statGLD:2,img: chest},
    {name: "axe",price: 400, statDMG: 2,statGLD:0,img: axe}
]

let data = {enemyArr, storeArr}

export default  data