import './style.css';

type Item = {
    key: number;
    text: string;
}

export const FlexGrid = () => {
    const items : Item[] = [
        {
            key: 1,
            text: '1'
        },
        {
            key: 2,
            text: '2'
        },
        {
            key: 3,
            text: '3'
        }
    ]
    return (
        <div className='column'>
            <div className="row">
                {items.map((item) => (
                    <div className="flex-block" key={item.key}>{item.text}</div>
                ))}
            </div>
            <div className="row">
                {items.map((item) => (
                    <div className="flex-block" key={item.key}>{item.text}</div>
                ))}
            </div>
            <div className="row">
                {items.map((item) => (
                    <div className="flex-block" key={item.key}>{item.text}</div>
                ))}
            </div>
        </div>
    )
}