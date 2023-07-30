import {
  BadRequestException,
  Controller,
  Get,
  NotFoundException,
  Param,
} from '@nestjs/common';
import { isUUID } from 'class-validator';
import { ArtistService } from 'src/services/artist.service';
import { Artist } from 'src/types/types';

@Controller('artist')
export class ArtistController {
  constructor(private readonly artistService: ArtistService) {}

  @Get()
  getArtists(): Artist[] {
    return this.artistService.getArtists();
  }

  @Get(':id')
  getArtist(@Param('id') id: string) {
    if (!isUUID(id, 4)) throw new BadRequestException('Invalid arist id');
    const artist = this.artistService.getArtist(id);

    if (!artist) {
      throw new NotFoundException(`Artist with id - ${id} doent't exist `);
    }

    return artist;
  }
}
