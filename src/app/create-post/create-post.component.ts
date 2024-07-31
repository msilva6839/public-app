import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  post = { title: '', body: '' };

  constructor(private apiService: ApiService, private router: Router) { }

  savePost(): void {
    this.apiService.createPost(this.post).subscribe(() => {
      this.router.navigate(['/posts']);
    });
  }
}
