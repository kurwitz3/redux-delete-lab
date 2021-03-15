import React from 'react'


class Bands extends  React.Component{
    render(){
        return(
            <div>
                <ul>
                    {this.props.bands.map(band => {
                        return <li key={band.id}>{band.name}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Bands