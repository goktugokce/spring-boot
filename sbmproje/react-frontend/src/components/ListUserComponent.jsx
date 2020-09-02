
import React, { Component } from 'react'
import FarmService from '../services/FarmService'

class ListUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                farms: []
        }
        this.addFarm = this.addFarm.bind(this);
        this.editFarm = this.editFarm.bind(this);
        this.deleteFarm = this.deleteFarm.bind(this);
    }

    deleteFarm(id){
        FarmService.deleteFarm(id).then( res => {
            this.setState({farms: this.state.farms.filter(farm => farm.id !== id)});
        });
    }
    viewFarm(id){
        this.props.history.push(`/view-farm/${id}`);
    }
    editFarm(id){
        this.props.history.push(`/add-farm/${id}`);
    }

    componentDidMount(){
        FarmService.getFarms().then((res) => {
            this.setState({ farms: res.data});
        });
    }

    addFarm(){
        this.props.history.push('/add-farm/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Farm List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addFarm}> Add Farm</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Farm Name</th>
                                    <th> Farm Address</th>
                                    <th> Farm Owner</th>
                                    <th> Farm Product</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.farms.map(
                                        farm => 
                                        <tr key = {farm.id}>
                                             <td> { farm.farmName} </td>   
                                             <td> {farm.farmAddress}</td>
                                             <td> {farm.farmOwner}</td>
                                             <td> {farm.farmProduct}</td>
                                             <td>
                                                 <button onClick={ () => this.editFarm(farm.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteFarm(farm.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewFarm(farm.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListUserComponent
