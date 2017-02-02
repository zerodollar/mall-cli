import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AlertModule, DatepickerModule } from 'ng2-bootstrap';
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { ToasterModule } from 'angular2-toaster/angular2-toaster';
import { environment } from '../environments/environment';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

export function createTranslateLoader( http: Http ) {
    return new TranslateStaticLoader( http, '../assets/i18n', '.json' );
}

let modules = [
    AlertModule.forRoot(),
    DatepickerModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AngularFireModule.initializeApp( environment.firebase ),
    TranslateModule.forRoot({
        deps: [Http],
        provide: TranslateLoader,
        useFactory: (createTranslateLoader)
    }),
    ToasterModule
];




import { UserService } from './services/user.service';
import { MessagesService } from './services/messages.service';
import { AuthService } from './services/auth.service';
import { CanActivateGuard } from './services/guard.service';
import { NotificationService } from './services/notification.service';
import { BreadcrumbService } from './services/breadcrumb.service';
import { AdminLTETranslateService } from './services/translate.service';
import { LoggerService } from './services/logger.service';
import { SysMenuService } from './services/sys-menu.service';
let services = [
    UserService,
    BreadcrumbService,
    MessagesService,
    AuthService,
    CanActivateGuard,
    NotificationService,
    AdminLTETranslateService,
    LoggerService,
    SysMenuService,
];
import { HomeComponent } from './pages/home/home.component';

import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './widgets/app-header/app-header.component';
import { MenuAsideComponent } from './widgets/menu-aside/menu-aside.component';
import { BreadcrumbComponent } from './widgets/breadcrumb/breadcrumb.component';
import { FooterComponent } from './widgets/footer/footer.component';
import { AsideComponent } from './widgets/aside/aside.component';
import { MessagesBoxComponent } from './widgets/messages-box/messages-box.component';
import { NotificationBoxComponent } from './widgets/notification-box/notification-box.component';
import { UserBoxComponent } from './widgets/user-box/user-box.component';
import { TasksBoxComponent } from './widgets/tasks-box/tasks-box.component';

@NgModule( {
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,

	HomeComponent,
	
        AppHeaderComponent,
        MenuAsideComponent,
	BreadcrumbComponent,
	FooterComponent,
	AsideComponent,
	MessagesBoxComponent,
	NotificationBoxComponent,
	UserBoxComponent,
	TasksBoxComponent,
    ],
    imports: [
        ...modules,
        routing
    ],
    providers: [
        ...services
    ]
})
export class AppModule { }
