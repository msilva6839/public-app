import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  post: any = { title: '', body: '' };

  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.apiService.getPost(id).subscribe(data => {
      this.post = data;
    });
  }

  updatePost(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.apiService.updatePost(id, this.post).subscribe(() => {
      this.router.navigate(['/posts']);
    });
  }
}
