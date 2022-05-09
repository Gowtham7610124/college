import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingComponent } from './billing/billing.component';
import { ClientsComponent } from './clients/clients.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { IndustryComponent } from './industry/industry.component';
import { OfficeComponent } from './office/office.component';
import { ProjectsComponent } from './projects/projects.component';
import { StorageComponent } from './storage/storage.component';

const routes: Routes = [
  {path:"billing",component:BillingComponent},
  {path:"clients",component:ClientsComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"employee",component:EmployeeComponent},
  {path:"industry",component:IndustryComponent},
  {path:"projects",component:ProjectsComponent},
  {path:"storage",component:StorageComponent},
  {path:"office",component:OfficeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
