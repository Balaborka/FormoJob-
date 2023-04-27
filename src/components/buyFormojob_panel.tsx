import { PanelAboutHeader } from '../components/panelAboutHeader'
import Data from "../data/BuyPage.json"
import { PanelBuyHeader } from '../components/panelBuyHeader'

export function BuyFormoJobPanel() {
    return (
        <div>
            <PanelBuyHeader header={ Data[0].name } />
            {/* <PanelAboutHeader header={ "A forms OCR auto-filling tool" } description={ "You talk to your client over a cup of coffee - we generate your contracts" } /> */}
        </div>
    )
}