import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  // peoples:any[]=[
  //   {
  //     "name":"vinay",
  //     "email":"vinay@gmail.com",
  //     "id":1
  //   },
  //   {
  //     "name":"adarsh",
  //     "email":"adarsh@gmail.com",
  //     "id":2
  //   },
  //   {
  //     "name":"manish",
  //     "email":"manish@gmail.com",
  //     "id":3
  //   }
  // ]


  questions=[{
    id:1,
    "question":"2+2=?",
   "options":[{
    "optionid":1,
    "option":"4"
   },
   {
    "optionid":2,
    "option":"5"
   },
   {
    "optionid":3,
    "option":"6"
   },{
    "optionid":4,
    "option":"7"
   }
  ],
  answer:1,
  selected:0

  },

  {
    id:2,
    "question":"5*3=?",
   "options":[{
    "optionid":1,
    "option":"21"
   },
   {
    "optionid":2,
    "option":"51"
   },
   {
    "optionid":3,
    "option":"15"
   },{
    "optionid":4,
    "option":"35 "
   }
  ],
  answer:3,
  selected:0
  }]

onsubmit(){

}

}
