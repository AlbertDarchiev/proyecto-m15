namespace SpriteKind {
    export const guide = SpriteKind.create()
    export const prisioner = SpriteKind.create()
    export const house = SpriteKind.create()
    export const citizen = SpriteKind.create()
    export const Enemy_level = SpriteKind.create()
}
// CARGA NIVEL 2 AL ENTRAR EN CASA 2
scene.onOverlapTile(SpriteKind.Player, assets.tile`house2`, function (sprite33, location3) {
    current_level = 2
    char_ninja.setStayInScreen(false)
    load_level(current_level)
})
// DEJAR DE MOVERSE AL LOS LADOS AL LIBERAR BOTONES
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    char_ninja.vx = 0
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    char_ninja.vx = 0
})
function death_char () {
    statusbar.value += -20
    pause(200)
    controller.moveSprite(char_ninja, 0, 0)
    is_alive = false
    if (current_level == 1) {
        level1()
    } else if (current_level == 2) {
        level2()
    } else {
        level3()
    }
    sprites.destroyAllSpritesOfKind(SpriteKind.prisioner)
    restore_objects()
}
// ABRE EL COFRE Y CREA SPRITE PRISIONER AL HACER CONTACTO CON COFRE
scene.onOverlapTile(SpriteKind.Player, assets.tile`chest_closed`, function (sprite42, location4) {
    tiles.setTileAt(location4, assets.tile`chestOpen`)
    chest_is_closed = false
    if (current_level == 1) {
        prisioner1 = sprites.create(assets.image`duck_left`, SpriteKind.prisioner)
    } else if (current_level == 2) {
        prisioner1 = sprites.create(assets.image`prisioner2`, SpriteKind.prisioner)
    } else {
        prisioner1 = sprites.create(assets.image`prisioner3`, SpriteKind.prisioner)
    }
    tiles.placeOnTile(prisioner1, location4)
    prisioner1.follow(char_ninja, 60)
})
// SUMA VIDA Y RESPRODUCE SONIDO AL HACER CONTACTO CON FRUTAS
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite11, otherSprite5) {
    if (otherSprite5.image.equals(img`
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
        `)) {
        sprites.destroy(otherSprite5)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
        statusbar.value += 40
    }
    if (otherSprite5.image.equals(img`
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 8 6 6 . . . 6 8 . . 
        . . . e e e 8 8 6 6 . 6 7 8 . . 
        . . e 2 2 2 2 e 8 6 6 7 6 . . . 
        . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
        . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
        e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
        e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
        e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
        e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
        e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
        e 2 2 2 2 2 2 2 4 e 2 e e c . . 
        e e 2 e 2 2 4 2 2 e e e c . . . 
        e e e e 2 e 2 2 e e e c . . . . 
        e e e 2 e e c e c c c . . . . . 
        . c c c c c c c . . . . . . . . 
        `)) {
        sprites.destroy(otherSprite5)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
        statusbar.value += 20
    }
    if (otherSprite5.image.equals(img`
        . . . . . . . . . . . 6 6 6 6 6 
        . . . . . . . . . 6 6 7 7 7 7 8 
        . . . . . . 8 8 8 7 7 8 8 6 8 8 
        . . e e e e c 6 6 8 8 . 8 7 8 . 
        . e 2 5 4 2 e c 8 . . . 6 7 8 . 
        e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
        e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
        e 2 e e 2 2 2 2 e e e e c 6 8 . 
        c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
        . c 2 e e e 2 e 2 4 2 2 2 2 c . 
        . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
        . . . e c c e c 2 2 2 2 2 2 2 e 
        . . . . . . . c 2 e e 2 2 e 2 c 
        . . . . . . . c e e e e e e 2 c 
        . . . . . . . . c e 2 2 2 2 c . 
        . . . . . . . . . c c c c c . . 
        `)) {
        sprites.destroy(otherSprite5)
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
        statusbar.value += 13
    }
})
// AL MORIR MUESTRA EFECTO Y MENSAJE EN PANTALLA
statusbars.onZero(StatusBarKind.Health, function (status2) {
    char_ninja.startEffect(effects.disintegrate)
    sprites.destroy(char_ninja)
    pause(1000)
    if (name_player == "") {
        game.gameOver(false)
    } else {
        game.setGameOverMessage(false, "" + name_player + " vuelve a intentarlo")
        game.gameOver(false)
    }
})
// CREACION DEL NIVEL 1
function level1 () {
    in_main = false
    is_alive = true
    sprites.destroyAllSpritesOfKind(SpriteKind.house)
    scene.cameraFollowSprite(char_ninja)
    scene.setBackgroundImage(assets.image`black`)
    tiles.setCurrentTilemap(tilemap`nivel1`)
    char_ninja.setPosition(30, 30)
    chest_is_closed = true
    char_ongame_options()
}
// LLAMA A LA FUNCION DEAT_CHAR AL IMPACTAR EL PROYECTIL(fuego) CON EL PERSONAJE
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite6, otherSprite) {
    death_char()
})
// AL SALIR DEL NIVEL(casa) VERIFICA SI LOS PRISIONEROS HAN SIDO RESCATADOS
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    if (current_level == 1) {
        if (!(chest_is_closed)) {
            level1_complete = true
        }
        tiles.placeOnTile(char_ninja, tiles.getTileLocation(3, 3))
        load_menu()
    } else if (current_level == 2) {
        if (!(chest_is_closed)) {
            level2_complete = true
        }
        tiles.placeOnTile(char_ninja, tiles.getTileLocation(9, 8))
        load_menu()
    } else {
        if (!(chest_is_closed)) {
            level3_complete = true
        }
        tiles.placeOnTile(char_ninja, tiles.getTileLocation(6, 16))
        load_menu()
    }
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy_level)
    sprites.destroyAllSpritesOfKind(SpriteKind.prisioner)
})
// FUNCION PARA SUBIR ESCALERA
scene.onOverlapTile(SpriteKind.Player, assets.tile`ladder`, function (sprite9, location8) {
    if (controller.up.isPressed() || controller.A.isPressed()) {
        char_ninja.vy = -35
    } else {
        char_ninja.vy = 90
    }
})
// LISTA DE FRUTAS
function foodhealth () {
    listfood = [img`
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
        `, img`
        . . . . . . . . . . . 6 6 6 6 6 
        . . . . . . . . . 6 6 7 7 7 7 8 
        . . . . . . 8 8 8 7 7 8 8 6 8 8 
        . . e e e e c 6 6 8 8 . 8 7 8 . 
        . e 2 5 4 2 e c 8 . . . 6 7 8 . 
        e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
        e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
        e 2 e e 2 2 2 2 e e e e c 6 8 . 
        c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
        . c 2 e e e 2 e 2 4 2 2 2 2 c . 
        . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
        . . . e c c e c 2 2 2 2 2 2 2 e 
        . . . . . . . c 2 e e 2 2 e 2 c 
        . . . . . . . c e e e e e e 2 c 
        . . . . . . . . c e 2 2 2 2 c . 
        . . . . . . . . . c c c c c . . 
        `, img`
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 8 6 6 . . . 6 8 . . 
        . . . e e e 8 8 6 6 . 6 7 8 . . 
        . . e 2 2 2 2 e 8 6 6 7 6 . . . 
        . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
        . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
        e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
        e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
        e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
        e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
        e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
        e 2 2 2 2 2 2 2 4 e 2 e e c . . 
        e e 2 e 2 2 4 2 2 e e e c . . . 
        e e e e 2 e 2 2 e e e c . . . . 
        e e e 2 e e c e c c c . . . . . 
        . c c c c c c c . . . . . . . . 
        `]
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    char_ninja,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . . f e 4 d d d d 4 e f e . . 
        . . f e f 2 2 2 2 e d d 4 e . . 
        . . e 4 f 2 2 2 2 e d d e . . . 
        . . . . f 4 4 5 5 f e e . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f e 4 d d d d 4 e f . . . 
        . . e 4 d d e 2 2 2 2 f e f . . 
        . . . e d d e 2 2 2 2 f 4 e . . 
        . . . . e e f 5 5 4 4 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    100,
    true
    )
})
// FUNCION PARA ACTIVAR PALANCA EN NIVEL Y ABRIR PARED
scene.onOverlapTile(SpriteKind.Player, assets.tile`switchDown`, function (sprite5, location5) {
    tiles.setTileAt(location5, assets.tile`switchUp0`)
    if (current_level == 1) {
        tiles.setWallAt(tiles.getTileLocation(49, 1), false)
        tiles.setTileAt(tiles.getTileLocation(49, 1), assets.tile`transparency16`)
    } else if (current_level == 2) {
        tiles.setWallAt(tiles.getTileLocation(29, 3), false)
        tiles.setTileAt(tiles.getTileLocation(29, 3), assets.tile`transparency16`)
    } else {
        tiles.setWallAt(tiles.getTileLocation(41, 2), false)
        tiles.setTileAt(tiles.getTileLocation(41, 2), assets.tile`transparency16`)
    }
    game.showLongText("Eso debió haber activado algo...", DialogLayout.Top)
})
// MOSTRAR MENSAJE AL PERDER MEDIA VIDA
statusbars.onStatusReached(StatusBarKind.Health, statusbars.StatusComparison.LTE, statusbars.ComparisonType.Percentage, 50, function (status) {
    char_ninja.sayText("Me estoy muriendo!", 2000, false)
})
// CANCELAR TODAS ANIMACIONES AL NO PULSAR NADA
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, char_ninja)
})
function load_level (lvl: number) {
    if (lvl == 1) {
        level1()
    } else if (lvl == 2) {
        level2()
    } else if (lvl == 3) {
        level3()
    }
    sprites.destroyAllSpritesOfKind(SpriteKind.citizen)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    create_phantom()
    create_lava()
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    char_ninja,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    100,
    true
    )
})
// CARGA EL NIVEL 2
function level3 () {
    in_main = false
    is_alive = true
    sprites.destroyAllSpritesOfKind(SpriteKind.house)
    scene.cameraFollowSprite(char_ninja)
    scene.setBackgroundImage(assets.image`black2`)
    tiles.setCurrentTilemap(tilemap`level6`)
    char_ninja.setPosition(30, 30)
    tiles.placeOnTile(char_ninja, tiles.getTileLocation(2, 6))
    chest_is_closed = true
    char_ongame_options()
}
// CONFIGURA LS CONTROLES DEL PERSONAJE EN EL MENU
function char_ongame_options () {
    controller.moveSprite(char_ninja, 50, 0)
    char_ninja.ay = 300
    char_ninja.setImage(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    char_ninja,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    100,
    true
    )
})
// FUNCION CREACION DE ZOMBIES EN MENU CON VELOCIDADES RANDOM
function create_zombies () {
    for (let index = 0; index < 7; index++) {
        zombie = sprites.create(img`
            . . f f f f f f f . . . . . . . 
            . f f 3 b 3 b 3 f f . . . . . . 
            f f b b 3 b 3 2 3 f f . . . . . 
            f 3 b 3 b 2 b 3 b 3 f f . . . . 
            f b 3 2 3 3 3 b 3 2 3 f . . . . 
            f 7 7 7 7 2 7 7 7 7 7 f . . . . 
            f 7 7 7 7 7 2 7 7 e 7 f . . . . 
            f 7 7 f f 7 7 f f 7 7 f . . . . 
            f e 7 7 7 7 7 7 7 7 e f . . . . 
            . f e 7 7 b b 7 7 e f . . . . . 
            . f f e 7 2 7 7 e f f . . . . . 
            7 7 f b 1 1 7 1 b f 7 7 . . . . 
            2 d f 1 1 7 1 1 1 f d 7 . . . . 
            7 7 f 1 1 1 1 2 1 f 7 7 . . . . 
            . . . f f f f f f . . . . . . . 
            . . . f f . . f f . . . . . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnRandomTile(zombie, sprites.dungeon.floorDarkDiamond)
        zombie.follow(char_ninja, randint(0, 10))
    }
}
// LLAMA A LA FUNCION DEATH_CHAR AL TOCAR LA LAVA Y PIERDE VIDA
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite8, location7) {
    death_char()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (char_ninja.isHittingTile(CollisionDirection.Bottom) && is_alive && !(in_main)) {
        char_ninja.vy = -150
    }
})
scene.onHitWall(SpriteKind.Enemy_level, function (sprite, location) {
    if (sprite.isHittingTile(CollisionDirection.Left)) {
        sprite.vx = 30
        animation.runImageAnimation(
        sprite,
        [img`
            ........................
            ........................
            ........................
            ........................
            ..........fffff.........
            ........ff11111f........
            .......fb111111bf.......
            ......fbd1111111f.......
            ......fddd111111df......
            ......fdddd11111df......
            ......fddddddd11df......
            ......fddddddd111f......
            ......fddddddcf11f......
            .......fbdddb1111bf.....
            ........fffcfdb1b1f.....
            .......ffffffffbfbf.....
            ....ff.fffffffffff......
            .....ffffffff...........
            .....ffffffb1b1f........
            ......ffffffbfbf........
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......fd1111111f.......
            ......fdd1111111df......
            ......fddd111111df......
            ......fdddddd111df......
            ......fbddddbfd1df......
            ......fcbbbdcfddbf......
            .......fcbb11111f.......
            ........fffff1b1f.......
            ........fb111cfbf.......
            ........ffb1b1ff........
            ......f.fffbfbf.........
            ......ffffffff..........
            .......fffff............
            ........................
            ........................
            ........................
            ........................
            `],
        200,
        true
        )
    } else {
        sprite.vx = -30
        animation.runImageAnimation(
        sprite,
        [img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f1111111df.......
            ......fd1111111ddf......
            ......fd111111dddf......
            ......fd111ddddddf......
            ......fd1dfbddddbf......
            ......fbddfcdbbbcf......
            .......f11111bbcf.......
            .......f1b1fffff........
            .......fbfc111bf........
            ........ff1b1bff........
            .........fbfbfff.f......
            ..........ffffffff......
            ............fffff.......
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            ........................
            ........................
            .........fffff..........
            ........f11111ff........
            .......fb111111bf.......
            .......f1111111dbf......
            ......fd111111dddf......
            ......fd11111ddddf......
            ......fd11dddddddf......
            ......f111dddddddf......
            ......f11fcddddddf......
            .....fb1111bdddbf.......
            .....f1b1bdfcfff........
            .....fbfbffffffff.......
            ......fffffffffff.ff....
            ...........ffffffff.....
            ........f1b1bffffff.....
            ........fbfbffffff......
            ........................
            ........................
            ........................
            ........................
            `],
        200,
        true
        )
    }
})
// CARGA EL NIVEL 2
function level2 () {
    in_main = false
    is_alive = true
    sprites.destroyAllSpritesOfKind(SpriteKind.house)
    scene.cameraFollowSprite(char_ninja)
    scene.setBackgroundImage(assets.image`black2`)
    tiles.setCurrentTilemap(tilemap`level0`)
    char_ninja.setPosition(30, 30)
    chest_is_closed = true
    char_ongame_options()
}
// AL ENTRAR EN LA CASA 1 CARGA EL NIVEL 1
scene.onOverlapTile(SpriteKind.Player, assets.tile`house0`, function (sprite32, location32) {
    current_level = 1
    char_ninja.setStayInScreen(true)
    load_level(current_level)
})
// CARGA NIVEL 2 AL ENTRAR EN CASA 2
scene.onOverlapTile(SpriteKind.Player, assets.tile`house3`, function (sprite33, location3) {
    current_level = 3
    char_ninja.setStayInScreen(false)
    load_level(current_level)
})
// CREACION DE NPC INSTRUCTOR
function createCitizen () {
    survivor = sprites.create(img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f f f e e f f c c f . 
        f f f b f e e f b f f f . 
        . f 4 1 f 4 4 f 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 7 7 7 7 b f e f . 
        e 4 f 7 7 7 7 7 7 f 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `, SpriteKind.citizen)
    tiles.placeOnTile(survivor, tiles.getTileLocation(12, 2))
}
// RESTABLECE POSICION DE BOLA FUEGO AL HACER CONTACTO CON PARED
scene.onHitWall(SpriteKind.Projectile, function (sprite10, location9) {
    sprite10.y = 130
    sprite10.vy = 0
    sprite10.ay = -30
})
// FUNCION PARA DISPARAR BOLAS DE FUEGO
function throw_l (lava_x: number, lava_y: number) {
    lava_projectile = sprites.create(assets.image`lava_project`, SpriteKind.Projectile)
    tiles.placeOnTile(lava_projectile, tiles.getTileLocation(lava_x, lava_y))
    lava_projectile.vy = -20
}
// CARGA LOS AJUSTES DEL MENU / PANTALLA INICIAL
function load_menu () {
    char_ninja.ay = 0
    tiles.setCurrentTilemap(tilemap`nivel13`)
    scene.cameraFollowSprite(char_ninja)
    controller.moveSprite(char_ninja, 100, 100)
    foodhealth()
    for (let value of tiles.getTilesByType(assets.tile`house0`)) {
        tiles.placeOnTile(sprites.create(assets.image`house1`, SpriteKind.house), value)
    }
    for (let value2 of tiles.getTilesByType(assets.tile`house2`)) {
        tiles.placeOnTile(sprites.create(assets.image`house2`, SpriteKind.house), value2)
    }
    for (let value2 of tiles.getTilesByType(assets.tile`house3`)) {
        tiles.placeOnTile(sprites.create(assets.image`reversehouse`, SpriteKind.house), value2)
    }
    for (let value3 of tiles.getTilesByType(sprites.dungeon.floorDark3)) {
        snacks = sprites.create(listfood[randint(0, 2)], SpriteKind.Food)
        tiles.placeOnTile(snacks, value3)
    }
    if (level1_complete && (level2_complete && level3_complete)) {
        if (name_player == "") {
            game.gameOver(true)
        } else {
            game.setGameOverMessage(false, "" + name_player + " felicidades héroe!")
            game.gameOver(true)
        }
    }
    create_zombies()
    createCitizen()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (char_ninja.isHittingTile(CollisionDirection.Bottom) && is_alive && !(in_main)) {
        char_ninja.vy = -150
    }
})
// MUESTRA MENSAJES DEL NPC INSTRUCTOR
sprites.onOverlap(SpriteKind.Player, SpriteKind.citizen, function (sprite4, otherSprite4) {
    if (!(name_player)) {
        game.showLongText("Hola, cuál es tu nombre? Necesito tu ayuda", DialogLayout.Bottom)
        name_player = game.askForString("Introduce tu nombre")
    }
    game.showLongText("Tienes que ayudarme a rescatar a mis amigos!", DialogLayout.Bottom)
    game.showLongText("Están dentro de las casas, no pueden salir solos", DialogLayout.Bottom)
    game.showLongText("Pero cuidado con los zombies, intentarán matarte", DialogLayout.Bottom)
    pause(3000)
})
// CREA BARRA DE VIDA AL PERSONAJE
function create_health () {
    statusbar = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar.value = 100
    statusbar.attachToSprite(char_ninja)
}
function create_phantom () {
    for (let value of tiles.getTilesByType(assets.tile`zomb_spawn`)) {
        start_phantom(value.column, value.row)
    }
}
// LLAMA A LA FUNCION DEAT_CHAR AL IMPACTAR EL PROYECTIL(fuego) CON EL PERSONAJE
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy_level, function (sprite6, otherSprite) {
    death_char()
})
// MUESTRA MENSAJE AL HACER CONTACTO CON ALIEN
scene.onOverlapTile(SpriteKind.Player, assets.tile`char_guide`, function (sprite7, location6) {
    char_ninja.sayText("Selecciona la bajada correcta...", 200, false)
})
// FUNCION PARA RESTABLECER EL ASPECTO DE TILES
function restore_objects () {
    for (let value32 of tiles.getTilesByType(assets.tile`chestOpen`)) {
        tiles.setTileAt(value32, assets.tile`chest_closed`)
    }
    for (let value22 of tiles.getTilesByType(assets.tile`switchUp0`)) {
        tiles.setTileAt(value22, assets.tile`switchDown`)
    }
}
// RESTA VIDA AL JUGADOR AL CONTACTAR CON ZOMBIE
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite3, otherSprite3) {
    statusbar.value += -1
})
// CREA UNA BOLA DE FUEGO POR CADA TILE LAVA QUE HAYA
function create_lava () {
    for (let lava of tiles.getTilesByType(assets.tile`lava_enemy`)) {
        throw_l(lava.column, lava.column)
    }
}
// FUNCION PARA DISPARAR BOLAS DE FUEGO
function start_phantom (pos_x: number, pos_y: number) {
    phantom_enemy = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........fffff.........
        ........ff11111f........
        .......fb111111bf.......
        ......fbd1111111f.......
        ......fddd111111df......
        ......fdddd11111df......
        ......fddddddd11df......
        ......fddddddd111f......
        ......fddddddcf11f......
        .......fbdddb1111bf.....
        ........fffcfdb1b1f.....
        .......ffffffffbfbf.....
        ....ff.fffffffffff......
        .....ffffffff...........
        .....ffffffb1b1f........
        ......ffffffbfbf........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy_level)
    animation.runImageAnimation(
    phantom_enemy,
    [img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f1111111df.......
        ......fd1111111ddf......
        ......fd111111dddf......
        ......fd111ddddddf......
        ......fd1dfbddddbf......
        ......fbddfcdbbbcf......
        .......f11111bbcf.......
        .......f1b1fffff........
        .......fbfc111bf........
        ........ff1b1bff........
        .........fbfbfff.f......
        ..........ffffffff......
        ............fffff.......
        ........................
        ........................
        ........................
        ........................
        `,img`
        ........................
        ........................
        ........................
        ........................
        .........fffff..........
        ........f11111ff........
        .......fb111111bf.......
        .......f1111111dbf......
        ......fd111111dddf......
        ......fd11111ddddf......
        ......fd11dddddddf......
        ......f111dddddddf......
        ......f11fcddddddf......
        .....fb1111bdddbf.......
        .....f1b1bdfcfff........
        .....fbfbffffffff.......
        ......fffffffffff.ff....
        ...........ffffffff.....
        ........f1b1bffffff.....
        ........fbfbffffff......
        ........................
        ........................
        ........................
        ........................
        `],
    200,
    true
    )
    tiles.placeOnTile(phantom_enemy, tiles.getTileLocation(pos_x, pos_y))
    phantom_enemy.vx = -30
}
// RESTA VIDA AL PERSONAJE AL HACER CONTACTO CON LAVA
scene.onOverlapTile(SpriteKind.Player, assets.tile`lava_enemy`, function (sprite22, location2) {
    death_char()
})
let phantom_enemy: Sprite = null
let snacks: Sprite = null
let lava_projectile: Sprite = null
let survivor: Sprite = null
let zombie: Sprite = null
let listfood: Image[] = []
let level3_complete = false
let level2_complete = false
let level1_complete = false
let name_player = ""
let prisioner1: Sprite = null
let chest_is_closed = false
let is_alive = false
let current_level = 0
let char_ninja: Sprite = null
let in_main = false
let statusbar : StatusBarSprite = null
in_main = true
char_ninja = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`nivel13`)
tiles.placeOnTile(char_ninja, tiles.getTileLocation(15, 3))
load_menu()
create_health()
