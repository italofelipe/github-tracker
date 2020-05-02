import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import Main from "./pages/Main";
import User from "./pages/User";

// Todos os tipos de navegacao devem vir dentro do createAppContainer
const Routes = createAppContainer(
  createStackNavigator(
    // recebe como primeiro param os componentes que queremos como rotas
    {
      Main,
      User
    },
    {
      headerLayoutPreset: "center",
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: "#468C98"
        },
        headerTintColor: "#FFF"
      }
    }
  )
);

export default Routes;
