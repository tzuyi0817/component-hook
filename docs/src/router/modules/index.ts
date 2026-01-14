import { cliRoutes } from './cli';
import { componentRoutes } from './component';
import { eslintRoutes } from './eslint';
import { homeRoutes } from './home';

export const allRoutes = [...homeRoutes, ...cliRoutes, ...eslintRoutes, ...componentRoutes];
