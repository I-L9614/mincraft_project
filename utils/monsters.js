export function highMonster (location, high) {
    for (let i = 0; i < high; i++) {
        const body  = document.getElementById(location)
        body.classList = "monster-body"
        if (i === high -1) {
            const face = document.getElementById(location)
            face.classList = "monster-face"
        }
        location = location - 41

    }
}

export function smallMonster(location,high) {
    for (let i = 0; i < high; i++) {
        if (i === 0) {
            const firstLeg = document.getElementById(location - 1)
            const secondLeg = document.getElementById(location + 1)
            firstLeg.classList = "monster-body"
            secondLeg.classList = "monster-body"
            location = location - 41
        }
        const body  = document.getElementById(location)
        body.classList = "monster-body"
        location = location - 41
        if (i === high - 1) {
            const face = document.getElementById(location)
            face.classList = "monster-face"
        }
    }
}