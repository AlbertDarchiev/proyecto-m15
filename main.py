def on_right_released():
    char_ninja.vx = 0
controller.right.on_event(ControllerButtonEvent.RELEASED, on_right_released)

def on_left_released():
    char_ninja.vx = 0
controller.left.on_event(ControllerButtonEvent.RELEASED, on_left_released)

def on_button_pressed():
    pass
controller.any_button.on_event(ControllerButtonEvent.PRESSED, on_button_pressed)

def on_right_pressed():
    char_ninja.vx = 50
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_left_pressed():
    char_ninja.vx = -50
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

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

def on_overlap_tile(sprite, location):
    animation.run_image_animation(char_ninja,
        [img("""
            . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . f f f f f . . . . . . . 
                    . . . f e e e e e f . . . . . . 
                    . . f d d d d e e e f . . . . . 
                    . . f d d d d d e e f f . . . . 
                    . c d d d f f d e e d d f . . . 
                    c d e e d d d d e e b d c . . . 
                    c f f d d c d d e e b d c . . . 
                    f d d f e f f f e e e f . . . . 
                    f d d f e e e f f f f f . . . . 
                    f f f f f e e e e e f f . f f . 
                    . f f f e f f e e e f f . e f . 
                    . f b d f e f f b b f f f e f . 
                    . f d d f e e f d d b f f e f . 
                    . f f f f f f f f f f f f f . .
        """)],
        200,
        False)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        lava1
    """),
    on_overlap_tile)

def throw_lava():
    global char_lava_enemy
    for value in tiles.get_tiles_by_type(assets.tile("""
        lava_enemy
    """)):
        while True:
            pause(randint(3000, 5500))
            char_lava_enemy = sprites.create(img("""
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
                """),
                SpriteKind.enemy)
            tiles.place_on_tile(char_lava_enemy, value)
            tiles.set_tile_at(value, assets.tile("""
                lava_enemy
            """))
            char_lava_enemy.vy = -20

def on_up_pressed():
    if char_ninja.is_hitting_tile(CollisionDirection.BOTTOM):
        char_ninja.vy = -150
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

char_ninja: Sprite = None
char_lava_enemy: Sprite = None
char_lava_enemy = sprites.create(img("""
        . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . .
    """),
    SpriteKind.enemy)
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
gravity = 9.8 * 30
tiles.set_current_tilemap(tilemap("""
    nivel1
"""))
scene.camera_follow_sprite(char_ninja)
char_ninja.ay = 300
throw_lava()