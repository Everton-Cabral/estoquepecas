import { createRouter, createWebHistory} from 'vue-router'

import AppContainer from '@/components/AppContainer'
import AppRelatorio from '@/components/AppRelatorio'


const routes = [
    {
      path: '/',
      component: AppContainer
    },
    {
        path: '/relatorio',
        component: AppRelatorio
    }
   
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  export default router;