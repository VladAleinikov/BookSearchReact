import ProductPage from "../pages/ProductPage";
import SearchPage from "../pages/SearchPage";

export const routes = [
      { path: 'main', component: SearchPage, exact: true },
      {path: '/:name', component: ProductPage, exact: true}
]