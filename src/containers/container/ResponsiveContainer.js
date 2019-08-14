import React from 'react'
import { DesktopContainer, MobileContainer } from 'containers';


const ResponsiveContainer = ({ children }) => (
    <div>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </div>
)

  export default ResponsiveContainer;