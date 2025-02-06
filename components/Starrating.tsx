export default function StarRating({ starCount = 5 }) {
    return (
        <div className="container">
            {new Array(starCount).fill(0).map((_, index) => (
                <span key={index}>&#10037;</span> // Fixed: Added key prop and correct star symbol
            ))}
            <span>&#x22C6;</span>
            <span>&#x22C6;</span>
            <span>&#10037;</span>
            <span></span>
        </div>
    );
}