import * as React from 'react'

import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import { Theme, withStyles, WithStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

interface Props {
    signOut: () => Promise<void>
}

const styles = (theme: Theme) => ({
    flex: {
        flex: 1,
    },
})

type StyleProps = WithStyles<'flex'>

const CustomAppBar = ({classes, ...props}: Props & StyleProps) =>
    <AppBar position="static">
        <Toolbar>
            <Typography
                variant="title" color="inherit"
                className={classes.flex}
            >income 42</Typography>

            <IconButton onClick={props.signOut} color="inherit" >
                <ExitToAppIcon />
            </IconButton>
        </Toolbar>
    </AppBar>

export default withStyles(styles)(CustomAppBar)
