import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { IGeneryRepository } from './genery-repository.abstract';

export class BaseController<T> {
  constructor(private readonly baseService: IGeneryRepository<T>) {}
  @Post()
  async create(@Body() entity: T): Promise<T> {
    return this.baseService.create(entity);
  }

  @Get()
  async findAll(): Promise<T[]> {
    return this.baseService.getAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string | number): Promise<T> {
    return this.baseService.getById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string | number,
    @Body() entity: T,
  ): Promise<T> {
    return this.baseService.update(id, entity);
  }

  @Delete(':id')
  async delete(@Param('id') id: string | number): Promise<T> {
    return this.baseService.delete(id);
  }
}
