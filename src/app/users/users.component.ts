import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})


export class UsersComponent implements OnInit {

  users: User[];
  addUser: boolean;
  watchUser: boolean;
  selectedUser: User;

  getAllUsers() {
    this.userService.getAllUsers().subscribe(users => this.users = users);
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  onAddUser(user: User): void {
    this.userService.addUser(user).subscribe(() => this.getAllUsers());
  }

  removeUser(user: User): void {
    this.userService.removeUser(user).subscribe(() => this.getAllUsers());
  }


  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getAllUsers();
  }

}
