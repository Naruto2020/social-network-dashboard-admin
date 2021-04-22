import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { HighchartsChartModule } from 'highcharts-angular';


import {HeaderComponent} from '../shared/components/header/header.component';
import {FooterComponent} from '../shared/components/footer/footer.component';
import {SidebarComponent} from '../shared/components/sidebar/sidebar.component';
import { Card1Component } from './widget/card1/card1.component';
import { Card2Component } from './widget/card2/card2.component';
import { Card3Component } from './widget/card3/card3.component';
import { Card4Component } from './widget/card4/card4.component';
import { AreaComponent } from './widget/area/area.component';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    Card1Component,
    Card2Component,
    Card3Component,
    Card4Component,
    AreaComponent,

  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,
    RouterModule,
    MatCardModule,
    HighchartsChartModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    Card1Component,
    Card2Component,
    Card3Component,
    Card4Component,
    AreaComponent

  ]
})
export class SharedModule { }
