
import { JsonView } from 'react-json-view-lite';
import 'react-json-view-lite/dist/index.css';


export default function JsonRender(data) {
    return (
  
        <JsonView data={data}></JsonView>
    );
  }