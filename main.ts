input.onButtonPressed(Button.A, function () {
    lod.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    if (strela.isTouching(nepritel)) {
        game.addScore(1)
    } else {
        for (let index = 0; index < 4; index++) {
            strela.change(LedSpriteProperty.Y, -1)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    lod.change(LedSpriteProperty.X, 1)
})
let nepritel: game.LedSprite = null
let strela: game.LedSprite = null
let lod: game.LedSprite = null
game.setScore(0)
lod = game.createSprite(randint(0, 4), 4)
strela = lod
nepritel = game.createSprite(randint(0, 4), 0)
basic.forever(function () {
    if (strela.isTouching(nepritel)) {
        game.gameOver()
    } else {
        nepritel.change(LedSpriteProperty.Y, 1)
        nepritel = game.createSprite(randint(0, 4), 0)
    }
})
