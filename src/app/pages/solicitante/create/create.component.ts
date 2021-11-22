import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { SolicitanteService } from 'src/app/services/solicitante.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  form!: FormGroup;
   
  constructor(
    public solicitanteService: SolicitanteService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.form = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      documento: new FormControl('', [Validators.required]),
      direccion: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required),
      servicio_id: new FormControl('', [Validators.required]),

    });
  }
   
  get f(){
    return this.form.controls;
  }
    
  submit(){
    console.log(this.form.value);
    this.solicitanteService.create(this.form.value).subscribe(res => {
         console.log('Post created successfully!');
         this.router.navigateByUrl('solicitante/index');
    })
  }

}
