import { Component } from '@angular/core';

class User{
  firstName: string;
  email: string;
  age: number;
  language: string;
  active: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentImage = 0;
  images = [
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    },
    {
      title: 'Andromeda Galaxy',
      url: 'https://images.unsplash.com/photo-1598735810846-95cdc1e20150?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YW5kcm9tZWRhJTIwZ2FsYXh5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the BigBen',
      url: 'https://images.unsplash.com/photo-1561022107-23ba5b910e02?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8dGhlJTIwYmlnYmVufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Sunset',
      url: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8c3Vuc2V0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    },
    {
      title: 'Andromeda Galaxy',
      url: 'https://images.unsplash.com/photo-1598735810846-95cdc1e20150?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YW5kcm9tZWRhJTIwZ2FsYXh5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the BigBen',
      url: 'https://images.unsplash.com/photo-1561022107-23ba5b910e02?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8dGhlJTIwYmlnYmVufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Sunset',
      url: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8c3Vuc2V0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    },
    {
      title: 'Andromeda Galaxy',
      url: 'https://images.unsplash.com/photo-1598735810846-95cdc1e20150?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8YW5kcm9tZWRhJTIwZ2FsYXh5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'At the BigBen',
      url: 'https://images.unsplash.com/photo-1561022107-23ba5b910e02?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8dGhlJTIwYmlnYmVufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Sunset',
      url: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8c3Vuc2V0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ];
  headerSpan: number = 2;
  showWarning: boolean = true;
  grayBackground: string = "lightGray";
  showBackground: boolean = true;
  users: Array<User> = [{
    firstName: "Hillier",
    email: "hkilpatrick0@nsw.gov.au",
    age: 26,
    language: "English",
    active: true
  }, {
    firstName: "Genvieve",
    email: "gbenettini1@flickr.com",
    age: 35,
    language: "German",
    active: false
  }, {
    firstName: "Melesa",
    email: "mhundey2@java.com",
    language: "Italian",
    age: 22,
    active: false
  }, {
    firstName: "Allayne",
    email: "aoliff3@oracle.com",
    language: "Spanish",
    age: 43,
    active: true
  }]
}
