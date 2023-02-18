import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { DemoRoutingModule } from '@feature/demo/demo-routing.module';
import { DemoFacade } from '@feature/demo/store/demo.facade';
import { demoFeature } from '@feature/demo/store/demo.reducer';
import { StoreModule } from '@ngrx/store';
import { DemoComponent } from './component/demo/demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [
    CommonModule,
    DemoRoutingModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    StoreModule.forFeature(demoFeature),
  ],
  providers: [DemoFacade],
})
export class DemoModule {}
