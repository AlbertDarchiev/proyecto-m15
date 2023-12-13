@namespace
class SpriteKind:
    guide = SpriteKind.create()
    prisioner = SpriteKind.create()
    house = SpriteKind.create()
    citizen = SpriteKind.create()

#DEJAR DE MOVERSE AL LOS LADOS AL LIBERAR BOTONES
def on_right_released():
    char_ninja.vx = 0
controller.right.on_event(ControllerButtonEvent.RELEASED, on_right_released)
def on_left_released():
    char_ninja.vx = 0
controller.left.on_event(ControllerButtonEvent.RELEASED, on_left_released)


def death_char():
    global is_alive
    pause(200)
    controller.move_sprite(char_ninja, 0, 0)
    is_alive = False
    if current_level == 1:
        level1()
    elif current_level == 2:
        level2()
    else:
        pass
    sprites.destroy_all_sprites_of_kind(SpriteKind.prisioner)
    restore_objects()

#CREACION DEL NIVEL 1
def level1():
    global in_main, is_alive, chest_is_closed
    in_main = False
    is_alive = True
    sprites.destroy_all_sprites_of_kind(SpriteKind.house)
    scene.camera_follow_sprite(char_ninja)
    scene.set_background_image(assets.image("""
        black
    """))
    tiles.set_current_tilemap(tilemap("""
        nivel1
    """))
    char_ninja.set_position(30, 30)
    chest_is_closed = True
    char_ongame_options()

#LLAMA A LA FUNCION DEAT_CHAR AL IMPACTAR EL PROYECTIL(fuego) CON EL PERSONAJE
def on_on_overlap(sprite6, otherSprite):
    death_char()
sprites.on_overlap(SpriteKind.player, SpriteKind.projectile, on_on_overlap)

#AL SALIR DEL NIVEL(casa) VERIFICA SI LOS PRISIONEROS HAN SIDO RESCATADOS
def on_overlap_tile(sprite, location):
    global level1_complete, level2_complete
    if current_level == 1:
        if not (chest_is_closed):
            level1_complete = True
        tiles.place_on_tile(char_ninja, tiles.get_tile_location(3, 3))
        load_menu()
    elif current_level == 2:
        if not (chest_is_closed):
            level2_complete = True
        tiles.place_on_tile(char_ninja, tiles.get_tile_location(9, 8))
        load_menu()
    sprites.destroy_all_sprites_of_kind(SpriteKind.projectile)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile
    """),
    on_overlap_tile)

#FUNCION PARA SUBIR ESCALERA
def on_overlap_tile2(sprite9, location8):
    if controller.up.is_pressed():
        char_ninja.vy = -35
    else:
        char_ninja.vy = 250
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        ladder
    """),
    on_overlap_tile2)

#LISTA DE FRUTAS
def foodhealth():
    global listfood
    listfood = [img("""
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
        """),
        img("""
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
        """),
        img("""
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
        """)]

def on_down_pressed():
    animation.run_image_animation(char_ninja,
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        100,
        True)
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

#FUNCION PARA ACTIVAR PALANCA EN NIVEL Y ABRIR PARED
def on_overlap_tile3(sprite5, location5):
    tiles.set_tile_at(location5, assets.tile("""
        switchUp0
    """))
    if current_level == 1:
        tiles.set_wall_at(tiles.get_tile_location(49, 1), False)
        tiles.set_tile_at(tiles.get_tile_location(49, 1),
            assets.tile("""
                transparency16
            """))
    elif current_level == 2:
        tiles.set_wall_at(tiles.get_tile_location(29, 3), False)
        tiles.set_tile_at(tiles.get_tile_location(29, 3),
            assets.tile("""
                transparency16
            """))
    game.show_long_text("Eso debió haber activado algo...", DialogLayout.TOP)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        switchDown
    """),
    on_overlap_tile3)

#MOSTRAR MENSAJE AL PERDER MEDIA VIDA
def on_status_reached_comparison_lte_type_percentage(status):
    char_ninja.say_text("Me estoy muriendo!", 2000, False)
statusbars.on_status_reached(StatusBarKind.health,
    statusbars.StatusComparison.LTE,
    statusbars.ComparisonType.PERCENTAGE,
    50,
    on_status_reached_comparison_lte_type_percentage)

#CANCELAR TODAS ANIMACIONES AL NO PULSAR NADA
def on_button_released():
    animation.stop_animation(animation.AnimationTypes.ALL, char_ninja)
controller.any_button.on_event(ControllerButtonEvent.RELEASED, on_button_released)


def load_level(lvl: number):
    if lvl == 1:
        level1()
    elif lvl == 2:
        level2()
    else:
        pass
    sprites.destroy_all_sprites_of_kind(SpriteKind.citizen)
    sprites.destroy_all_sprites_of_kind(SpriteKind.enemy)
    sprites.destroy_all_sprites_of_kind(SpriteKind.food)
    create_lava()

def on_right_pressed():
    animation.run_image_animation(char_ninja,
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        100,
        True)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

#CONFIGURA LS CONTROLES DEL PERSONAJE EN EL MENU
def char_ongame_options():
    controller.move_sprite(char_ninja, 50, 0)
    char_ninja.ay = 300
    char_ninja.set_image(img("""
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
    """))

def on_left_pressed():
    animation.run_image_animation(char_ninja,
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        100,
        True)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

#FUNCION CREACION DE ZOMBIES EN MENU CON VELOCIDADES RANDOM
def create_zombies():
    global zombie
    for index in range(7):
        zombie = sprites.create(img("""
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
            """),
            SpriteKind.enemy)
        tiles.place_on_random_tile(zombie, sprites.dungeon.floor_dark_diamond)
        zombie.follow(char_ninja, randint(0, 10))

#LLAMA A LA FUNCION DEATH_CHAR AL TOCAR LA LAVA Y PIERDE VIDA
def on_overlap_tile4(sprite8, location7):
    statusbar.value += -20
    death_char()
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.hazard_lava1,
    on_overlap_tile4)

def on_a_pressed():
    if char_ninja.is_hitting_tile(CollisionDirection.BOTTOM) and is_alive and not (in_main):
        char_ninja.vy = -150
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

#CARGA EL NIVEL 2
def level2():
    global in_main, is_alive, chest_is_closed
    in_main = False
    is_alive = True
    sprites.destroy_all_sprites_of_kind(SpriteKind.house)
    scene.camera_follow_sprite(char_ninja)
    scene.set_background_image(assets.image("""
        black2
    """))
    tiles.set_current_tilemap(tilemap("""
        level0
    """))
    char_ninja.set_position(30, 30)
    chest_is_closed = True
    char_ongame_options()

#AL ENTRAR EN LA CASA 1 CARGA EL NIVEL 1
def on_overlap_tile5(sprite32, location32):
    global current_level
    current_level = 1
    char_ninja.set_stay_in_screen(True)
    load_level(current_level)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        house0
    """),
    on_overlap_tile5)

