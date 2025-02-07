import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { MemberListComponent } from './member-list/member-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MemberModalComponent } from './member-list/member-modal/member-modal.component';
import { ColorFontDirective } from './directives/color-font.directive';
import { DragAndDropDirective } from './directives/drag-and-drop.directive';
import { TypeCounterComponent } from './member-list/type-counter/type-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    AddMemberComponent,
    MemberListComponent,
    MemberModalComponent,
    ColorFontDirective,
    DragAndDropDirective,
    TypeCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
