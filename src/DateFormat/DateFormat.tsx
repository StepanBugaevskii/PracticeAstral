import './style.css';
import { useFormatData } from './hooks/useDataFormat';
export const DateFormat = () => {
    const data = new Date();
    
    return (
        <>
        <div className="block">{data.toLocaleString('ru-RU')} - дата + время</div>
        <div className="block">{data.toLocaleDateString('ru-RU')} - только дата</div>
        <div className="block">{data.toLocaleTimeString('ru-RU')} - только время</div>
        <div className="block">{useFormatData(data, {year: 'numeric', month: 'long', day: 'numeric'})}</div>
        <div className="block">{useFormatData(data, {year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'})}</div>
        <div className="block">{useFormatData(data, {dateStyle: 'full'})}</div>
        <div className="block">{useFormatData(data, {dateStyle: 'short', timeStyle: 'short'})}</div>
        </>
    )
}