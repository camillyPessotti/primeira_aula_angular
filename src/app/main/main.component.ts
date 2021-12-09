import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  listPerson = [];

  name = "";
  surname = "";
  birthdate = undefined;

  ngOnInit() {
  }

  registerPerson() {
    let person = {
      name: this.name,
      surname: this.surname,
      birthdate: this.birthdate
    }

    this.listPerson.push(person);

    this.name = "";
    this.surname = "";
    this.birthdate = "";
  }

  selectPerson(personData, indexPerson) {
    this.name = personData.name;
    this.surname = personData.surname;
    this.birthdate = personData.birthdate;

    this.listPerson.splice(indexPerson, 1);
  }

  deletePerson(indexPerson) {
    this.listPerson[indexPerson].deleted = true;
  }

  restorePerson(indexPerson) {
    delete this.listPerson[indexPerson].deleted
  }

  clickPerson(evento){
    console.log("Meu evento é:", evento);
  }
}
