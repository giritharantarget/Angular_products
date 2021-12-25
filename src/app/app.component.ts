import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template : `<div>{{title}}<h1>Product management</h1>
              <pm-products></pm-products>
              </div>`

})
export class AppComponent {
  title = 'apm-new';
}
