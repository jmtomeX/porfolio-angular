import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';
// import * as _swal from 'sweetAlert';
// import { SweetAlert } from 'sweetAlert/typings/core';

 // const swal: SweetAlert = _swal as any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public _MessageService: MessageService) { }

  ngOnInit(): void {
  }
  contactForm(form) {
    this._MessageService.sendMessage(form).subscribe(() => {
    //  swal('Formulario de contacto', 'Mensaje enviado correctamente', 'success');
    });
  }

}
