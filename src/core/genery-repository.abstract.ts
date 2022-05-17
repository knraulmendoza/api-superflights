export abstract class IGeneryRepository<T> {
  abstract getAll(): Promise<T[]>;
  abstract getById(id: string | number): Promise<T>;
  abstract create(body: T): Promise<T>;
  abstract update(id: string | number, body: T): Promise<T>;
  abstract delete(id: string | number): Promise<T>;
}
