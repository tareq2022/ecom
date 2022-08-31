import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ProductserviceService } from 'app/productservice.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  addproduct: FormGroup;
  proddata: any;
  //addproduct: FormGroup = new FormGroup({});

  constructor(private formbuilder : FormBuilder,private prodservice : ProductserviceService) {
    this.addproduct = this.formbuilder.group({
      prodname:[''],
      proddes: ['']
    })
   }

  ngOnInit() {
    this.addproduct = this.formbuilder.group({
      'prodname': new FormControl(''),
      'proddes': new FormControl('')
    })

    this.prodservice.Getproduct().subscribe((prod: any) =>{
      this.proddata = prod;
      console.log(this.proddata);
    })
  }

  onAddProd(): void {
    let addprod = {
      ITEM_CODE: this.addproduct.get('prodname').value,
      ITEM_DESCRIPTION: this.addproduct.get('proddes').value,
    }
    //console.log(addprod)
    this.prodservice.CreateProduct(addprod).subscribe(data => {
    console.log(data);
      alert('Successfully added');
      this.addproduct.reset()
    },error => {alert("Got Error, Category not added!"); console.log(error);
    });
  }

  // createproduct(){
  //   //console.log(this.addproduct.value);

  //   this.prodservice.CreateProduct(this.addproduct.value).subscribe(data => {
  //     console.log("Product Created")
  //   }, err =>{
  //     console.log(err);
  //   })
  // }

}
