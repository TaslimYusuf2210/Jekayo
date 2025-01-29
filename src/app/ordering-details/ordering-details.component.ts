import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-ordering-details',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './ordering-details.component.html',
  styleUrl: './ordering-details.component.scss'
})
export class OrderingDetailsComponent {

  confirmOrderForm!: FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.confirmOrderForm = this.fb.group({
      deliveryAddress:['', Validators.required],
      phoneNumber:['',
        [Validators.required,
          Validators.pattern('^[0-9]{11}$') 
        ]
      ]
    })
  }

  get f() {
    return this.confirmOrderForm.controls
  }
}
