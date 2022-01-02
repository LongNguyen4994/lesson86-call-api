import './App.scss';
import Menu from './components/Menu/Menu';
import { Outlet, Route, Routes } from 'react-router-dom';

import routes from './routes';

function ShowRoutes({routes}) {
   let res = null;
   if (routes.length > 0) {
      res = routes.map((route, index) => {
         return (
            <Route
               key={index}
               path={route.path}
               element={route.element()}

            />
         );
      });
   }
   return <Routes>{res}</Routes>;
}


function App() {
   // let routeList = showRoutes(routes);
   return (
      <div>
         <Menu />
         <Outlet />
      
         {/* {routeList} */}
         <ShowRoutes routes={routes}/>
         <br />
      </div>
   );
}

export default App;



