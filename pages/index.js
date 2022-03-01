
import MyBar from "./MyBar"
import MyLine from "./MyLine"

export default function Home() {
  
  
  return (<>
  
    <h1>Test Line Chart</h1>
    <div className="Chart">
      <MyLine/>
    </div>
    <h1>Test Bar Chart</h1>
    <div className="Chart">
      <MyBar/>
    </div>
  
  </>)
}
