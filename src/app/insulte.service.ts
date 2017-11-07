import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";


const API_URL: string = "http://foaas.com/";

@Injectable()
export class insulteService {

    constructor(private http: HttpClient) {

    }

    getOperations(): Observable<any[]> {
        return this.http
            .get<any[]>(API_URL + "operations");
    }

    // addArticle(newArticle: Article) {
    //   return this.http
    //     .post<Article>(API_URL, newArticle);
    // }

    // deleteArticle(deleteArticle: Article) {
    //   return this.http
    //     .delete<Article>(API_URL + deleteArticle.id);
    // }

}