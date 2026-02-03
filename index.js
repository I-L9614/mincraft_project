const board = document.querySelector(".board")

for (let i = 0; i < 3000; i++) {
    const newDiv = document.createElement('div')
    newDiv.className = 'tile'

    if (i < 630) {
        newDiv.id = "sky"
    }

    if (i >= 630 && i < 671) {
        if (i % 1 === 0) {
            newDiv.id = "grass2"
        }
        if (i % 2 === 0) {
            newDiv.id = "grass3"
        }
        if (i % 3 === 0) {
            newDiv.id = "grass4"
        }
        if (i % 5 === 0) {
            newDiv.id = "grass5"
        }
    }
    if (i >= 671 && i < 743) {
        if (i % 1 === 0) {
            newDiv.id = "soil1"
        }
        if (i % 2 === 0) {
            newDiv.id = "soil2"
        }
        if (i % 3 === 0) {
            newDiv.id = "soil3"
        }
        if (i % 4 === 0) {
            newDiv.id = "soil4"
        }
        if (i % 5 === 0) {
            newDiv.id = "soil5"
        }
    }

    if (i >= 743 && i < 980) {
        newDiv.id = "stone"
    }



    board.append(newDiv)

}

const footer = document.querySelector("footer")


