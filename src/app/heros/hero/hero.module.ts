import { NgModule } from "@angular/core";
import { HeroComponent } from "./components/hero.component";

@NgModule({
  declarations: [
    HeroComponent
  ],
  exports: [
    HeroComponent
  ]
})
export class HeroModule {

}
