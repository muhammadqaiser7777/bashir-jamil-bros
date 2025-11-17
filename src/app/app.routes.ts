import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { AboutUs } from './pages/about-us/about-us';
import { Products } from './pages/products/products';
import { Facilities } from './pages/facilities/facilities';
import { Mission } from './pages/mission/mission';
import { QualityAssurance } from './pages/quality-assurance/quality-assurance';
import { Distributors } from './pages/distributors/distributors';
import { Media } from './pages/media/media/media';
import { Testimonials } from './pages/media/testimonials/testimonials';
import { Blogs } from './pages/media/blogs/blogs';
import { ContactUs } from './pages/contact-us/contact-us';


export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about-us', component: AboutUs },
  { path: 'products', component: Products },
  { path: 'facilities', component: Facilities },
  { path: 'mission', component: Mission },
  { path: 'qa', component: QualityAssurance },
  { path: 'distributors', component: Distributors },
  { path: 'media', component: Media },
  { path: 'testimonials', component: Testimonials },
  { path: 'blogs', component: Blogs },
  { path: 'contact-us', component: ContactUs },
  { path: '**', redirectTo: '' }
];