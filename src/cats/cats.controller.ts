import { Controller, Get, Req, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './dto/create-cat.dto'
import { UpdateCatDto } from './dto/update-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) { }
    @Post()
    async create(@Body() createCatDto: CreateCatDto){
        this.catsService.create(createCatDto)
    }
    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }
}
