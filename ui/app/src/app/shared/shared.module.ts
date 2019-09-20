import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RoundImageComponent } from './round-image/round-image.component';
import { CompanyDescComponent } from './company-desc/company-desc.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, FooterComponent, RoundImageComponent, CompanyDescComponent, SideBarComponent],
  exports: [HeaderComponent, FooterComponent, SideBarComponent, RoundImageComponent]
})
export class SharedModule { }
