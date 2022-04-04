import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {

  public form: FormGroup = new FormGroup({})

  public InformationText!: 'valid' | 'invalid'
  
  constructor(private fb: FormBuilder) { 
    this.form = this.fb.group({
      directive: ['',[Validators.required,Validators.minLength(9),Validators.maxLength(11)]]
    })
  }

  ngOnInit(): void {
  }
  onSubmit(){    
    if(this.form.status == 'VALID'){
      this.InformationText = 'valid'
    }else{
      this.InformationText = 'invalid'
    }
    
  }

}
