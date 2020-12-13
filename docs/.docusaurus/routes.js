
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  
{
  path: '/nautilus_stack/',
  component: ComponentCreator('/nautilus_stack/'),
  exact: true,
  
},
{
  path: '/nautilus_stack/blog',
  component: ComponentCreator('/nautilus_stack/blog'),
  exact: true,
  
},
{
  path: '/nautilus_stack/blog/hello-world',
  component: ComponentCreator('/nautilus_stack/blog/hello-world'),
  exact: true,
  
},
{
  path: '/nautilus_stack/blog/hola',
  component: ComponentCreator('/nautilus_stack/blog/hola'),
  exact: true,
  
},
{
  path: '/nautilus_stack/blog/tags',
  component: ComponentCreator('/nautilus_stack/blog/tags'),
  exact: true,
  
},
{
  path: '/nautilus_stack/blog/tags/docusaurus',
  component: ComponentCreator('/nautilus_stack/blog/tags/docusaurus'),
  exact: true,
  
},
{
  path: '/nautilus_stack/blog/tags/facebook',
  component: ComponentCreator('/nautilus_stack/blog/tags/facebook'),
  exact: true,
  
},
{
  path: '/nautilus_stack/blog/tags/hello',
  component: ComponentCreator('/nautilus_stack/blog/tags/hello'),
  exact: true,
  
},
{
  path: '/nautilus_stack/blog/tags/hola',
  component: ComponentCreator('/nautilus_stack/blog/tags/hola'),
  exact: true,
  
},
{
  path: '/nautilus_stack/blog/welcome',
  component: ComponentCreator('/nautilus_stack/blog/welcome'),
  exact: true,
  
},
{
  path: '/nautilus_stack/docs/:route',
  component: ComponentCreator('/nautilus_stack/docs/:route'),
  
  routes: [
{
  path: '/nautilus_stack/docs/config_params',
  component: ComponentCreator('/nautilus_stack/docs/config_params'),
  exact: true,
  
},
{
  path: '/nautilus_stack/docs/getting_started',
  component: ComponentCreator('/nautilus_stack/docs/getting_started'),
  exact: true,
  
},
{
  path: '/nautilus_stack/docs/install_nautilus',
  component: ComponentCreator('/nautilus_stack/docs/install_nautilus'),
  exact: true,
  
},
{
  path: '/nautilus_stack/docs/run_nautilus',
  component: ComponentCreator('/nautilus_stack/docs/run_nautilus'),
  exact: true,
  
},
{
  path: '/nautilus_stack/docs/running_example_bags',
  component: ComponentCreator('/nautilus_stack/docs/running_example_bags'),
  exact: true,
  
},
{
  path: '/nautilus_stack/docs/vectorize',
  component: ComponentCreator('/nautilus_stack/docs/vectorize'),
  exact: true,
  
},
{
  path: '/nautilus_stack/docs/write_config',
  component: ComponentCreator('/nautilus_stack/docs/write_config'),
  exact: true,
  
}],
},
  
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
