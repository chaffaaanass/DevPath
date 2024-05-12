import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './components/course/course-list/course.component';
import { CourseDetailsComponent } from './components/course/course-details/course-details.component';
import { CreateCourseComponent } from './components/course/create-course/create-course.component';
import { UpdateCourseComponent } from './components/course/update-course/update-course.component';
import { ModuleComponent } from './components/module/module-list/module.component';
import { ModuleDetailsComponent } from './components/module/module-details/module-details.component';
import { CreateModuleComponent } from './components/module/create-module/create-module.component';
import { UpdateModuleComponent } from './components/module/update-module/update-module.component';
import { AssignmentComponent } from './components/assignment/assignment-list/assignment.component';
import { AssignmentDetailsComponent } from './components/assignment/assignment-details/assignment-details.component';
import { CreateAssignmentComponent } from './components/assignment/create-assignment/create-assignment.component';
import { UpdateAssignmentComponent } from './components/assignment/update-assignment/update-assignment.component';
import { ProjectComponent } from './components/project/project-list/project.component';
import { ProjectDetailsComponent } from './components/project/project-details/project-details.component';
import { CreateProjectComponent } from './components/project/create-project/create-project.component';
import { UpdateProjectComponent } from './components/project/update-project/update-project.component';
import { ResourceComponent } from './components/resource/resource-list/resource.component';
import { ResourceDetailsComponent } from './components/resource/resource-details/resource-details.component';
import { CreateResourceComponent } from './components/resource/create-resource/create-resource.component';
import { UpdateResourceComponent } from './components/resource/update-resource/update-resource.component';
import { TechnologyComponent } from './components/technology/technology-list/technology.component';
import { TechnologyDetailsComponent } from './components/technology/technology-details/technology-details.component';
import { CreateTechnologyComponent } from './components/technology/create-technology/create-technology.component';
import { UpdateTechnologyComponent } from './components/technology/update-technology/update-technology.component';
import { AccessDeniedComponent } from './components/access/access-denied/access-denied.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register/register.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CourseComponent },
  { path: 'courses/:id', component: CourseDetailsComponent },
  { path: 'course/create', component: CreateCourseComponent },
  { path: 'course/:id/update', component: UpdateCourseComponent },
  { path: 'modules', component: ModuleComponent },
  { path: 'modules/:id', component: ModuleDetailsComponent },
  { path: 'module/create', component: CreateModuleComponent },
  { path: 'module/:id/update', component: UpdateModuleComponent },
  { path: 'assignments', component: AssignmentComponent },
  { path: 'assignments/:id', component: AssignmentDetailsComponent },
  { path: 'assignment/create', component: CreateAssignmentComponent },
  { path: 'assignment/:id/update', component: UpdateAssignmentComponent },
  { path: 'projects', component: ProjectComponent },
  { path: 'projects/:id', component: ProjectDetailsComponent },
  { path: 'project/create', component: CreateProjectComponent },
  { path: 'project/:id/update', component: UpdateProjectComponent },
  { path: 'resources', component: ResourceComponent },
  { path: 'resources/:id', component: ResourceDetailsComponent },
  { path: 'resource/create', component: CreateResourceComponent },
  { path: 'resource/:id/update', component: UpdateResourceComponent },
  { path: 'technologies', component: TechnologyComponent },
  { path: 'technologies/:id', component: TechnologyDetailsComponent },
  { path: 'technology/create', component: CreateTechnologyComponent },
  { path: 'technology/:id/update', component: UpdateTechnologyComponent },
  { path: 'access-denied', component: AccessDeniedComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
