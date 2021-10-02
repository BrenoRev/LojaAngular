import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myFor]'
})
export class MyforDirective implements OnInit{

  // <li *myFor="let n em [1,2,3]">{{n}}</li>
  @Input("myForEm") numbers!: number[];

  // Pega os manipuladores de tela
  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) { }
  
    // Faz um for e mostra na tela
  ngOnInit(): void {
    for(let number of this.numbers){
      this.container.createEmbeddedView(this.template, {$implicit: number})
    }
  }
}
