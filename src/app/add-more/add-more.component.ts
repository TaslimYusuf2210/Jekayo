import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-more',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './add-more.component.html',
  styleUrl: './add-more.component.scss'
})
export class AddMoreComponent implements OnInit {

  addMoreForm!: FormGroup
  menuType = [
    {
      name: 'meal',
      value: 'meal'
    },
    {
      name: 'accessory',
      value: 'accessory'
    },
    {
      name: 'drinks',
      value: 'drinks'
    },
    {
      name: 'snacks',
      value: 'snacks'
    },
  ]

  constructor(private fb:FormBuilder){}

  ngOnInit(): void {
    
    this.addMoreForm = this.fb.group({
      menuType:['', Validators.required],
      imageLink:['', Validators.required],
      name:['', Validators.required],
      description:['', Validators.required],
      price:['', Validators.required],
    })
  }

  get f() {
    return this.addMoreForm.controls;
  }


  onSubmitMenu(){}
}
