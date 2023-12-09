namespace SpriteKind {
    export const guide = SpriteKind.create()
}
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    char_ninja.vx = 0
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    char_ninja.vx = 0
})
function death_char () {
    animation.runImageAnimation(
    char_ninja,
    [img`
        ..........bbbbbb................
        .......bbb444444bb..............
        .....2244444ddd444b.............
        ....244444444dddd44e............
        ...244444444444ddd4be...........
        ..244444444444444d44be..........
        .2b444444444444444d4be..........
        .2b44444444444444444bbe.........
        2bbb4444444444444444bbe.........
        2bbb4444444444444444bbe.........
        2bb4b4444444444444444bbe........
        2bb4444444444444444444be........
        2bb44444444444444444444e........
        2bbb444bbb4444444444444e........
        22bbb444bb4bb444444444be........
        .2bbbbb44bbbb44444444bbe........
        .22bbbbbbbb44bbb444444bbe.......
        ..eeebbbbbbb44bbb444444be.......
        ...eeeeebbbbbbbb44b4444be.......
        .....eeeeee222bb44bbb4bbe.......
        .......eeeee222bb44bbbbee.......
        ............e222bbbbbbbec.......
        ..............ee2bbbbeebdb......
        .................eeeeecdddb.....
        .......................cd11bbbb.
        ........................cd111dbb
        .........................b11111c
        .........................c11dd1c
        .........................cd1dbc.
        .........................cb11c..
        ..........................ccc...
        ................................
        `],
    200,
    false
    )
    controller.moveSprite(char_ninja, 0, 0)
    is_alive = false
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`lava_enemy`, function (sprite, location) {
    death_char()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    char_ninja,
    [img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d f d d f d c . 
        . . . c d b e e d d d d e e d c 
        f f . c d b e e d d c d d d d c 
        f e f . c f e e d d d c c c c c 
        f e f . . f f e e d d d d d f . 
        f e f . f e e e e f f f f f . . 
        f e f f e e e e e e e f . . . . 
        . f f e e e e f e f f e f . . . 
        . . f e e e e f e f f e f . . . 
        . . . f e f f b d f b d f . . . 
        . . . f d b b d d c d d f . . . 
        . . . f f f f f f f f f . . . . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . . f e e d f d d f d c . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d d d d e e d c 
        . . . c d b e e d d c d d d d c 
        f f . c d b e e e d d c c c c c 
        f e f . c f f e e e d d d d f . 
        f e f . f e e e e f f f f f f . 
        f e f f e e e e e e e f f f f . 
        . f f e e e e f e f d d f d d f 
        . . f e e e e f e f b d f b d f 
        . . f e f f f f f f f f f f f f 
        . . f d d c f . . . . . . . . . 
        . . f f f f . . . . . . . . . . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . f f e e e d d d d f . . 
        . . . f d d e e d d d d d d c . 
        . . . c d b e e d f d d f d c . 
        f f . c d b e e d f d d f d d c 
        f e f . c f e e d d d d e e d c 
        f e f . . f e e e d c d d d d c 
        f e f . . f f e e e d c c c f . 
        f e f . f e e e e f f f f f . . 
        . f f f e e e e e e e f . . . . 
        . . f e e e e f e e f e f f . . 
        . . f e e e f f f e e f f e f . 
        . f b f f f f f f c d d b d d f 
        . f d d c f . . f d d d c d d f 
        . . f f f . . . f f f f f f f . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . f f f e e e e e f . . . 
        . . . f d d e e e e d d d f . . 
        . . . c d b e e e d d d d d c . 
        . . . c d b e e d d d d d d c . 
        . f f . c f e e d f d d f d d c 
        f e f . . f e e d f d d f d d c 
        f e f . . f e e d d d d e e d c 
        f e f . . f f e e d c d d d f . 
        f e f . f e e e e e d f f f . . 
        . f f f e e e e e e e f . . . . 
        . . f f b e e e e e f f . . . . 
        . . f f d d c e e f f e f . . . 
        . . . . f f f c d d b d d f . . 
        . . . . . f f d d d c d d f . . 
        . . . . . . f f f f f f f . . . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d f d d f d c . 
        . . . c d b e e d d d d e e d c 
        . . . c d b e e d d c d d d d c 
        . . . . c f e e e d d c c c c c 
        . . . . . f f e e e d d d d f . 
        . . . . f e e e e f f f f f . . 
        f f . f e e e e e e f f . . . . 
        f e . f e e f e e f e e f . . . 
        f e . f e e e f e e f e e f . . 
        f e f f e f b b f b d f d b f . 
        f f f f e b d d f d d f d d f . 
        . f f f f f f f f f f f f f . . 
        `],
    200,
    false
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    animation.runImageAnimation(
    char_ninja,
    [img`
        ..........bbbbbb................
        .......bbb444444bb..............
        .....2244444ddd444b.............
        ....244444444dddd44e............
        ...244444444444ddd4be...........
        ..244444444444444d44be..........
        .2b444444444444444d4be..........
        .2b44444444444444444bbe.........
        2bbb4444444444444444bbe.........
        2bbb4444444444444444bbe.........
        2bb4b4444444444444444bbe........
        2bb4444444444444444444be........
        2bb44444444444444444444e........
        2bbb444bbb4444444444444e........
        22bbb444bb4bb444444444be........
        .2bbbbb44bbbb44444444bbe........
        .22bbbbbbbb44bbb444444bbe.......
        ..eeebbbbbbb44bbb444444be.......
        ...eeeeebbbbbbbb44b4444be.......
        .....eeeeee222bb44bbb4bbe.......
        .......eeeee222bb44bbbbee.......
        ............e222bbbbbbbec.......
        ..............ee2bbbbeebdb......
        .................eeeeecdddb.....
        .......................cd11bbbb.
        ........................cd111dbb
        .........................b11111c
        .........................c11dd1c
        .........................cd1dbc.
        .........................cb11c..
        ..........................ccc...
        ................................
        `],
    200,
    false
    )
    controller.moveSprite(char_ninja, 0, 0)
    is_alive = false
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`char_guide`, function (sprite, location) {
    char_ninja.sayText("Selecciona la bajada correcta...", 200, false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    death_char()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`ladder`, function (sprite, location) {
    if (controller.up.isPressed()) {
        char_ninja.vy = -30
    } else {
        char_ninja.vy = 250
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (char_ninja.isHittingTile(CollisionDirection.Bottom) && is_alive) {
        char_ninja.vy = -150
    }
})
function map1 () {
    is_alive = true
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffff1fffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffff1ffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffff
        fffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffff1fffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    tiles.setCurrentTilemap(tilemap`nivel1`)
    char_ninja.setPosition(10, 30)
    chest_is_closed = true
    char_ninja.ay = 300
}
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    sprite.y = 130
    sprite.vy = 0
    sprite.ay = -30
})
let chest_is_closed = false
let is_alive = false
let char_ninja: Sprite = null
function create_lava(seed: any) {
    for (let lava of tiles.getTilesByType(assets.tile`lava_enemy`)) {
        throw_lava(lava)
    }
}
function throw_lava(lava: tiles.Location) {
    pause(randint(500, 1500))
    let lava_projectile = sprites.create(img`
            . . . . . . . . . . . . . . . .
                                . . . . . . . . . . . . . . . .
                                . . . . . 4 4 4 4 4 . . . . . .
                                . . . 4 4 4 5 5 5 d 4 4 4 4 . .
                                . . 4 d 5 d 5 5 5 d d d 4 4 . .
                                . . 4 5 5 1 1 1 d d 5 5 5 4 . .
                                . 4 5 5 5 1 1 1 5 1 1 5 5 4 4 .
                                . 4 d d 1 1 5 5 5 1 1 5 5 d 4 .
                                . 4 5 5 1 1 5 1 1 5 5 d d d 4 .
                                . 2 5 5 5 d 1 1 1 5 1 1 5 5 2 .
                                . 2 d 5 5 d 1 1 1 5 1 1 5 5 2 .
                                . . 2 4 d d 5 5 5 5 d d 5 4 . .
                                . . . 2 2 4 d 5 5 d d 4 4 . . .
                                . . 2 2 2 2 2 4 4 4 2 2 2 . . .
                                . . . 2 2 4 4 4 4 4 4 2 2 . . .
                                . . . . . 2 2 2 2 2 2 . . . . .
        `, SpriteKind.Projectile)
    tiles.placeOnTile(lava_projectile, lava)
    lava_projectile.vy = -20
}
char_ninja = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . . . 
    c c c c c d d e e e f c . . . . 
    . f d d d d e e e f f . . . . . 
    . . f f f f f e e e e f . . . . 
    . . . . f f e e e e e e f . f f 
    . . . f e e f e e f e e f . e f 
    . . f e e f e e f e e e f . e f 
    . f b d f d b f b b f e f f e f 
    . f d d f d d f d d b e f f f f 
    . . f f f f f f f f f f f f f . 
    `, SpriteKind.Player)
controller.moveSprite(char_ninja, 50, 0)
map1()
let gravity = 9.8 * 30
scene.cameraFollowSprite(char_ninja)
create_lava(-20)
game.onUpdateInterval(1000, function () {
    if (!(is_alive)) {
        pause(1000)
        char_ninja.setPosition(20, 40)
        char_ninja.setImage(img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . . f e e e d d d d f . . 
            . . . . f f e e d f d d f d c . 
            . . . f d d e e d f d d f d c . 
            . . . c d b e e d d d d e e d c 
            f f . c d b e e d d c d d d d c 
            f e f . c f e e d d d c c c c c 
            f e f . . f f e e d d d d d f . 
            f e f . f e e e e f f f f f . . 
            f e f f e e e e e e e f . . . . 
            . f f e e e e f e f f e f . . . 
            . . f e e e e f e f f e f . . . 
            . . . f e f f b d f b d f . . . 
            . . . f d b b d d c d d f . . . 
            . . . f f f f f f f f f . . . . 
            `)
        is_alive = true
        controller.moveSprite(char_ninja, 50, 0)
    }
})
