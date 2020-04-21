import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }
userApi = 'http://localhost:3000'
    getAll() {
        return this.http.get<User[]>(`${this.userApi}/users`);
    }

    register(user: User) {
        return this.http.post(`${this.userApi}/users/register`, user);
    }

    delete(id: number) {
        return this.http.delete(`/users/${id}`);
    }
}