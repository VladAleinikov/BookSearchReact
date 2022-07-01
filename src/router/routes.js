import SearchPage from "../pages/SearchPage";
import ProductPage from "../pages/ProductPage";


export const routes = [
      { path: '/main', component: <SearchPage/>, exact: true },
      { path: '/:name', component: <ProductPage/>, exact: true}
]