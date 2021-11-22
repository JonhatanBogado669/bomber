import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Entity, Solicitante } from 'src/app/models/solicitante';
import { SolicitanteService } from 'src/app/services/solicitante.service';




@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  id!: number;
  solicitante!: Solicitante;
  form!: FormGroup;
  
  constructor(
    public solicitanteService: SolicitanteService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['solicitanteId'];
    this.solicitanteService.find(this.id).subscribe((data: Entity)=>{
      this.solicitante = data.solicitante;
    });
    
    this.form = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      documento: new FormControl('', [Validators.required]),
      direccion: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required),
      servicio_id: new FormControl('', [Validators.required])

    });
  }
   
  get f(){
    return this.form.controls;
  }
     
  submit(){
    console.log(this.form.value);
    this.solicitanteService.update(this.id, this.form.value).subscribe(res => {
         console.log('Post updated successfully!');
         this.router.navigateByUrl('solicitante/index');
    })
  }

}
