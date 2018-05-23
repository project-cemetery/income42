import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { MuiThemeProvider } from '@material-ui/core/styles'

import theme from '@app/theme'

import Main from '@app/Main'

const Application = () =>
    <MuiThemeProvider theme={theme}>
        <Main />
    </MuiThemeProvider>

ReactDOM.render(
    <Application />,
    document.getElementById('root') as HTMLElement,
)
