import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
//import swal from 'sweetalert';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(public _MessageService:MessageService) { }

  ngOnInit(): void {
  }
  contactForm(form) {
    this._MessageService.sendMessage(form).subscribe(() => {
      Swal.fire("Formulario de contacto", "Mensaje enviado correctamente", 'success');
    });
  }
}
