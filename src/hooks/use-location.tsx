
"use client";

import { useState, useEffect } from 'react';

export function useLocation() {
  const [location, setLocation] = useState<{ country: string | null; isLoading: boolean }>({
    country: null,
    isLoading: true,
  });

  useEffect(() => {
    async function fetchLocation() {
      try {
        // Mocking location for now as the API is not available in this environment.
        // In a real environment, you would use:
        // const response = await fetch('https://ipapi.co/json/');
        // if (response.ok) {
        //   const data = await response.json();
        //   setLocation({ country: data.country_code, isLoading: false });
        // } else {
        //   setLocation({ country: null, isLoading: false });
        // }
        setLocation({ country: 'US', isLoading: false });
      } catch (error) {
        console.error('Failed to fetch location:', error);
        setLocation({ country: null, isLoading: false });
      }
    }

    fetchLocation();
  }, []);

  return location;
}
