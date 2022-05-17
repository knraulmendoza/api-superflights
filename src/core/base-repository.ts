import { Model } from 'mongoose';
import { IGeneryRepository } from './genery-repository.abstract';

export class BaseRepository<T> implements IGeneryRepository<T> {
  private _repository: Model<T>;

  constructor(repository: Model<T>) {
    this._repository = repository;
  }

  getAll(): Promise<T[]> {
    return this._repository.find().exec();
  }
  getById(id: string | number): Promise<T> {
    return this._repository.findById(id).exec();
  }
  create(body: T): Promise<T> {
    return this._repository.create(body);
  }
  update(id: string | number, body: T): Promise<T> {
    return this._repository.findByIdAndUpdate(id, body).exec();
  }
  delete(id: string | number): Promise<T> {
    return this._repository.findByIdAndDelete(id).exec();
  }
}
