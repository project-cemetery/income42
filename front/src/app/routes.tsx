import { Dashboard } from '@material-ui/icons'

import DashboardView from '@income42/app/views/Dashboard'
import { SvgIconProps } from '@material-ui/core/SvgIcon'
import { StatelessComponent } from 'react'

export interface RouteModel {
    path: string
    sidebarName?: string
    navbarName?: string
    icon?: StatelessComponent<SvgIconProps>
    component?: StatelessComponent<any>
    redirect?: boolean
    to?: string
}

export default [
    {
        path: '/dashboard',
        sidebarName: 'Dashboard',
        navbarName: 'Material Dashboard',
        icon: Dashboard,
        component: DashboardView,
    },
    { redirect: true, path: '/', to: '/dashboard' },
] as RouteModel[]
