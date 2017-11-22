import { Component, Input } from '@angular/core';

@Component({
  selector: 'user',
  template: `
    <div class="user">
      <div class="user-fullname">
        {{ firstName }} {{ lastName }}
      </div>
    </div>
  `,
})
export class UserComponent {

  @Input() firstName: string;
  @Input() lastName: string;

}
