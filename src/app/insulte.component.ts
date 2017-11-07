import { Component, OnInit } from '@angular/core';
import { insulteService } from "./insulte.service";

@Component({
    template: `
   <div class="app container">
   <div class="row">
           <h1 class="col-3">
             Un Super Blog
           </h1>
       </div>
       <div class="row">
         <button type="button"
           class="btn btn-primary"
           (click)="addArticle()">
           Add article
         </button>
       </div>

       <div class="row">

         <h3 class="col" *ngIf="articles?.length"> Nombre d'articles: {{ articles?.length }} </h3>

       </div>
       <div class="row">
         <div class="col-sm-6">
           <a  routerLink="/article/{{article.id}}" routerLinkActive="active" [class]="(article.likes > article.dislikes) ? 'card mb-3 border-success' : 'card mb-3 border-danger'" *ngFor="let article of articles; let i = index;">
             <div class="card-header">
               {{article.title}}
             </div>
             <img [src]="article.thumbnail" class="card-img-top"/>
             <div class="card-footer">

               <h6 class="card-subtitle mb-2 text-muted">{{article.creationDate | date : 'd MMMM y' }}</h6>

               <span class="fa fa-thumbs-o-up"></span>
               <span class="ml-1">{{article.likes}}</span>
               <span class="fa fa-thumbs-o-down ml-2"></span>
               <span class="ml-1">{{article.dislikes}}</span>
               <button type="button"
                 class="btn btn-danger"
                 (click)="deleteArticle(article)">
                 Delete Article
               </button>
             </div>
           </a>
         </div>
       </div>
   </div>
 `
})
export class InsulteComponent implements OnInit {
    operations: any[];

    constructor(private insulteService: insulteService) {
    }

    ngOnInit(): void {
        this.insulteService.getOperations()
            .subscribe((data: any[]) => {
                this.operations = data;
            });
    }

}
