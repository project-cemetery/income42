import * as React from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListSubheader from '@material-ui/core/ListSubheader'
import { Theme, withStyles, WithStyles } from '@material-ui/core/styles'

interface OwnProps {
    data: any[]
}

const styles = (theme: Theme) => ({
    root: {
        width: '100%',
        maxHeight: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows['1'],
        position: 'relative',
        overflow: 'auto',
    } as any,
    listSection: {
        backgroundColor: 'inherit',
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0,
    },
})

type Props = OwnProps & WithStyles<'root' | 'listSection' | 'ul'>

const Timeline = ({ classes, ...props }: Props) =>
    <List className={classes.root} subheader={<li />}>
        {[0, 1, 2, 3, 4].map((sectionId: any) => (
            <li key={`section-${sectionId}`} className={classes.listSection}>
                <ul className={classes.ul}>
                <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader>
                {[0, 1, 2].map((item: any) => (
                    <ListItem key={`item-${sectionId}-${item}`}>
                        <ListItemText primary={`Item ${item}`} />
                    </ListItem>
                ))}
                </ul>
            </li>
        ))}
    </List>

export default withStyles(styles)(Timeline)
