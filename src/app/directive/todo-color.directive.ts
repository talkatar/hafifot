import { Directive,OnInit,Input,HostBinding } from '@angular/core';

@Directive({
  selector: '[todoColor]'
})
export class TodoColorDirective implements OnInit {
  //ofir-cr
  @Input('todoColor') todo:string='';
   todosplittedwords:string[] = [];
  colors:string[]=['red','blue','yellow','grey','pink'];

  ngOnInit(): void {
    this.todosplittedwords=this.todo.split(' ');
    this.todosplittedwords.forEach((word)=> {if (this.colors.includes(word.toLowerCase())) this.color=word.toLowerCase()}); 
  } 

@HostBinding('style.backgroundColor')
color='';
}