import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  operations = [
    {
      name: "Who the fuck are you anyway",
      url: '/anyway/:company/:from',
      fields: [
        {
          name: 'Company',
          field: 'company'
        }, {
          name: 'From',
          field: 'from'
        }
      ]
    },
   {
    name:	"Asshole",
    url:	"/asshole/:from",
    fields: {
      name:	"From",
      field:	"from"
 }
  }
  
  ];
}
