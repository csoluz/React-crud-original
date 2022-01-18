import './Footer.css'
import React from 'react'

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <span>
                    Desenvolvido com <i className="fa fa-heart text-danger"></i> por
                    <strong> Cs<i className="fa fa-certificate text-warning" ></i>luz</strong>
                </span>
            </footer>
        )   
    }
}