#AL MORIR MUESTRA EFECTO Y MENSAJE EN PANTALLA  
def on_on_zero(status2):
    char_ninja.start_effect(effects.disintegrate)
    sprites.destroy(char_ninja)
    pause(1000)
    if name_player == "":
        game.game_over(False)
    else:
        game.set_game_over_message(False, "" + name_player + " vuelve a intentarlo")
        game.game_over(False)
statusbars.on_zero(StatusBarKind.health, on_on_zero)

#RESTA VIDA AL PERSONAJE AL TOCAR LAVA
def on_on_overlap2(sprite2, otherSprite2):
    statusbar.value += -20
sprites.on_overlap(SpriteKind.player, SpriteKind.projectile, on_on_overlap2)

#CREACION DE NPC INSTRUCTOR
def createCitizen():
    global survivor
    survivor = sprites.create(img("""
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
        """),
        SpriteKind.citizen)
    tiles.place_on_tile(survivor, tiles.get_tile_location(12, 2))

#RESTA VIDA AL JUGADOR AL CONTACTAR CON ZOMBIE
def on_on_overlap3(sprite3, otherSprite3):
    statusbar.value += -1
sprites.on_overlap(SpriteKind.enemy, SpriteKind.player, on_on_overlap3)

#RESTABLECE POSICION DE BOLA FUEGO AL HACER CONTACTO CON PARED
def on_hit_wall(sprite10, location9):
    sprite10.y = 130
    sprite10.vy = 0
    sprite10.ay = -30
scene.on_hit_wall(SpriteKind.projectile, on_hit_wall)

#FUNCION PARA DISPARAR BOLAS DE FUEGO
def throw_l(lava_x: number, lava_y: number):
    global lava_projectile
    lava_projectile = sprites.create(assets.image("""
            lava_project
        """),
        SpriteKind.projectile)
    tiles.place_on_tile(lava_projectile, tiles.get_tile_location(lava_x, lava_y))
    lava_projectile.vy = -20

#CARGA LOS AJUSTES DEL MENU / PANTALLA INICIAL
def load_menu():
    global snacks
    char_ninja.ay = 0
    tiles.set_current_tilemap(tilemap("""
        nivel13
    """))
    scene.camera_follow_sprite(char_ninja)
    controller.move_sprite(char_ninja, 100, 100)
    foodhealth()
    for value in tiles.get_tiles_by_type(assets.tile("""
        house0
    """)):
        tiles.place_on_tile(sprites.create(assets.image("""
                house1
            """), SpriteKind.house),
            value)
    for value2 in tiles.get_tiles_by_type(assets.tile("""
        house2
    """)):
        tiles.place_on_tile(sprites.create(assets.image("""
                house2
            """), SpriteKind.house),
            value2)
    for value3 in tiles.get_tiles_by_type(sprites.dungeon.floor_dark3):
        snacks = sprites.create(listfood[randint(0, 2)], SpriteKind.food)
        tiles.place_on_tile(snacks, value3)
    if level1_complete and level2_complete:
        if name_player == "":
            game.game_over(True)
        else:
            game.set_game_over_message(False, "" + name_player + " felicidades héroe!")
            game.game_over(True)
    create_zombies()
    createCitizen()

