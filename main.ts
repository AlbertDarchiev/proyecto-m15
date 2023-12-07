controller.right.onEvent(ControllerButtonEvent.Released, function () {
    char_ninja.vx = 0
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    char_ninja.vx = 0
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
scene.onOverlapTile(SpriteKind.Player, assets.tile`lava1`, function (sprite, location) {
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
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    sprite.y = 130
    sprite.vy = 0
    sprite.ay = -30
})
let char_ninja: Sprite = null
let is_alive = false
is_alive = true
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
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999669999999999999999999999999999999999999966999999999999999999999999999999999999996699999999999999999999999999999999999999669
    9999999999999999999999999999999999999669999999999999999999999999999999999999966999999999999999999999999999999999999996699999999999999999999999999999999999999669
    9999999999999999999999999999999999999676999999999999999999999999999999999999967699999999999999999999999999999999999996769999999999999999999999999999999999999676
    9999999999966999999999999999999999999676999999999996699999999999999999999999967699999999999669999999999999999999999996769999999999966999999999999999999999999676
    9999999999967699999999999999999996699676999999999996769999999999999999999669967699999999999676999999999999999999966996769999999999967699999999999999999996699676
    9996996669996769999966999999996696769676999699666999676999996699999999669676967699969966699967699999669999999966967696769996996669996769999966999999996696769676
    9966999676996776999676966999967696769676996699967699677699967696699996769676967699669996769967769996769669999676967696769966999676996776999676966999967696769676
    6676999967699676999676667699677696776677667699996769967699967666769967769677667766769999676996769996766676996776967766776676999967699676999676667699677696776677
    6676669996769677696776667769676696676677667666999676967769677666776967669667667766766699967696776967766677696766966766776676669996769677696776667769676696676677
    6776769996776667696766666766776666677677677676999677666769676666676677666667767767767699967766676967666667667766666776776776769996776667696766666766776666677677
    6766776996667767667766666776766666677677676677699666776766776666677676666667767767667769966677676677666667767666666776776766776996667767667766666776766666677677
    7766676966677667667667766676766776667677776667696667766766766776667676677666767777666769666776676676677666767667766676777766676966677667667667766676766776667677
    7766677666776667777666776677767766667777776667766677666777766677667776776666777777666776667766677776667766777677666677777766677666776667777666776677767766667777
    7666667666776767777666676677667666767777766666766677676777766667667766766676777776666676667767677776666766776676667677777666667666776767777666676677667666767777
    7667667767766777776677677677677667766777766766776776677777667767767767766776677776676677677667777766776776776776677667777667667767766777776677677677677667766777
    7667767767766777776776667677677667666777766776776776677777677666767767766766677776677677677667777767766676776776676667777667767767766777776776667677677667666777
    7666767767666777676766667b776776b766677b7666767767666777676766667b776776b766677b7666767767666777676766667b776776b766677b7666767767666777676766667b776776b7666777
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbebbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbbbebbbbbbbbbbbbbbbbbbebbbbbbbbbb
    bbbeeeeebbbbbbbbbbbebbbeeeebbbbbbbbebbbbbbbeeeeebbbbbbbbbbbebbbeeeebbbbbbbbebbbbbbbeeeeebbbbbbbbbbbebbbeeeebbbbbbbbebbbbbbbeeeeebbbbbbbbbbbebbbeeeebbbbbbbbebbbb
    beeeebeeeebbbbeebbbbbeeeeeeeebbeebbbbbebbeeeebeeeebbbbeebbbbbeeeeeeeebbeebbbbbebbeeeebeeeebbbbeebbbbbeeeeeeeebbeebbbbbebbeeeebeeeebbbbeebbbbbeeeeeeeebbeebbbbbeb
    eeeeeeeeeeebbbeebbbbeebeeeeeeebeebbbbbbbeeeeeeeeeeebbbeebbbbeebeeeeeeebeebbbbbbbeeeeeeeeeeebbbeebbbbeebeeeeeeebeebbbbbbbeeeeeeeeeeebbbeebbbbeebeeeeeeebeebbbbbbb
    ebbeeeeeeeeebbbbbbbeeeeeeeeeeeebbbbbbbbeebbeeeeeeeeebbbbbbbeeeeeeeeeeeebbbbbbbbeebbeeeeeeeeebbbbbbbeeeeeeeeeeeebbbbbbbbeebbeeeeeeeeebbbbbbbeeeeeeeeeeeebbbbbbbbe
    ebbeeeeeeeeeeebbbeeeeeeeeeebbeeeebbbbeeeebbeeeeeeeeeeebbbeeeeeeeeeebbeeeebbbbeeeebbeeeeeeeeeeebbbeeeeeeeeeebbeeeebbbbeeeebbeeeeeeeeeeebbbeeeeeeeeeebbeeeebbbbeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeebbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeebbeeeeeeeeeee
    eeeeeeeeeebbeeeeeebbeeeeeeeeeeebeeeeeebeeeeeeeeeeebbeeeeeebbeeeeeeeeeeebeeeeeebeeeeeeeeeeebbeeeeeebbeeeeeeeeeeebeeeeeebeeeeeeeeeeebbeeeeeebbeeeeeeeeeeebeeeeeebe
    eeeeeeeeeebbeeeeeebbeeeeeeeeeeeeeebbeeeeeeeeeeeeeebbeeeeeebbeeeeeeeeeeeeeebbeeeeeeeeeeeeeebbeeeeeebbeeeeeeeeeeeeeebbeeeeeeeeeeeeeebbeeeeeebbeeeeeeeeeeeeeebbeeee
    eeeeeeeeeeeeeebeeeeeeeeeeeeeeeeeeebbeeeeeeeeeeeeeeeeeebeeeeeeeeeeeeeeeeeeebbeeeeeeeeeeeeeeeeeebeeeeeeeeeeeeeeeeeeebbeeeeeeeeeeeeeeeeeebeeeeeeeeeeeeeeeeeeebbeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeefdbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeee
    eeeeeeeeffbddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefdbfeeeeeeeeeeeeeeeeeeee
    eeeeeeeefddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffbddfeeeeeeeeeeeeeeeeeeee
    eeeeeeeefbdddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddddffeeeeeeeeeeeeeeeeeee
    eeeeeeeeffffbdffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbdddbffeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeffddfffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffddffeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeffbdddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffddffeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeffddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffddffeeeeeeeeeeeeeee
    eeeeeeeeeeeeeefddbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffdbffffeeeeeeeeeeee
    eeeeeeeeeeeeeefbdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffdddbfeeeeeeeeeeee
    eeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddddfeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddbffeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbdfeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeffffffffffffddddddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeefffddddddddddddffddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeffddddddddffffdddffdddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeffdddfffddfffffdddddddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeffdddfffffdffffddddddbdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeffdddffffffddddddddbfdfdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeefddddfffffdddddddfdffdfdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeefdddddfffddddfffdffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeefdddddddddffffefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeffdddbbbbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeefffffbddddbbffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeefdffefdddddddddffffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeefddfffddddddddddffddddfdfdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeefffbbdfffdddddddddddddddbdbdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeefffddfffffeffddddddddddddddddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeefdbbdddfbfeeffffddddddffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeefddbbfffdfeeeeeffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeffffdddfefdffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeefbbfffffffddffeeeeffffeeeeefffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeffbbbfffdbdddffffefddbfffffbdddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeefffffdfdbbdddddfefdddddddbbbbddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeffbbbfdbddbbbffffefffffdddbddbfdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeefbbfffdbbdddffffffeeeeffffbbbdfffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeefffffbddbbdddddddfeeeeeeeffdbdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefddbffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeefbbfdbbddbbfffffffeeeeeeffddfdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffddddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeefbffdbbbdddddddfeeeeeeeefddffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffbdddbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeffffdddbbfffffffeeeeeeeeffffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffddfffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeffdffdddfeeeeeeeeeeeeeeeeeeffdffdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeffddffffffeeeeeeeeeeeeeeeeeefddffdffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeefddbffffeeeeeeeeeefffffffeeffddffdbfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffffbdffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeffbbfddfeeeeeeeeeefddbbdffefddfffddfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefbdddffeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eefeeeeeeeeefdddbbffeeeeeeeeffddbdddfefdffffbdfeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeefddddfeeeeeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeefefffbbddfeeeeeeeefddfffddfffffeffbffeeefeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeefeffbddfeeeeeeeeeeefeeeeeeeeeeeeeeeeeeeefeeeeeeeeeeeeeeeeeefeeeeeeeeee
    eeefffffeeeeeefdddbffeeffffffddfeffddfffeefdbfffeeeeeeeeeeefeeeffffeeeeeeeefeeeeeeefffffeeeeeefdbfefeeeffffeeeeeeeefeeeeeeefffffeeeeefffffefeeeffffeeeeeeeefeeee
    effffeffffeeeefdfbbdfffffffbddfffeffdffeeffddfffffeeeeffeeeeeffffffffeeffeeeeefeeffffeffffeeeeffffeeeffffffffeeffeeeeefeeffffeffffeeefbdbfeeeffffffffeeffeeeeefe
    fffffffffffeeefffbdbffddddffbdfffeefffeefffbdffffffeeeffeeeeffefffffffeffeeeeeeefffffffffffeeeffeeeeffefffffffeffeeeeeeeffffffffffffffdddfeeffefffffffeffeeeeeee
    feefffffffffeeeefddffbdffddfbbfeeeeeeeefffdbbfffffffeeeeeeeffffffffffffeeeeeeeeffeefffffffffeeeeeeeffffffffffffeeeeeeeeffeefffffffffbdddbffffffffffffffeeeeeeeef
    feefffffffffffeefffffddfffdefffffeeeeffffbddffffffffffeeeffffffffffeeffffeeeeffffeefffffffffffeeeffffffffffeeffffeeeeffffeefffffffffddddddbffffffffeeffffeeeefff
    fffffffffffffffffffffdddffdddfffffffffffdbbdfffffffffffffffffffbdbfeeffffffffffffffffffffffffffffffffffffffeefffffffffffffffffffffffbddbddddbfffffffefffffffffff
    ffffffffffeeffffffeefffddddddffffffffdbddfffffffffeeffffffeefffdddfffffeffffffefffffffffffeeffffffeefffffffffffeffffffefffffffffffeffffffbddddbbddbffffeffffffef
    ffffffffffeeffffffeefffddddddfffddbbddbdffffffffffeeffffffeefffbdddbffffffeeffffffffffffffeeffffffeeffffffffffffffeeffffffffffffffeefffffffbdddddddfffffffeeffff
    ffffffffffffffefffffffffdddddffddfbddfffffffffffffffffeffffffbddddddffffffeeffffffffffffffffffefffffffffffffffffffeeffffffffffffffffffefffffffdddddfffffffeeffff
    fffffffffffffffffffffffffdddfffffffffffffffffffffffffffffffbddddbddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdddbffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffbddbbddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbddfffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffdddddddbfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffdddddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffbdddffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffddbffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
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
char_ninja.setPosition(10, 30)
let gravity = 9.8 * 30
tiles.setCurrentTilemap(tilemap`nivel1`)
scene.cameraFollowSprite(char_ninja)
char_ninja.ay = 300
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
