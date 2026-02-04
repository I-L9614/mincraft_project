const board = document.querySelector(".board")

const firstTreeStart = 579

const secondTree = 586
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

function putTreee(start, is2, high, is2leaves) {
    for (let i = 0; i < high; i++) {
        if (is2 === true) {
            const startTree = document.getElementById(start)
            const endTree = document.getElementById(start + 1)
            startTree.classList = "treeRace"
            endTree.classList = "treeRace"
            start = start - 41
        } else {
            const tree = document.getElementById(start)
            tree.classList = "treeRace"
            start = start - 41
        }
    }
    if (is2leaves === true) {
        for (let k = 0; k < 2; k++) {
            for (let j = 0; j < 6; j++) {
                const down = 38
                const leave = document.getElementById(start - (down + j) + 41)
                leave.classList = "leaves"
            }
            start = start - 41
        }
        for (let j = 0; j < 4; j++) {
            const down = 39
            const leave = document.getElementById(start - (down + j) + 41)
            leave.classList = "leaves"
        }
        start = start - 41
        for (let j = 0; j < 2; j++) {
            const down = 40
            const leave = document.getElementById(start - (down + j) + 41)
            leave.classList = "leaves"
        }
    } else {
        for (let j = 0; j < 3; j++) {
                const down = 40
                const leave = document.getElementById(start - (down + j) + 41)
                leave.classList = "leaves"
            }
            start = start - 41
        }
        
        const leave = document.getElementById(start)
        leave.classList = "leaves"
        

}

createBoard()
putTreee(firstTreeStart, true, 4, true)

putTreee(secondTree, false, 3, false)

