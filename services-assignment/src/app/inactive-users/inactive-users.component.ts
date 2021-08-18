import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserService } from '../shared/users.service';

@Component({
    selector: 'app-inactive-users',
    templateUrl: './inactive-users.component.html',
    styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent {
    users: string[];
    userSetToActive = new EventEmitter<number>();

    constructor(private userService: UserService) {}

    ngOnInit() {
        this.users = this.userService.inactiveUsers;
    }

    onSetToActive(id: number) {
        this.userService.onSetToActive(id);
    }
}
