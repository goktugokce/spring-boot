import React, { Component } from 'react'
import FarmService from '../services/FarmService'

class ViewFarmComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            farm: {}
        }
    }

    componentDidMount(){
        FarmService.getFarmByID(this.state.id).then( res => {
            this.setState({farm: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> Farm Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Farm Name: </label>
                            <div> { this.state.farm.farmName}</div>
                        </div>
                        <div className = "row">
                            <label> Farm Address: </label>
                            <div> { this.state.farm.farmAddress }</div>
                        </div>
                        <div className = "row">
                            <label> Farm Owner: </label>
                            <div> { this.state.farm.farmOwner }</div>
                        </div>
                        <div className = "row">
                            <label> Farm Product: </label>
                            <div> { this.state.farm.farmProduct }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewFarmComponent