import { Component } from '@angular/core';
import { FirstBlockComponent } from '../../features/first-block/first-block.component';
import { SecondBlockComponent } from '../../features/second-block/second-block.component';
import { ThirdBlockComponent } from '../../features/third-block/third-block.component';
import { LocalStorageCrudModalComponent } from '../local-storage-crud-modal/local-storage-crud-modal.component';

@Component({
  selector: '[app-content]',
  standalone: true,
  imports: [
    FirstBlockComponent,
    SecondBlockComponent,
    ThirdBlockComponent,
    LocalStorageCrudModalComponent,
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
  host: { class: 'content' },
})
export class ContentComponent {}
