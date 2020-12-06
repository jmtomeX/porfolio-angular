import { ViewportScroller } from '@angular/common';
import { Component, OnInit, setTestabilityGetter } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

import Swal from 'sweetalert2';
import { element } from 'protractor';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public _MessageService: MessageService, private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
  }
  onclickScroll(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  contactForm(form) {
    this._MessageService.sendMessage(form).subscribe(() => {
      setTimeout(() => {
        Swal.fire('Formulario de contacto', 'Mensaje enviado correctamente', 'success');
        form.reset();
      }, 1000);
    });
  }

}
