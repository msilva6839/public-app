import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
})
export class MiModalComponent {
  constructor(private router: Router, public modal: NgbActiveModal) {}

  irAlListado() {
    this.modal.close();
    this.router.navigate(['/posts']);
  }
}
