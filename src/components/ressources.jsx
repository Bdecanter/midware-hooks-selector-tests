import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addRessources } from '../actions'
import { getIntegerList, getContainOneList, getEntierPremierList, getSpecialNumberList } from "../selectors"

class Ressources extends Component  {

    renderRessources = ressources => {
        return(
        ressources.map(ressource => <li key={ressource}>{ressource}</li>)
        )
    }

    render () {
        return (
            <div className="row">
                <div className="col">
                    <button className="btn btn-primary" type="button" onClick={() => this.props.addRessources()}>
                        Ajouter un nombre
                    </button>
                </div>
                <div className="col">
                    Entiers
                    {this.renderRessources(this.props.integerRessources)}
                </div>
                <div className="col">
                    Contient "1"
                    {this.renderRessources(this.props.containsOneList)}
                </div>
                <div className="col">
                    Entiers premiers
                    {this.renderRessources(this.props.premierList)}
                </div>
                <div className="col">
                    Entiers premiers contient "1"
                    {this.renderRessources(this.props.specialRessources)}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        integerRessources: getIntegerList(state),
        containsOneList: getContainOneList(state),
        premierList: getEntierPremierList(state),
        specialRessources : getSpecialNumberList(state)
    }
}

const mapDispatchToProps = {
    addRessources
}

export default connect(mapStateToProps, mapDispatchToProps)(Ressources)