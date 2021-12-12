import { Component, OnInit,Input, ViewChild } from '@angular/core';
import { FormBuilder , FormGroup , Validators } from '@angular/forms';
import { DishService } from '../services/dish.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { Comment } from '../shared/comment';

import { Dish } from '../shared/dish';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

  @ViewChild('cform') commentFormDirective: any;
  @Input()
  commentForm!: FormGroup;
  comment!: Comment;
  dishIds!: string[];
  prev!: string;
  next!: string;
  dish!: Dish;

  cDate: Date = new Date(Date.now());
  formErrors : any = {
    author : '',
    comment : ''
  };
  validationMessages : any = {
    author : {
      required : 'The name is required.',
      minlength : 'The name must be at least 3 characters long.',
      maxlength : 'The name cannot be more than 30 characters long.'
    },
    comment : {
      required : 'The comment is required.',
      minlength : 'The comment must be at least 3 characters long.'
    }
  }
  

  constructor(private fb: FormBuilder, private dishService: DishService, private route: ActivatedRoute, private location: Location) {
    this.creatForm();
   }

  ngOnInit(): void {
    this.dishService.getDishIds()
      .subscribe((dishIds)=> this.dishIds = dishIds);
    this.route.params.pipe(switchMap((params: Params) => this.dishService.getDish(params['id'])))
      .subscribe(dish => {this.dish = dish; this.setPrevNext(dish.id);});
      
  };


  setPrevNext(dishId: string) {
    const index = this.dishIds.indexOf(dishId);
    this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
  }

  goBack(): void {
    this.location.back();
  }

  onSubmit(): void {
    this.comment.date = this.cDate.toISOString();
    this.dish.comments[this.dish.comments.length] = this.comment;
    this.commentFormDirective.resetForm();
    this.commentForm.reset({
      rating: 5,
      comment: '',
      author: '',
      date: ''
    });
  }

  creatForm() {
    this.commentForm = this.fb.group({
      rating: 5,
      comment: ['',[Validators.required,Validators.minLength(3)]],
      author: ['',[Validators.required,Validators.minLength(3),Validators.maxLength(30)]],
      date: ''
    });
    this.commentForm.valueChanges.subscribe(data => this.onValueChange(data));
    this.onValueChange();
  }
  onValueChange(data?:any) {
    if(!this.commentForm) {return;}
    for(let field in this.formErrors) {
      this.formErrors[field] = '';
      let Ffield = this.commentForm.get(field);
      if(Ffield && Ffield.dirty && !Ffield.valid) {
        let errM = this.validationMessages[field];
        for(let er in Ffield.errors) {
          if(Ffield.errors.hasOwnProperty(er)) 
          { this.formErrors[field] += errM[er] + " "; }
        }
      }
    }
    if(this.commentForm.valid) { this.comment = this.commentForm.value; }
  }



}
