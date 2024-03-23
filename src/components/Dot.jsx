export default function Dot({ size = 16, color = 'bg-black' }) { // `size` in pixels
    return (
        <div
            style={{ width: `${size}px`, height: `${size}px` }}
            className={`${color} rounded-full inline-block`}
        ></div>
    );
}

