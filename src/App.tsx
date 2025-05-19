import Controler from "./components/map/controler/Controler"
import MapViewer from "./components/map/MapViewer"
import RightMenu from "./components/RightMenu/RightMenu"

function App() {
  return (
    <>
      <MapViewer></MapViewer>
      <Controler></Controler>
      <RightMenu></RightMenu>
    </>
  )
}

export default App;
