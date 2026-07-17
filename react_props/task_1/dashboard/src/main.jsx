import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App/App';

import ColorChangerParent from "./Demo-Props/ChildCallingParents";
import ReuseComponents from './Demo-Props/ReuseComponents';
import SpreadPropsDemo from './Demo-Props/SpreadProps';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <ColorChangerParent />
    {/* <ReuseComponents /> */}
    {/* <SpreadPropsDemo /> */}
  </StrictMode>,
)
