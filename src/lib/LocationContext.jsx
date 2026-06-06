import React, { createContext, useContext, useState } from 'react';

export const LOCATIONS = {
  thornhill: {
    id: 'thornhill',
    name: 'Thornhill',
    address1: '8111 Leslie Street',
    address2: 'Thornhill, Ontario',
    postal: 'L3T 7P4',
    phone: '(905) 882-0320',
    phoneHref: 'tel:9058820320',
    email: 'info@withinrange.ca',
    mapsUrl: 'https://maps.google.com/?q=8111+Leslie+Street+Thornhill+Ontario',
    bookingUrl: 'http://book.sweetspot.io/clubs/within-range-golf',
    instagram: 'https://www.instagram.com/withinrange_thornhill/',
    facebook: 'https://www.facebook.com/WithinRange.Thornhill',
  },
  burlington: {
    id: 'burlington',
    name: 'Burlington',
    address1: 'Burlington Location',
    address2: 'Burlington, Ontario',
    postal: '',
    phone: '',
    phoneHref: '',
    email: 'info@withinrange.ca',
    mapsUrl: 'https://maps.google.com/?q=Burlington+Ontario',
    bookingUrl: 'http://book.sweetspot.io/clubs/within-range-golf',
    instagram: 'https://www.instagram.com/',
    facebook: 'https://www.facebook.com/',
  },
};

const LocationContext = createContext(null);

export function LocationProvider({ children }) {
  const [locationId, setLocationId] = useState('thornhill');
  const location = LOCATIONS[locationId];
  return (
    <LocationContext.Provider value={{ location, locationId, setLocationId }}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  return useContext(LocationContext);
}