import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import * as Material from "@angular/material";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    // Navbar
    Material.MatTabsModule,
    Material.MatSidenavModule,
    Material.MatToolbarModule,
    Material.MatListModule,
    Material.MatMenuModule,
    Material.MatIconModule,

    // Forms
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatButtonModule,
    Material.MatRadioModule,

    Material.MatCardModule
  ],
  exports: [
    CommonModule,

    // Navbar
    Material.MatTabsModule,
    Material.MatSidenavModule,
    Material.MatToolbarModule,
    Material.MatListModule,
    Material.MatMenuModule,
    Material.MatIconModule,

    // Forms
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatButtonModule,
    Material.MatRadioModule,

    Material.MatCardModule
  ]
})
export class MaterialModule {}
