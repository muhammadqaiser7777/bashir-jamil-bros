import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AboutUs } from './pages/about-us/about-us';
import { ContactUs } from './pages/contact-us/contact-us';
import { SergicalSets } from './pages/sergical-sets/sergical-sets';
import { Products } from './pages/products/products';
import { Catalogues } from './pages/catalogues/catalogues';
import { Certifications } from './pages/certifications/certifications';
import { OurWork } from './pages/our-work/our-work';
import { Facility } from './facility/facility';
import { GlobalDistributors } from './global-distributors/global-distributors';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about-us', component: AboutUs },
  { path: 'contact-us', component: ContactUs },
  { path: 'sergical-sets', component: SergicalSets },
  { path: 'products', component: Products },
  { path: 'catalogues', component: Catalogues },
  { path: 'certifications', component: Certifications },
  { path: 'our-work', component: OurWork },
  { path: 'facility', component: Facility },
  { path: 'global-distributors', component: GlobalDistributors },
  { path: '**', redirectTo: '' }
];