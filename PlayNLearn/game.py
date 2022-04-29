import pygame
import serge

pygame.init()
screen = pygame.display.set_mode((640, 480))
pygame.display.set_caption("PyGame")
clock = pygame.time.Clock()
player = serge.Serge((150, 150))

game_over = False
bg=pygame.image.load("coding.png")

while game_over == False:

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            game_over = True

    player.handle_event(event)
    screen.fill(pygame.Color('blue'))
    screen.blit(player.image, player.rect)

    pygame.display.flip()
    clock.tick(10)
pygame.quit()