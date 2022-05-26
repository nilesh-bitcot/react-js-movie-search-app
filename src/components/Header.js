import React from 'react'

const Header = (props) => {
    return(
        <>
        <div className='headerDiv' style={{backgroundColor:'blue',padding:5, marginBottom:10}}>
        <h1 style={{ fontSize:30,textAlign:'center',color:'white' }}>{props.title}</h1>
        </div>
        </>
    )
}

export default Header