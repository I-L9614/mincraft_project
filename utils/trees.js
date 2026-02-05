const board = document.querySelector(".board")

export function largTreee(start, is2, high) {
    for (let i = 0; i < high; i++) {
        const startTree = document.getElementById(start)
        const endTree = document.getElementById(start + 1)
        startTree.classList = "treeRace"
        endTree.classList = "treeRace"
        start = start - 41

        // endTree.addEventListener("click",toSky(endTree))
    }
    if (is2 === true) {
        for (let k = 0; k < 2; k++) {
            for (let j = 0; j < 6; j++) {
                const down = 38
                const leave = document.getElementById(start - (down + j) + 41)
                leave.classList = "leaves"
            }
        }
        start = start - 41
    } else {
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
    const leave = document.getElementById(start)
    leave.classList = "leaves"
    start = start - 41
}

export function secondTree(start, high) {
    for (let i = 0; i < high; i++) {
        const startTree = document.getElementById(start)
        startTree.classList = "treeRace"
        start = start - 41
    }
    for (let j = 0; j < 3; j++) {
        const down = 40
        const leave = document.getElementById(start - (down + j) + 41)
        leave.classList = "leaves"
    }
    const down = 40
    const leave = document.getElementById(start - 41)
    leave.classList = "leaves"
}

export function thirdTree(start, high) {

}

