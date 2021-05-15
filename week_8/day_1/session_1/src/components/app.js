import React from 'react'
import Mobile from './mobile'
import Buttons from './buttons'
import Card from './card'
class App extends React.Component{
    render(){
        return (
            <div>
                <Mobile />
                <Buttons />
                <Card />
            </div>
        )
    }
}

export default App