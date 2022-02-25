/* eslint-disable no-unused-vars */
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//routes are imported from the js files
import ProfilePage from './Profile/ProfilePage';
import Myads from './Components/myads';
import Categoryscreen from './Category/Categoryscreen';
import ProductPage from './Product/ProductPage';
import ViewProfile from './ViewProfile/ViewProfile';

import PropCatPage from './SubCat1/PropCatPage';
import SpoCatPage from './SubCat2/SpoCatPage';
import BikeCatPage from './SubCat3/BikeCatPage';
import FunCatPage from './SubCat4/FunCatPage';
import ProfileDashBoardPage from './ProfileDash/ProfileDashBoardPage';
import Homepage from './Mainpages/Homepage';
import Loginpage from './Mainpages/Loginpage';
import Furniture from './pages/Furniture';
import Laptops from './pages/Laptops';
import Phones from './pages/Phones';
import Accessories from './pages/Accessories';
import Cameras from './pages/Cameras';
import Cycles from './pages/Cycles';
import Signup from './Mainpages/Signup';
import ProductDetails from './Mainpages/ProductDetails'
import {DataProvider} from "./ProductsAPI/GlobalState"

import useToken from './Authentication/useToken';


//App.js contains various routes present in the entire page
function App() {
  const { token, setToken } = useToken();

  // if(!token) {
  //   return <Loginpage setToken={setToken} />
  // }
  
  return (
//    /* DataProvider component is imported from "src/component/ProductsAPI/GlobalState.js" */
    <DataProvider>
      <div className="App">
        
    {/*Routes and route are imported from the react-router-dom which are used for routing to different pages in the website*/}
          <Routes>
    
          {/* Homepage component is imported from "src/component/Mainpages/Homepage.js" */}
                  <Route exact path="/" element={<Homepage />}>
                    </Route>

          {/* Loginpage component is imported from "src/component/Mainpages/Loginpage.js" */}
                  <Route exact path="/login" element={<Loginpage setToken={setToken}/>}>
                  </Route>

          {/* Signup component is imported from "src/component/Mainpages/Signup.js" */}
                  <Route exact path="/signup" element={<Signup/>}>
                  </Route>

            {/* ViewProfile component is imported from "src/component/ViewProfile/ViewProfile.js" */}
                  <Route exact path="/viewprofile" element={<ViewProfile />}>
                    </Route>

          {/* ProfilePage component is imported from "src/component/Profile/ProfilePage.js" */}
                  <Route exact path="/editprofile" element={<ProfilePage />}>
                    </Route>

          {/* Myads component is imported from "src/component/Components/myads.js" */}
                  <Route exact path="/myads" element={<Myads />}>
                    </Route>

           {/* Categoryscreen component is imported from "src/component/Category/Categoryscreen.js" */}               
                  <Route exact path="/category" element={<Categoryscreen />}>
                    </Route>

            {/* ProductPage component is imported from "src/component/Product/ProductPage.js" */}              
                  <Route exact path="/product" element={<ProductPage />}>
                    </Route>

              {/* PropCatPage component is imported from "src/component/SubCat1/PropCatPage.js" */}            
                  <Route exact path="/propertySubcategory" element={<PropCatPage />}>
                    </Route>

           {/* SpoCatPage component is imported from "src/component/SubCat2/SpoCatPage.js" */}             
                  <Route exact path="/sportssubcategory" element={<SpoCatPage />}>
                    </Route>

            {/* BikeCatPage component is imported from "src/component/SubCat3/BikeCatPage.js" */}              
                  <Route exact path="/bikessubcategory" element={<BikeCatPage />}>
                    </Route>

           {/* FunCatPage component is imported from "src/component/SubCat4/FunCatPage.js" */}             
                  <Route exact path="/functionssubcategory" element={<FunCatPage />}>
                    </Route>

            {/* ProfileDashBoardPage component is imported from "src/component/ProfileDash/ProfileDashBoardPage.js" */}              
                  <Route exact path="/profiledashboard" element={<ProfileDashBoardPage />}>
                    </Route>

          {/* Phones component is imported from "src/component/pages/Phones.js" */}
                  <Route exact path="/phones" element={<Phones />}>
                  </Route>

          {/* Furniture component is imported from "src/component/pages/Furniture.js" */}
                  <Route exact path="/furtinures" element={<Furniture />}> 
                  </Route>

          {/* Navbar component is imported from "src/component/pages/Laptops.js" */}
                  <Route exact path="/laptops" element={<Laptops />}>
                  </Route>

          {/* Accessories component is imported from "src/component/pages/Accessories.js" */}
                  <Route exact path="/accessories" element={<Accessories />}>
                  </Route>

          {/* Cameras component is imported from "src/component/pages/Cameras.js" */}
                  <Route exact path="/cameras" element={<Cameras />}>
                  </Route>

          {/* Cycles component is imported from "src/component/pages/Cycles.js" */}
                  <Route exact path="/cycle" element={<Cycles />}>
                  </Route>

          {/* ProductDetails component is imported from "src/Mainpages/ProductDetails.js" */}
                  <Route exact path="/productDetails" element={<ProductDetails />}>
                  </Route>

          {/* This route is for routing to an error page */}
                  <Route>
                  Error 404 - page not found!
                  </Route>
          </Routes>
          
      </div>
    </DataProvider>
  );
}

export default App;

