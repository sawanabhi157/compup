import TableComponent from "./component/TableComponent";
import data from "./data/data"
function App() {


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw' }}>
    <TableComponent initialData={data} />  
  </div>
  );
}

export default App;
