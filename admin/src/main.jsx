
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router-dom'
import router from './routes'
import { Toaster} from 'sonner';
import { Provider } from 'react-redux'
import { store } from "./redux/store.js"
import React from 'react';

createRoot(document.getElementById('root')).render(
    <React.StrictMode>

    
<Provider store={store}>
<RouterProvider router={router}/>
<Toaster/>
</Provider>
</React.StrictMode>
 

)
