import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MiModalComponent } from '../success-modal/success-modal.component';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css'],
})
export class EditPostComponent implements OnInit {
  post: any = { title: '', body: '' };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    const postId = +this.route.snapshot.paramMap.get('id')!;
    this.apiService.getPost(postId).subscribe((data) => {
      this.post = data;
    });
  }

  updatePost(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.apiService.updatePost(this.post.id, this.post).subscribe(
      (response: any) => {
        this.openSuccessModal();
      },
      (error: any) => {
        console.error('Error updating post:', error);
      }
    );
  }

  openSuccessModal(): void {
    const modalRef = this.modalService.open(MiModalComponent);
    modalRef.result.then(
      (result) => {
        this.router.navigate(['/posts']);
      },
      (reason) => {
        this.router.navigate(['/posts']);
      }
    );
  }
}
