/* eslint-disable */
import "./Footer.css";
import { getCurrentYear, getFooterCopy } from '../utils/utils.jsx';

export default function Footer() {
    return (
        <div className="App-footer">
            <p>Copyright {getCurrentYear()} - {getFooterCopy(true)}</p>
        </div>
    )
}