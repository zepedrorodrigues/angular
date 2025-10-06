import { ProfileComponent } from './components/profile/profile.component';
import { LinkItemComponent } from './components/link-item/link-item.component';
import { LinkListComponent } from './components/link-list/link-list.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    ProfileComponent,
    LinkItemComponent,
    LinkListComponent,
    AppComponent,
  ],
  imports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }