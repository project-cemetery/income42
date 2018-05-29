import * as React from 'react'
import * as ReactDOM from 'react-dom'

import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'

import theme from '@income42/theme'

import Main from '@income42/Main'

const Application = () =>
    <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Main />
    </MuiThemeProvider>

ReactDOM.render(
    <Application />,
    document.getElementById('root') as HTMLElement,
)
