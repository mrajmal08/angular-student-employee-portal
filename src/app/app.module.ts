import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmDialogComponent } from 'shared/dialogs/confirm-dialog/confirm-dialog.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent, ConfirmDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserAnimationsModule, // Required for Angular Material
    MatDialogModule,
    MatButtonModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-center', // Default top-center
      progressBar: true, // Enable progress bar
      progressAnimation: 'decreasing', // Decreasing progress
      timeOut: 5000, // Auto close after 5s
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