def on_up_pressed():
    if char_ninja.is_hitting_tile(CollisionDirection.BOTTOM) and is_alive and not (in_main):
        char_ninja.vy = -150
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

#RESTA VIDA AL PERSONAJE AL HACER CONTACTO CON LAVA
def on_overlap_tile6(sprite22, location2):
    statusbar.value += -20
    death_char()
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        lava_enemy
    """),
    on_overlap_tile6)

#CARGA NIVEL 2 AL ENTRAR EN CASA 2
def on_overlap_tile7(sprite33, location3):
    global current_level
    current_level = 2
    char_ninja.set_stay_in_screen(False)
    load_level(current_level)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        house2
    """),
    on_overlap_tile7)

#CREA BARRA DE VIDA AL PERSONAJE
def create_health():
    global statusbar
    statusbar = statusbars.create(20, 4, StatusBarKind.health)
    statusbar.value = 100
    statusbar.attach_to_sprite(char_ninja)

#MUESTRA MENSAJES DEL NPC INSTRUCTOR
def on_on_overlap4(sprite4, otherSprite4):
    global name_player
    if not (name_player):
        game.show_long_text("Hola, cuál es tu nombre? Necesito tu ayuda",
            DialogLayout.BOTTOM)
        name_player = game.ask_for_string("Introduce tu nombre")
    game.show_long_text("Tienes que ayudarme a rescatar a mis amigos!",
        DialogLayout.BOTTOM)
    game.show_long_text("Están dentro de las casas, no pueden salir solos",
        DialogLayout.BOTTOM)
    game.show_long_text("Pero cuidado con los zombies, intentarán matarte",
        DialogLayout.BOTTOM)
    pause(3000)
sprites.on_overlap(SpriteKind.player, SpriteKind.citizen, on_on_overlap4)

#MUESTRA MENSAJE AL HACER CONTACTO CON ALIEN
def on_overlap_tile8(sprite7, location6):
    char_ninja.say_text("Selecciona la bajada correcta...", 200, False)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        char_guide
    """),
    on_overlap_tile8)

#SUMA VIDA Y RESPRODUCE SONIDO AL HACER CONTACTO CON FRUTAS
def on_on_overlap5(sprite11, otherSprite5):
    if otherSprite5.image.equals(img("""
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
    """)):
        sprites.destroy(otherSprite5)
        music.play(music.melody_playable(music.power_up),
            music.PlaybackMode.UNTIL_DONE)
        statusbar.value += 40
    if otherSprite5.image.equals(img("""
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
    """)):
        sprites.destroy(otherSprite5)
        music.play(music.melody_playable(music.power_up),
            music.PlaybackMode.UNTIL_DONE)
        statusbar.value += 20
    if otherSprite5.image.equals(img("""
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
    """)):
        sprites.destroy(otherSprite5)
        music.play(music.melody_playable(music.power_up),
            music.PlaybackMode.UNTIL_DONE)
        statusbar.value += 13
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap5)

#FUNCION PARA RESTABLECER EL ASPECTO DE TILES 
def restore_objects():
    for value32 in tiles.get_tiles_by_type(assets.tile("""
        chestOpen
    """)):
        tiles.set_tile_at(value32, assets.tile("""
            chest_closed
        """))
    for value22 in tiles.get_tiles_by_type(assets.tile("""
        switchUp0
    """)):
        tiles.set_tile_at(value22, assets.tile("""
            switchDown
        """))

#ABRE EL COFRE Y CREA SPRITE PRISIONER AL HACER CONTACTO CON COFRE
def on_overlap_tile9(sprite42, location4):
    global chest_is_closed, prisioner1
    tiles.set_tile_at(location4, assets.tile("""
        chestOpen
    """))
    chest_is_closed = False
    if current_level == 1:
        prisioner1 = sprites.create(assets.image("""
            duck_left
        """), SpriteKind.prisioner)
    elif current_level == 2:
        prisioner1 = sprites.create(assets.image("""
            prisioner2
        """), SpriteKind.prisioner)
    else:
        pass
    tiles.place_on_tile(prisioner1, location4)
    prisioner1.follow(char_ninja, 60)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        chest_closed
    """),
    on_overlap_tile9)

#CREA UNA BOLA DE FUEGO POR CADA TILE LAVA QUE HAYA
def create_lava():
    for lava in tiles.get_tiles_by_type(assets.tile("""
        lava_enemy
    """)):
        throw_l(lava.column, lava.column)
prisioner1: Sprite = None
snacks: Sprite = None
lava_projectile: Sprite = None
survivor: Sprite = None
name_player = ""
statusbar: StatusBarSprite = None
zombie: Sprite = None
listfood: List[Image] = []
level2_complete = False
level1_complete = False
chest_is_closed = False
current_level = 0
is_alive = False
char_ninja: Sprite = None
in_main = False
in_main = True
char_ninja = sprites.create(img("""
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
    """),
    SpriteKind.player)
tiles.set_current_tilemap(tilemap("""
    nivel13
"""))
tiles.place_on_tile(char_ninja, tiles.get_tile_location(15, 3))
load_menu()
create_health()