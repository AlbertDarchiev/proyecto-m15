@namespace
class SpriteKind:
    guide = SpriteKind.create()
    prisioner = SpriteKind.create()
    house = SpriteKind.create()
def death_char():
    global is_alive
    controller.move_sprite(char_ninja, 0, 0)
    is_alive = False
    sprites.destroy_all_sprites_of_kind(SpriteKind.prisioner)
    level1()
    restore_objects()

def on_up_pressed():
    if char_ninja.is_hitting_tile(CollisionDirection.BOTTOM) and is_alive and not (in_main):
        char_ninja.vy = -150
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

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

def on_on_overlap(sprite6, otherSprite):
    death_char()
sprites.on_overlap(SpriteKind.player, SpriteKind.projectile, on_on_overlap)

def on_overlap_tile(sprite, location):
    sprites.destroy_all_sprites_of_kind(SpriteKind.projectile)
    if chest_is_closed:
        load_menu()
    else:
        char_ninja.say_text("GG", 200, False)
    if current_level == 1:
        tiles.place_on_tile(char_ninja, tiles.get_tile_location(3, 3))
    elif current_level == 2:
        pass
    else:
        pass
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

def on_a_pressed():
    if char_ninja.is_hitting_tile(CollisionDirection.BOTTOM) and is_alive and not (in_main):
        char_ninja.vy = -150
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def turn_uphealth():
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

def on_overlap_tile3(sprite5, location5):
    tiles.set_tile_at(location5, assets.tile("""
        switchUp0
    """))
    tiles.set_wall_at(tiles.get_tile_location(49, 1), False)
    tiles.set_tile_at(tiles.get_tile_location(49, 1),
        assets.tile("""
            transparency16
        """))
    game.show_long_text("Eso debió haber activado algo...", DialogLayout.TOP)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        switchDown
    """),
    on_overlap_tile3)

def on_button_released():
    animation.stop_animation(animation.AnimationTypes.ALL, char_ninja)
controller.any_button.on_event(ControllerButtonEvent.RELEASED, on_button_released)

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

def load_level(lvl: number):
    if lvl == 1:
        level1()
    elif lvl == 2:
        pass
    else:
        pass
    sprites.destroy_all_sprites_of_kind(SpriteKind.enemy)
    create_lava()
def char_ongame_options():
    controller.move_sprite(char_ninja, 50, 0)
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

def on_right_released():
    char_ninja.vx = 0
controller.right.on_event(ControllerButtonEvent.RELEASED, on_right_released)

def on_left_released():
    char_ninja.vx = 0
controller.left.on_event(ControllerButtonEvent.RELEASED, on_left_released)

def on_overlap_tile4(sprite8, location7):
    death_char()
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.hazard_lava1,
    on_overlap_tile4)

def level2():
    global in_main, is_alive, chest_is_closed
    in_main = False
    is_alive = True
    sprites.destroy_all_sprites_of_kind(SpriteKind.house)
    scene.camera_follow_sprite(char_ninja)
    scene.set_background_image(assets.image("""
        black
    """))
    tiles.set_current_tilemap(tilemap("""
        nivel14
    """))
    char_ninja.set_position(30, 30)
    chest_is_closed = True
    char_ongame_options()

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
    global snacks
    char_ninja.ay = 0
    tiles.set_current_tilemap(tilemap("""
        nivel13
    """))
    scene.camera_follow_sprite(char_ninja)
    controller.move_sprite(char_ninja, 100, 100)
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
        snacks = sprites.create(listfood[randint(0, 1)], SpriteKind.food)
        tiles.place_on_random_tile(snacks, sprites.dungeon.floor_dark_diamond)
    create_zombies()
    create_health()

def on_overlap_tile6(sprite2, location2):
    death_char()
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        lava_enemy
    """),
    on_overlap_tile6)

def on_overlap_tile7(sprite3, location3):
    global current_level
    current_level = 2
    char_ninja.set_stay_in_screen(False)
    load_level(current_level)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        house2
    """),
    on_overlap_tile7)

def create_health():
    global statusbar
    statusbar = statusbars.create(20, 4, StatusBarKind.health)
    statusbar.value = 100
    statusbar.attach_to_sprite(char_ninja)

def on_overlap_tile8(sprite7, location6):
    char_ninja.say_text("Selecciona la bajada correcta...", 200, False)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        char_guide
    """),
    on_overlap_tile8)

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

def on_overlap_tile9(sprite4, location4):
    global prisioner1, chest_is_closed
    tiles.set_tile_at(location4, assets.tile("""
        chestOpen
    """))
    prisioner1 = sprites.create(assets.image("""
        duck_left
    """), SpriteKind.prisioner)
    chest_is_closed = False
    tiles.place_on_tile(prisioner1, location4)
    prisioner1.follow(char_ninja, 40)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        chest_closed
    """),
    on_overlap_tile9)

def create_lava():
    for lava in tiles.get_tiles_by_type(assets.tile("""
        lava_enemy
    """)):
        throw_l(lava.column, lava.column)
prisioner1: Sprite = None
statusbar: StatusBarSprite = None
snacks: Sprite = None
lava_projectile: Sprite = None
zombie: Sprite = None
listfood: List[Image] = []
current_level = 0
chest_is_closed = False
is_alive = False
char_ninja: Sprite = None
in_main = False
in_main = True
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