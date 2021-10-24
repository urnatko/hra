input.onButtonPressed(Button.A, function () {
    lod.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    let strela: game.LedSprite = null
    let nepritel: game.LedSprite = null
    if (nepritel.get(LedSpriteProperty.Y) == strela.get(LedSpriteProperty.Y)) {
        game.addScore(1)
    }
})
input.onButtonPressed(Button.B, function () {
    lod.change(LedSpriteProperty.X, 1)
})
let lod: game.LedSprite = null
game.setScore(0)
lod = game.createSprite(randint(0, 4), 4)
basic.forever(function () {
	
})
