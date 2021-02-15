import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PhoneService} from '../../services/phone/phone.service';
import {any} from 'codelyzer/util/function';
import {Phone} from '../../models/Phone';
import {isEmpty} from 'rxjs/operators';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.sass']
})
export class PhoneBookComponent implements OnInit {
  phoneForm: FormGroup;
  phones: Phone[];
  contactName: any;

  constructor(public phoneService: PhoneService, private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
    this.loadConacts();
  }

  // tslint:disable-next-line:typedef
  buildForm() {
    this.phoneForm = this.formbuilder.group({
      contactName: [undefined, [Validators.required,
        Validators.maxLength(40)]]
    });
  }
  // tslint:disable-next-line:typedef
  loadConacts(){
    this.phoneService.loadContact().subscribe((result) => {
      this.phones = result;
      result.map((phone) => {
        console.log('lets seee ' + phone.name);
      });
    });
  }

  // tslint:disable-next-line:typedef
  onSearch(){
    this.contactName = this.phoneForm.controls.contactName.value;
    console.log('Do you : ' + this.contactName);
    if (this.contactName) {
      this.phoneService.getContactDetails(this.contactName).subscribe((result) => {
        console.log('Do you 2 : ' + result.name);
        this.phones = [];
        this.phones.push(result);
      });
    }else {
      this.loadConacts();
    }
  }

}
