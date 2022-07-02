import SearchPage from "../pages/SearchPage";
import ProductPage from "../pages/ProductPage";


export const routes = [
      { path: '/', component: <SearchPage/>, exact: true },
      { path: '/:bookId', component: <ProductPage/>, exact: true}
]