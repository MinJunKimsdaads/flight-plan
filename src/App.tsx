import Controler from "./components/controler/Controler"
import MapViewer from "./components/map/MapViewer"
import RightMenu from "./components/RightMenu/RightMenu"
import TopMenu from "./components/topMenu/TopMenu";
import WidgetWrap from "./components/widget/WidgetWrap";
import { WIDGET } from "./constants/controlerConstant";
import { useControlerStore } from "./store/controlerStore";
import { useMenuStore } from "./store/menuStore";

function App() {
  const menu = useMenuStore(state => state.menu);
  const control = useControlerStore(state => state.control);
  return (
    <>
      <MapViewer></MapViewer>
      <TopMenu></TopMenu>
      <Controler></Controler>
      {
        menu && <RightMenu></RightMenu> 
      }
      {
        control === WIDGET && <WidgetWrap></WidgetWrap>
      }
    </>
  )
}

export default App;
