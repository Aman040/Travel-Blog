import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post?: Post;
  @Input() index: number=0;
  constructor(private postService: PostService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
 
    
  }
    postDelete(){
      console.log('onDelete fuction Called');
      this.postService.deletePost(this.index);
      
    }

    onEdit(){
      this.router.navigate(["/post-edit",this.index]);
    }
    likePost(){
     
      this.postService.likePost(this.index)
      
    }
    dislikePost(){
      console.log('in like Post');
      this.postService.dislikePost(this.index)
      
    }
}
