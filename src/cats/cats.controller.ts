import { Controller, Get, Req, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from '../dto/create-cat.dto'
import { UpdateCatDto } from 'src/dto/update-cat.dto';
@Controller('cats')
export class CatsController {
    @Get()
    async findAll(): Promise<any[]> {
        return [];
    }
    @Get(':id')
    findOne(@Param('id') id: string) {
        return `cat #${id}`;
    }
    @Put(':id')
    update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
        return `updated cat #${id}`;
    }
    @Delete(':id')
    remove(@Param('id') id: string) {
        return 'deleted cat #${id}';
    }
    @Post()
    async create(@Body() createCatDto: CreateCatDto){
        return 'cat added successfully';
    }
}
