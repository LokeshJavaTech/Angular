import { Component } from '@angular/core';

@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {

  students = [
    {
      firstName : "Lokesh",
      lastName : "Mittal",
      imageUrl : "https://i.pinimg.com/474x/b3/be/65/b3be650a7e162b12eab155ab0839ee06.jpg",
      grade : 1,
      rollNo : 11,
      classRank: 5,
      registrationNo : 11323,
      address : {
        city : 'Delhi',
        postalCode : 'A1B2C3'
      }
    },
    {
      firstName : "Sumit",
      lastName : "Mittal",
      imageUrl : "https://upload.wikimedia.org/wikipedia/commons/1/16/Sunrise_red.jpg",
      grade : 2,
      rollNo : 22,
      classRank: 2,
      registrationNo : 10232,
      address : {
        city : 'Noida',
        postalCode : 'X7Y8Z9'
      }
    },
    {
      firstName : "Rekha",
      lastName : "Kumari",
      imageUrl : "https://yt3.googleusercontent.com/KgIMV7koWU0tOfVB7x7fu2S-OYq7ID2EIzVcrRHlhXedb7Mi7DTxUPS_cTuUNg24M0uRTbgpBGY=s900-c-k-c0x00ffffff-no-rj",
      grade : 3,
      rollNo : 33,
      classRank: 20,
      registrationNo : 77543,
      address : {
        city : 'Ghaziabad',
        postalCode : 'P5Q6R7'
      }
    }

  ];

}
