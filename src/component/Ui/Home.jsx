import React from 'react'
import DragNDrop from './DragNDrop'

const data = [
    {
        title:"group1",
        items:[1,2,3]
    },
    {
        title:"group2",
        items:[4,5,6]
    },
    {
        title:"group3",
        items:[7,8,9]
    }
]
function Home() {
    return (
        <div className ="home_page">
            <h1>Home page</h1>
            <DragNDrop
            data = {data}
            />
            
        </div>
    )
}

export default Home
