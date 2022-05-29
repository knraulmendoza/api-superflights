import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { IGeneryRepository } from './genery-repository.abstract';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags()
export class BaseController<T, I> {
  constructor(private readonly baseService: IGeneryRepository<T, I>) {}
  @Post()
  @ApiOperation({ summary: 'Create data' })
  @ApiResponse({ status: 200, description: 'Ok' })
  async create(@Body() entity: T): Promise<I> {
    return this.baseService.create(entity);
  }

  @Get()
  async findAll(): Promise<I[]> {
    return this.baseService.getAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string | number): Promise<I> {
    return this.baseService.getById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string | number,
    @Body() entity: T,
  ): Promise<I> {
    return this.baseService.update(id, entity);
  }

  @Delete(':id')
  async delete(@Param('id') id: string | number): Promise<I> {
    return this.baseService.delete(id);
  }
}
