import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageDetailComponent } from './components/page-detail/page-detail.component';
import { PageComponent } from './components/page.component';

const routes: Routes = [
    {
        path: '', component: PageComponent, children: [
            { path: ':id', component: PageDetailComponent }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class PageRoutingModule {}