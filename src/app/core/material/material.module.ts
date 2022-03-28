import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { MatAutocompleteModule} from '@angular/material/autocomplete'
import {MatTabsModule} from '@angular/material/tabs'
const MaterialComponents=[
  MatIconModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatButtonModule,
  MatDividerModule,
  MatListModule,
  MatSidenavModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatChipsModule,
  MatAutocompleteModule,
  MatTabsModule
];

@NgModule({
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
