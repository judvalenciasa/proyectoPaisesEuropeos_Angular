
import { Component } from '@angular/core';
import { PaisesService } from './servicios/paises.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  paises:any[];
  constructor(private servicioPaises:PaisesService){
    
  }

  async ngOnInit(){
    this.paises = await this.servicioPaises.getPaises();
    console.log(this.paises);
  }

}
