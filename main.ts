namespace SpriteKind {
    export const apple = SpriteKind.create()
    export const StatusBar = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    tcc = 100
})
function doSomething_tunoghu () {
    if (tcc == -20) {
        mySprite.x += 2
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 6 6 6 6 6 6 6 6 6 . . . 
            . 6 6 6 6 6 6 6 6 6 6 f 6 . . 2 
            6 6 6 6 6 6 6 6 6 6 6 6 6 2 2 . 
            . 6 6 6 6 6 6 6 6 6 6 6 6 . . 2 
            . . . . 6 6 6 6 6 6 6 6 6 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        true
        )
    } else if (tcc == 20) {
        mySprite.x += -2
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 6 6 6 6 6 6 6 6 6 . . . . 
            2 . . 6 f 6 6 6 6 6 6 6 6 6 6 . 
            . 2 2 6 6 6 6 6 6 6 6 6 6 6 6 6 
            2 . . 6 6 6 6 6 6 6 6 6 6 6 6 . 
            . . . 6 6 6 6 6 6 6 6 6 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        500,
        true
        )
    } else if (tcc == 100) {
        mySprite.y += -2
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . 2 . 2 . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . . 6 6 6 6 6 . . . . . . 
            . . . . . 6 f 6 6 6 . . . . . . 
            . . . . . 6 6 6 6 6 . . . . . . 
            . . . . . 6 6 6 6 6 . . . . . . 
            . . . . . 6 6 6 6 6 . . . . . . 
            . . . . . 6 6 6 6 6 . . . . . . 
            . . . . . 6 6 6 6 6 . . . . . . 
            . . . . . 6 6 6 6 6 . . . . . . 
            . . . . . 6 6 6 6 6 . . . . . . 
            . . . . . . 6 6 6 . . . . . . . 
            . . . . . . 6 6 6 . . . . . . . 
            . . . . . . 6 6 6 . . . . . . . 
            . . . . . . . 6 . . . . . . . . 
            `],
        500,
        true
        )
    } else if (tcc == 0) {
        mySprite.y += 2
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . 6 . . . . . . . 
            . . . . . . . 6 6 6 . . . . . . 
            . . . . . . . 6 6 6 . . . . . . 
            . . . . . . . 6 6 6 . . . . . . 
            . . . . . . 6 6 6 6 6 . . . . . 
            . . . . . . 6 6 6 6 6 . . . . . 
            . . . . . . 6 6 6 6 6 . . . . . 
            . . . . . . 6 6 6 6 6 . . . . . 
            . . . . . . 6 6 6 6 6 . . . . . 
            . . . . . . 6 6 6 6 6 . . . . . 
            . . . . . . 6 6 6 6 6 . . . . . 
            . . . . . . 6 6 6 f 6 . . . . . 
            . . . . . . 6 6 6 6 6 . . . . . 
            . . . . . . . . 2 . . . . . . . 
            . . . . . . . . 2 . . . . . . . 
            . . . . . . . 2 . 2 . . . . . . 
            `],
        500,
        true
        )
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    stop += 100
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    tcc = 20
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    tcc = -20
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.apple, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    tcc = 0
})
let mySprite2: Sprite = null
let tcc = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . 
    . . . . . 
    . . . . . 
    . . . . . 
    . . . . . 
    . . . . . 
    . . . . . 
    . . . . . 
    . . . . . 
    . . . . . 
    . . . . . 
    . . . . . 
    `, SpriteKind.Player)
mySprite.setStayInScreen(true)
tcc = 0
let stop = 0
forever(function () {
    doSomething_tunoghu()
})
game.onUpdateInterval(500, function () {
    mySprite2 = sprites.create(img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `, SpriteKind.apple)
    mySprite2.setPosition(randint(10, 150), randint(10, 110))
    scaling.scaleByPixels(mySprite2, 10, ScaleDirection.Horizontally, ScaleAnchor.Middle)
    scaling.scaleByPixels(mySprite2, 10, ScaleDirection.Vertically, ScaleAnchor.Middle)
})
