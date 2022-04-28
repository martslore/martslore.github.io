import { ThemeProvider, BaseStyles } from '@primer/react'
import ColorModeSwitcher from './ColorModeSwitcher'
import { ToolbarPortfolio } from './toolbar'
import Hello from './greetings'
/*For theme switcher add
<ThemeProvider colorMode="auto">
<BaseStyles>
    <ColorModeSwitcher />
</BaseStyles>
</ThemeProvider>
*/
function App() {
    return (
        <div>
            <ToolbarPortfolio />
            <Hello />
        </div>
    )
}

export default App
