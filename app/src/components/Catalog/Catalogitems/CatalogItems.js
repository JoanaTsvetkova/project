export const CatalogItems = ({
    name,
    imgUrl,
    _id
}) => {
    return (
        <div classname="game">
            <div classname="game-img">
                <img src={imgUrl} alt={name} />
            </div>
            <div classname="game-info">
                <a href={`/catalog/:${_id}`} classname="btn-details">
                    {name}
                </a>
            </div>
        </div>

    );
}