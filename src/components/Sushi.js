import React from "react";

function Sushi({img_url, name, price, id, eaten, eatSushi}) {

  function handleEat(){
    //console.log("yum")
    eatSushi(id, price);
  }
  
  return (
    <div className="sushi">
      <div className="plate" onClick={handleEat}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
