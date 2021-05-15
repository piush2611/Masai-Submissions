import React from 'react'

export default function SidebarTemplate(props) {
    return (
        <div className="w-25 p-3 ">
            {props.children}
        </div>
    )
}
