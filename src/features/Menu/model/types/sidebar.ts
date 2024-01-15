import React from 'react'

export interface SidebarItemsType {
    text?: string
    path: string
    Icon: React.FC<React.SVGProps<SVGSVGElement>>
    authOnly?: boolean
}
