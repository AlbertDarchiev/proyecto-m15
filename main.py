@namespace
class SpriteKind:
    guide = SpriteKind.create()

def on_right_released():
    char_ninja.vx = 0
controller.right.on_event(ControllerButtonEvent.RELEASED, on_right_released)

def on_left_released():
    char_ninja.vx = 0
controller.left.on_event(ControllerButtonEvent.RELEASED, on_left_released)

def death_char():
    global is_alive
    animation.run_image_animation(char_ninja,
        [img("""
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
        """)],
        200,
        False)
    controller.move_sprite(char_ninja, 0, 0)
    is_alive = False
    load_map1()

def on_on_overlap(sprite6, otherSprite):
    death_char()
sprites.on_overlap(SpriteKind.player, SpriteKind.projectile, on_on_overlap)

def on_overlap_tile(sprite, location):
    if chest_is_closed:
        char_ninja.set_image(img("""
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
        """))
        char_ninja.say_text("Tengo que recuperar la corona", 1000, False)
    else:
        char_ninja.say_text("GG", 200, False)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile
    """),
    on_overlap_tile)

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

def on_overlap_tile3(sprite5, location5):
    tiles.set_tile_at(location5, assets.tile("""
        switchUp0
    """))
    tiles.set_wall_at(tiles.get_tile_location(49, 1), False)
    tiles.set_tile_at(tiles.get_tile_location(49, 1),
        assets.tile("""
            transparency16
        """))
    game.show_long_text("aaaaaa", DialogLayout.TOP)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        switchDown
    """),
    on_overlap_tile3)

def on_button_released():
    animation.stop_animation(animation.AnimationTypes.ALL, char_ninja)
controller.any_button.on_event(ControllerButtonEvent.RELEASED, on_button_released)

def on_right_pressed():
    animation.run_image_animation(char_ninja,
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        100,
        True)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_left_pressed():
    animation.run_image_animation(char_ninja,
        [img("""
                . . . . f f f f f . . . . . . . 
                        . . . f e e e e e f . . . . . . 
                        . . f d d d d e e e f . . . . . 
                        . c d f d d f d e e f f . . . . 
                        . c d f d d f d e e d d f . . . 
                        c d e e d d d d e e b d c . . . 
                        c d d d d c d d e e b d c . f f 
                        c c c c c d d d e e f c . f e f 
                        . f d d d d d e e f f . . f e f 
                        . . f f f f f e e e e f . f e f 
                        . . . . f e e e e e e e f f e f 
                        . . . f e f f e f e e e e f f . 
                        . . . f e f f e f e e e e f . . 
                        . . . f d b f d b f f e f . . . 
                        . . . f d d c d d b b d f . . . 
                        . . . . f f f f f f f f f . . .
            """),
            img("""
                . . . . f f f f f . . . . . . . 
                        . . . f e e e e e f . . . . . . 
                        . . f d d d d e e e f . . . . . 
                        . c d f d d f d e e f . . . . . 
                        . c d f d d f d e e f f . . . . 
                        c d e e d d d d e e d d f . . . 
                        c d d d d c d d e e b d c . . . 
                        c c c c c d d e e e b d c . f f 
                        . f d d d d e e e f f c . f e f 
                        . f f f f f f e e e e f . f e f 
                        . f f f f e e e e e e e f f e f 
                        f d d f d d f e f e e e e f f . 
                        f d b f d b f e f e e e e f . . 
                        f f f f f f f f f f f f e f . . 
                        . . . . . . . . . f c d d f . . 
                        . . . . . . . . . . f f f f . .
            """),
            img("""
                . . . . f f f f f . . . . . . . 
                        . . . f e e e e e f . . . . . . 
                        . . f d d d d e e e f f . . . . 
                        . c d d d d d d e e d d f . . . 
                        . c d f d d f d e e b d c . . . 
                        c d d f d d f d e e b d c . f f 
                        c d e e d d d d e e f c . f e f 
                        c d d d d c d e e e f . . f e f 
                        . f c c c d e e e f f . . f e f 
                        . . f f f f f e e e e f . f e f 
                        . . . . f e e e e e e e f f f . 
                        . . f f e f e e f e e e e f . . 
                        . f e f f e e f f f e e e f . . 
                        f d d b d d c f f f f f f b f . 
                        f d d c d d d f . . f c d d f . 
                        . f f f f f f f . . . f f f . .
            """),
            img("""
                . . . . f f f f f . . . . . . . 
                        . . . f e e e e e f f f . . . . 
                        . . f d d d e e e e d d f . . . 
                        . c d d d d d e e e b d c . . . 
                        . c d d d d d d e e b d c . . . 
                        c d d f d d f d e e f c . f f . 
                        c d d f d d f d e e f . . f e f 
                        c d e e d d d d e e f . . f e f 
                        . f d d d c d e e f f . . f e f 
                        . . f f f d e e e e e f . f e f 
                        . . . . f e e e e e e e f f f . 
                        . . . . f f e e e e e b f f . . 
                        . . . f e f f e e c d d f f . . 
                        . . f d d b d d c f f f . . . . 
                        . . f d d c d d d f f . . . . . 
                        . . . f f f f f f f . . . . . .
            """),
            img("""
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
            """)],
        100,
        True)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_overlap_tile4(sprite8, location7):
    death_char()
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.hazard_lava1,
    on_overlap_tile4)

