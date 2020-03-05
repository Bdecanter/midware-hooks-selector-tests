import React, { Component } from 'react'
import * as actions from '../actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


class Header extends Component  {

    onClickAuthentification = () => {
        this.props.setAuthentifaction(!this.props.isLoggedIn)
    }

    renderAuthentification = () => {
        if(this.props.isLoggedIn){
            return "Deconnexion"
        }else{
            return "Connection"
        }
    }

    render () {
        return (
            <div>
                <ul className="nav nav-tabs bg-light">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Acceuil</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/ressources">Ressources</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={this.onClickAuthentification}>
                            {this.renderAuthentification()}
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        isLoggedIn : state.authentification.isLoggedIn
    }
}
export default connect(mapStateToProps, actions) (Header)