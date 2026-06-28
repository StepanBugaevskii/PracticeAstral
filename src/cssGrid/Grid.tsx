import './style.css';

type Item = {
    key: number;
    text: string;
}

export const CssGrid = () => {
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
        },
        {
            key: 4,
            text: '4'
        },
        {
            key: 5,
            text: '5'
        },
        {
            key: 6,
            text: '6'
        }
    ]
    return (
        <div className="grid">
            {items.map((item) => (
                <div key={item.key} className="item">{item.text}</div>
            ))}
        </div>
    )
}