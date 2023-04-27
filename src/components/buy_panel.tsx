import { PanelAboutHeader } from './panelAboutHeader'
import Data from "../data/BuyPage.json"

interface Props {
    id: number;
    children: React.ReactNode;
  }

export function BuyPanel(props: Props) {
    let id = props.id;

    return (
        <div>
            <div className='panelBuyHeaderTitle' >
                    { Data[id].name }
            </div>
            <div>
                { props.children }
            </div>
        </div>
    )
}