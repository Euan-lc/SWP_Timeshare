import React from 'react';

function Property({ property }) {
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <img src={property.imageUrl} alt={property.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <h2>{property.name}</h2>
      <p>{property.location}</p>
      <p>${property.price} per night</p>
    </div>
  );
}

export default Property;
