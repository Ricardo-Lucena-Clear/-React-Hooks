import './App.css'
import React, { useState } from 'react'
import { BrowserRouter as Router } from  'react-router-dom'

import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'
import DataContext,{ data } from '../data/DataContext' 

const App = props => {
    const [state, setState] = useState(data)
/*  value= {{state, setState}}  (duas chaves no mesmo lugar servem para substituir o uso de (:) exemplos:
state:state, setState:setState */
    return (
        <DataContext.Provider value= {{state, setState}}> 
       <div className="App">
                    <Router>
                        <Menu />
                        <Content />
                    </Router>
                </div>
        </DataContext.Provider>
                
    )
}

export default App