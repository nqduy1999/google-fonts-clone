import { SharedPaths } from './shared-paths.const';

export class RouteConst extends SharedPaths {
  static get PUBLIC_ROUTES() {
    return [this.HOME_ROUTE, this.SNIPER_ROUTE];
  }

  static ERROR_LAYOUT_ROUTES() {
    return [this.NOT_FOUND_ERROR_ROUTE, this.UNEXPECTED_ERROR_ROUTE];
  }
}
