import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsdashComponent } from './shared/component/postsdash/postsdash.component';
import { PostComponent } from './shared/component/post/post.component';
import { PostformComponent } from './shared/component/postform/postform.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PostcardComponent } from './shared/component/postcard/postcard.component';
import { AuthInterceptor } from './shared/service/auth-interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarerialModule } from './marerial/marerial.module';
import { GetconfirmComponent } from './shared/component/getconfirm/getconfirm.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsdashComponent,
    PostComponent,
    PostformComponent,
    NavbarComponent,
    PostcardComponent,
    GetconfirmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MarerialModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
