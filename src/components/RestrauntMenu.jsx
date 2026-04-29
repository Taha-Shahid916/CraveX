import { useParams } from 'react-router';
import useRestaurantMenu from '../utils/useRestaurantmenu';
import ResShimmer from './RestrauntShimmer';

const RestrauntMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
 
  if (!resInfo) return <ResShimmer />;

  const { name, cuisines } = resInfo?.cards?.[2]?.card?.card?.info || {};

  // Find itemCards safely, since its position changes in API
  const regularCards =
    resInfo?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  // Look for the card that actually contains itemCards
  const menuCard = regularCards.find(
    (c) => c?.card?.card?.itemCards
  )?.card?.card;

  const itemCards = menuCard?.itemCards || [];

  return (
    <div className="Menu">
      <h1>{name}</h1>
      <h2>{cuisines?.join(', ')}</h2>
      <h1>Menu</h1>

      <ul>
        {itemCards.length > 0 ? (
          itemCards.map((item) => {
            const info = item.card.info;
            const price = (info.price || info.defaultPrice || 0) / 100;
            return (
              <li key={info.id}>
                <div className="menu-item-info">
                  <strong>{info.name}</strong>
                  <div className="menu-item-price">Rs {price}</div>
                  <small>{info.description}</small>
                </div>
                {info.imageId && (
                  <div>
                    <img
                      className="menu-item-img"
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${info.imageId}`}
                      alt={info.name}
                    />
                    <div className="button-div">
                      <button className="add-btn">Add</button>
                    </div>
                  </div>
                )}
              </li>
            );
          })
        ) : (
          <p>No menu items available.</p>
        )}
      </ul>
    </div>
  );
};

export default RestrauntMenu;
