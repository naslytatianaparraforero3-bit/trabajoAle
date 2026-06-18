import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../service/users.service';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-user-list',
  standalone: false,
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
  usuarios: User[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.usuarios = this.usersService.getUsers();
  }
}