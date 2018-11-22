import {Component, OnInit} from '@angular/core';
import {User} from "../user";
import { UserService } from '../user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  addUser: boolean;

  getAllUsers() {
    this.userService.getAllUsers().subscribe(users => this.users = users);
  }

  selectedUser: User;
  onSelect(user: User): void {
    this.selectedUser = user;
  }

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getAllUsers();
  }

}
