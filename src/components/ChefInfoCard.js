import React from "react";

function ChefInfoCard({ chefinfo, error }) {
  return (
    <div className="ChefInfoCard">
        <div className="chefInfo">
          {error && <p>{error}</p>}
          <h2>Chef Info:</h2>
          <h3>{chefinfo.name}</h3>
          <p>Location: {chefinfo.location}</p>
          <p>Website: {chefinfo.website}</p>
         <h4>Chef contact:</h4>
          <p>Email: {chefinfo.email}</p>
          <p>Phone Number: {chefinfo.phone}</p>
        </div>
    </div>
  );
}

export default ChefInfoCard;