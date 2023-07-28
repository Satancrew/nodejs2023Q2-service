import { Injectable } from '@nestjs/common';
import { User } from 'src/types/types';

@Injectable()
export class DBService {
  users: User[] = [];

  getUsers() {
    return this.users;
  }
}
