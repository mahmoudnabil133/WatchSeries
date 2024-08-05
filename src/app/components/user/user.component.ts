import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@Component({
  // component directive
  selector: 'app-user',
  standalone: true,
  imports: [FormsModule,MatProgressSpinnerModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  userName: string = 'Amira';
  userEmail: string = 'Sincere@gmail.com';
  photo =
    'https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE=';
  isLogin: boolean = true;
  searchValue:string="amira"


  constructor() {}

  sayHello(evData: Event) {
    console.log(evData);

    console.log('hello from component');
  }

  showProfile(name:string ) {
    console.log(`hello ${name}`);
  }
}
