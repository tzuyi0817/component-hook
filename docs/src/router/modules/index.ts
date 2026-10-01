import { cliRoutes } from './cli';
import { componentRoutes } from './component';
import { homeRoutes } from './home';
import { lintRoutes } from './lint';

export const allRoutes = [...homeRoutes, ...cliRoutes, ...lintRoutes, ...componentRoutes];