def on_a_pressed():
    animation.run_image_animation(char_ninja,
        [img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """),
            img("""
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
            """)],
        200,
        False)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def load_map1():
    global is_alive, chest_is_closed
    scene.camera_follow_sprite(char_ninja)
    is_alive = True
    scene.set_background_image(assets.image("""
        black
    """))
    tiles.set_current_tilemap(tilemap("""
        nivel1
    """))
    # sprites.destroy_all_sprites_of_kind(SpriteKind.projectile)
    create_lava()
    char_ninja.set_position(10, 30)
    controller.move_sprite(char_ninja, 50, 0)
    chest_is_closed = True
    char_ninja.ay = 300
    char_ninja.set_image(img("""
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
    """))
    for value in tiles.get_tiles_by_type(assets.tile("""
        chestOpen
    """)):
        tiles.set_tile_at(value, assets.tile("""
            chest_closed
        """))
    for value2 in tiles.get_tiles_by_type(assets.tile("""
        switchUp0
    """)):
        tiles.set_tile_at(value2, assets.tile("""
            switchDown
        """))

def on_hit_wall(sprite10, location9):
    sprite10.y = 130
    sprite10.vy = 0
    sprite10.ay = -30
scene.on_hit_wall(SpriteKind.projectile, on_hit_wall)

def throw_l(lava_x: number, lava_y: number):
    global lava_projectile
    lava_projectile = sprites.create(assets.image("""
            lava_project
        """),
        SpriteKind.projectile)
    tiles.place_on_tile(lava_projectile, tiles.get_tile_location(lava_x, lava_y))
    lava_projectile.vy = -20
def load_menu():
    tiles.set_current_tilemap(tilemap("""
        nivel13
    """))
    controller.move_sprite(char_ninja, 100, 100)
    scene.camera_follow_sprite(char_ninja)

def on_up_pressed():
    if char_ninja.is_hitting_tile(CollisionDirection.BOTTOM) and is_alive:
        char_ninja.vy = -150
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_overlap_tile5(sprite2, location2):
    death_char()
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        lava_enemy
    """),
    on_overlap_tile5)

def on_overlap_tile6(sprite3, location3):
    char_ninja.set_stay_in_screen(False)
    char_ninja.set_position(char_ninja.x, char_ninja.x - 100)
    load_map1()
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        house0
    """),
    on_overlap_tile6)

def on_overlap_tile7(sprite7, location6):
    char_ninja.say_text("Selecciona la bajada correcta...", 200, False)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        char_guide
    """),
    on_overlap_tile7)

def on_overlap_tile8(sprite4, location4):
    global chest_is_closed
    tiles.set_tile_at(location4, assets.tile("""
        chestOpen
    """))
    chest_is_closed = False
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        chest_closed
    """),
    on_overlap_tile8)

def create_lava():
    for lava in tiles.get_tiles_by_type(assets.tile("""
        lava_enemy
    """)):
        throw_l(lava.column, lava.row)
lava_projectile: Sprite = None
chest_is_closed = False
is_alive = False
char_ninja: Sprite = None
in_main = False
char_ninja = sprites.create(img("""
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
    """),
    SpriteKind.player)
load_menu()
gravity = 9.8 * 30