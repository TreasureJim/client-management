import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/Icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



const materialImports = [
  MatButtonModule, 
  MatGridListModule,
  MatCardModule,
  MatToolbarModule,
  MatIconModule, 
  MatAutocompleteModule,
  MatFormFieldModule, 
  MatInputModule,
]

@NgModule({
  imports: [ materialImports ], 
  exports: [ materialImports ]
})

export class MaterialModule {}