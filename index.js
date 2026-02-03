

const board = document.querySelector(".board")

for (let i = 0; i < 3000; i++) {
    const newDiv = document.createElement('div')
    newDiv.className = 'tile'

    if (i < 630) {
        newDiv.id = "sky"
    }

    if (i >= 618 && i < 661) {
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
    if (i >= 661 && i < 743) {
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

    if (i >= 743 && i < 989) {
        newDiv.id = "stone"
    }
    board.append(newDiv)
}

const footer = document.querySelector("footer")
for (let i = 0; i <= 5; i++) {
    if (i === 1) {
        const button = document.createElement("img")
        button.id = "axe"
    }
    if (i === 2) {
        const button = document.createElement("img")
        button.id = "shufle"
    }
    if (i === 3) {
        const button = document.createElement("img")
        button.id = "pick"
    }
    if (i === 4) {
        const button = document.createElement("img")
        button.id = "sword"
    }
    if (i === 5) {
        const button = document.createElement("img")
        button.id = "reset"
    }
    footer.append(button)
}

