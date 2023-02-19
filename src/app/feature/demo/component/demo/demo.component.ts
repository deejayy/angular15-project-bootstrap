import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DemoFacade } from '@feature/demo/store/demo.facade';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoComponent {
  public date$: Observable<Date> = this.demoFacade.date$;

  constructor(private demoFacade: DemoFacade) {}

  public updateState() {
    this.demoFacade.setDate(new Date());
  }
}
