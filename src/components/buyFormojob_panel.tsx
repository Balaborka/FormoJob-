import { PanelAboutHeader } from '../components/panelAboutHeader'
import Data from "../data/BuyPage.json"
import { SubscriptionsSection } from './subscriptionsSection'

export function BuyFormoJobPanel() {
    return (
        <div>
            <div className='panelBuyHeaderTitle' >
                    { Data[0].name }
            </div>
            <div>
                <SubscriptionsSection ID={ parseInt(Data[0].id) } />
            </div>
        </div>
    )
}