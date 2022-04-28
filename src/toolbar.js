import 'primeicons/primeicons.css'
import 'primereact/resources/themes/lara-light-indigo/theme.css'
import 'primereact/resources/primereact.css'
import 'primeflex/primeflex.css'

import React, { Component } from 'react'
import { Toolbar } from 'primereact/toolbar'
import { Button } from 'primereact/button'
import { SplitButton } from 'primereact/splitbutton'

export class ToolbarPortfolio extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const leftContents = (
            <React.Fragment>
                <Button label="Home" className="navbar-button" />
                <Button label="Su di me" className="navbar-button" />
                <Button label="Lavori" className="navbar-button" />
            </React.Fragment>
        )

        const rightContents = (
            <React.Fragment>
                <Button label="Contatti" className="navbar-button" />
            </React.Fragment>
        )
        return (
            <nav>
                <Toolbar left={leftContents} right={rightContents} />
            </nav>
        )
    }
}
