import { Controller, Get, Req, Post, Param, Body, Put, Delete, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './dto/create-cat.dto'
import { UpdateCatDto } from './dto/update-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { RolesGuard } from 'src/roles/roles.guard';
import { Roles } from 'src/roles/roles.decorator';
@Controller('cats')
@UseGuards(new RolesGuard())
export class CatsController {

    constructor(private catsService: CatsService) { }
    @Post()
    @Roles(['admin'])
    async create(@Body() createCatDto: CreateCatDto){
        this.catsService.create(createCatDto)
    }
    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }
}
