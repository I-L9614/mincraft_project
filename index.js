import { largTreee, secondTree } from "./utils/trees.js"
import { highMonster, smallMonster } from "./utils/monsters.js"
const board = document.querySelector(".board")

const firstTreeStart = 579

const secondTreeStart = 586
function createBoard() {
    for (let i = 0; i < 3000; i++) {
        const newDiv = document.createElement('div')
        if (i < 589) {
            newDiv.classList = "sky"
            newDiv.id = i
        }

        if (i >= 589 && i < 630) {
            if (i % 1 === 0) {
                newDiv.classList = "grass2"
                newDiv.id = i
            }
            if (i % 2 === 0) {
                newDiv.classList = "grass3"
                newDiv.id = i
            }
            if (i % 3 === 0) {
                newDiv.classList = "grass4"
                newDiv.id = i
            }
            if (i % 5 === 0) {
                newDiv.classList = "grass5"
                newDiv.id = i
            }
        }
        if (i >= 630 && i < 701) {
            if (i % 1 === 0) {
                newDiv.classList = "soil1"
                newDiv.id = i
            }
            if (i % 2 === 0) {
                newDiv.classList = "soil2"
                newDiv.id = i
            }
            if (i % 3 === 0) {
                newDiv.classList = "soil3"
                newDiv.id = i
            }
            if (i % 4 === 0) {
                newDiv.classList = "soil4"
                newDiv.id = i
            }
            if (i % 5 === 0) {
                newDiv.classList = "soil5"
                newDiv.id = i
            }
        }

        if (i >= 701 && i < 943) {
            newDiv.classList = "stone"
            newDiv.id = i
        }
        board.append(newDiv)



    }
}

function click() {

}

createBoard()
largTreee(firstTreeStart, true, 4)
secondTree(secondTreeStart, 3)
largTreee(550, false, 4)
largTreee(557, false, 4)
highMonster(564,5)
highMonster(566,5)
smallMonster(569, 2)