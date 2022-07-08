import propTypes from 'prop-types'

function Listing(props) {
  return (
    <div className="wrapper">
      {props.items.map((i, idx) => {
        if (i.state === 'active')
            return(
                <div className="item-list" key={i.listing_id}>
                    <div className="item">
                        <div className="item-image">
                        <a href={i.url}>
                            <img src={i.MainImage.url_570xN} alt=""/>
                        </a>
                        </div>
                        <div className="item-details">
                            <p className="item-title">
                                {i.title.length < 50 ? i.title :
                                i.title.slice(0, 49) + '...'}
                            </p>
                            <p className="item-price">
                                {(i.currency_code === 'USD' ? ('$' + i.price) :
                                i.currency_code === 'EUR' ? ('€' + i.price) :
                                i.price + ' ' + i.currency_code)}
                            </p>
                            <p className={`item-quantity ${i.quantity <= 10 ? 'level-low' : 
                                (i.quantity > 10 && i.quantity <= 20 ? 'level-medium' :
                                'level-high')}`}>
                                {i.quantity} left
                            </p>
                        </div>
                    </div>
                </div>
            )
      })}
    </div>
  );
}

Listing.propTypes = {
    items: propTypes.array
}

export default Listing;
