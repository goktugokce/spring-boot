import React, { Component } from 'react'
import FarmService from '../services/FarmService';

class CreateFarmComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            farmName: '',
            farmAddress: '',
            farmOwner: '',
            farmProduct: ''
        }
        this.changeFarmNameHandler = this.changeFarmNameHandler.bind(this);
        this.changeFarmAddressHandler = this.changeFarmAddressHandler.bind(this);
        this.changeFarmOwnerHandler = this.changeFarmOwnerHandler.bind(this);
        this.changeFarmProductHandler = this.changeFarmProductHandler.bind(this);
        this.saveOrUpdateFarm = this.saveOrUpdateFarm.bind(this);
    }

    componentDidMount(){

        if(this.state.id === '_add'){
            return
        }else{
            FarmService.getFarmByID(this.state.id).then( (res) =>{
                let farm = res.data;
                this.setState({farmName: farm.farmName,
                    farmAddress: farm.farmAddress,
                    farmOwner: farm.farmOwner,
                    farmProduct : farm.farmProduct
                });
            });
        }        
    }
    saveOrUpdateFarm = (e) => {
        e.preventDefault();
        let farm = {farmName: this.state.farmName, farmAddress: this.state.farmAddress, farmOwner: this.state.farmOwner, farmProduct: this.state.farmProduct};
        console.log('farm => ' + JSON.stringify(farm));

        if(this.state.id === '_add'){
            FarmService.createFarm(farm).then(res =>{
                this.props.history.push('/farms');
            });
        }else{
            FarmService.updateFarm(farm, this.state.id).then( res => {
                this.props.history.push('/farms');
            });
        }
    }
    
    changeFarmNameHandler= (event) => {
        this.setState({farmName: event.target.value});
    }

    changeFarmAddressHandler= (event) => {
        this.setState({farmAddress: event.target.value});
    }

    changeFarmOwnerHandler= (event) => {
        this.setState({farmOwner: event.target.value});
    }

    changeFarmProductHandler= (event) => {
        this.setState({farmProduct: event.target.value});
    }

    cancel(){
        this.props.history.push('/farms');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Farm</h3>
        }else{
            return <h3 className="text-center">Update Farm</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Farm Name: </label>
                                            <input placeholder="Farm Name" name="farmName" className="form-control" 
                                                value={this.state.farmName} onChange={this.changeFarmNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Farm Address: </label>
                                            <input placeholder="Farm Address" name="farmAddress" className="form-control" 
                                                value={this.state.farmAddress} onChange={this.changeFarmAddressHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Farm Owner: </label>
                                            <input placeholder="Farm Owner" name="farmOwner" className="form-control" 
                                                value={this.state.farmOwner} onChange={this.changeFarmOwnerHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Farm Product: </label>
                                            <input placeholder="Farm Product" name="farmProduct" className="form-control" 
                                                value={this.state.farmProduct} onChange={this.changeFarmProductHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateFarm}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateFarmComponent