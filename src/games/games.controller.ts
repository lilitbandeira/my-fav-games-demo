import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { GamesService } from './games.service';
import { GameDto } from './dtos/game.dto';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Get()
  findAll() {
    return this.gamesService.findAll();
  }

  @Post()
  create(@Body() game: GameDto) {
    if (!game.name || !game.platforms)
      throw new BadRequestException('Dados insuficientes!');
    return this.gamesService.create(game);
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.gamesService.remove(id);
  }
}
