import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ApiCallerService } from '@deejayy/api-caller';
import { DemoFacade } from '@feature/demo/store/demo.facade';
import { Observable, of } from 'rxjs';

interface DataModel {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoComponent {
  public date$: Observable<Date> = this.demoFacade.date$;

  public displayedColumns: string[] = ['id', 'name', 'username', 'email', 'address', 'phone', 'website', 'company'];

  public data$: Observable<DataModel[]> = of([]);

  private simpleCallItem = {
    api: 'https://jsonplaceholder.typicode.com/',
    path: 'users#1',
  };

  constructor(private demoFacade: DemoFacade, private apiCallerService: ApiCallerService) {
    this.data$ = this.apiCallerService.createApiResults<DataModel[]>(this.simpleCallItem).data$;
  }

  public updateState() {
    this.demoFacade.setDate(new Date());
  }

  public fetchApi() {
    this.apiCallerService.callApi<DataModel[]>(this.simpleCallItem);
  }
}
