import { Controller, Get, Post, Body, Patch } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongRequest } from './models';

@Controller('songs')
export class SongsController {

    constructor(private service: SongsService) { }

    @Get()
    async getAllSongs() {
        return {
            data: await this.service.getAll()
        }
    }

    @Post()
    async addSong(@Body() song: CreateSongRequest) {
        const addedSong = await this.service.addOne(song);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(addedSong)
            }, 3000)
        })
    }
}
