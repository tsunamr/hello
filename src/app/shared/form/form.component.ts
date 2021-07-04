import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  locations: string[] = ['Downtown', 'Midtown', 'Uptown'];
  volunterForm: FormGroup;
  

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initializeForm();
  }
   initializeForm(): void {
     this.volunterForm = this.fb.group({
       name: '',
       phoneNumber: '',
       preferredLocation:'',
       animals: this.fb.group({
         checking: false,
         saving: false,
         joint: false
       }),

       refrences: this.fb.array([this.fb.control('')])
     });
   }

   onSubmit(): void {
     console.log(this.volunterForm);
   }

   selectLocation(event): void {
     this.volunterForm.patchValue({
       preferredlocation: event.target.value
     });
   }

   addEmail(): void {
     this.references.push(this.fb.control(''));
   }

   removeEmail(index: number): void {
     this.references.removeAt(index);
   }

   get references(): FormArray {
     return this.volunterForm.get('references') as FormArray;
   }

}
