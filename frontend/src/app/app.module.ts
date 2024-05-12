import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './components/course/course-list/course.component';
import { HttpClientModule } from '@angular/common/http';
import { AssignmentComponent } from './components/assignment/assignment-list/assignment.component';
import { ModuleComponent } from './components/module/module-list/module.component';
import { ProjectComponent } from './components/project/project-list/project.component';
import { ResourceComponent } from './components/resource/resource-list/resource.component';
import { TechnologyComponent } from './components/technology/technology-list/technology.component';
import { CourseDetailsComponent } from './components/course/course-details/course-details.component';
import { CreateCourseComponent } from './components/course/create-course/create-course.component';
import { FormsModule } from '@angular/forms';
import { UpdateCourseComponent } from './components/course/update-course/update-course.component';
import { ModuleDetailsComponent } from './components/module/module-details/module-details.component';
import { CreateModuleComponent } from './components/module/create-module/create-module.component';
import { UpdateModuleComponent } from './components/module/update-module/update-module.component';
import { AssignmentDetailsComponent } from './components/assignment/assignment-details/assignment-details.component';
import { CreateAssignmentComponent } from './components/assignment/create-assignment/create-assignment.component';
import { UpdateAssignmentComponent } from './components/assignment/update-assignment/update-assignment.component';
import { ProjectDetailsComponent } from './components/project/project-details/project-details.component';
import { CreateProjectComponent } from './components/project/create-project/create-project.component';
import { UpdateProjectComponent } from './components/project/update-project/update-project.component';
import { ResourceDetailsComponent } from './components/resource/resource-details/resource-details.component';
import { CreateResourceComponent } from './components/resource/create-resource/create-resource.component';
import { UpdateResourceComponent } from './components/resource/update-resource/update-resource.component';
import { TechnologyDetailsComponent } from './components/technology/technology-details/technology-details.component';
import { CreateTechnologyComponent } from './components/technology/create-technology/create-technology.component';
import { UpdateTechnologyComponent } from './components/technology/update-technology/update-technology.component';
import { AccessDeniedComponent } from './components/access/access-denied/access-denied.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register/register.component';
import { AuthService } from './services/auth/auth-service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AssignmentComponent,
    ModuleComponent,
    ProjectComponent,
    ResourceComponent,
    TechnologyComponent,
    CourseDetailsComponent,
    CreateCourseComponent,
    UpdateCourseComponent,
    ModuleDetailsComponent,
    CreateModuleComponent,
    UpdateModuleComponent,
    AssignmentDetailsComponent,
    CreateAssignmentComponent,
    UpdateAssignmentComponent,
    ProjectDetailsComponent,
    CreateProjectComponent,
    UpdateProjectComponent,
    ResourceDetailsComponent,
    CreateResourceComponent,
    UpdateResourceComponent,
    TechnologyDetailsComponent,
    CreateTechnologyComponent,
    UpdateTechnologyComponent,
    AccessDeniedComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService, JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
