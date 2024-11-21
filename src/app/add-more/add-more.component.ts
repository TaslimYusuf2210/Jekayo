import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {addMenuModel} from './addMenuModel'
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-add-more',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './add-more.component.html',
  styleUrl: './add-more.component.scss'
})
export class AddMoreComponent implements OnInit {

  addMenuForm!: FormGroup
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

  constructor(private fb:FormBuilder, private globalService:GlobalService){}

  ngOnInit(): void {
    
    this.addMenuForm = this.fb.group({
      menuType:['', Validators.required],
      imageLink:['', Validators.required],
      name:['', Validators.required],
      description:['', Validators.required],
      price:['', Validators.required],
    })
  }

  get f() {
    return this.addMenuForm.controls;
  }

  generateId(){
    let id = Math.random().toString(36).substring(2, 15)
    console.log(id)
    return id
  }


  onSubmitMenu(){
    if (this.addMenuForm.invalid) return

    let formData = {...this.addMenuForm.value, id:this.generateId()} as addMenuModel

    console.log(formData)
    // formData.id = id

    let menuList = this.globalService.getData('menuList')

    let newMenuList = []

    if (menuList) {
      newMenuList = menuList
    } else {
      newMenuList = []
    }

    // let newMenuList = menuList ? JSON.parse(menuList) : []
    newMenuList.push(formData)
    this.globalService.saveData('menuList', newMenuList)
    console.log(newMenuList)
    alert('Menu Added Successfully')
    location.reload()
  }
}
