import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
})
export class SideNavComponent {
  @Input() content: any;
  showFiller = false;
  @Input() selectedUser: any;
}
