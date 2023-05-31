import React, { useEffect, useState } from 'react';

const useMenu = () => {
     const [menu, setMenu] = useState([]);
     const [loading, setLoading] = useState(true)

     useEffect(() => {
          fetch('https://restaurant-server-side-kpacpuzdc-sarzil727945.vercel.app/menu')
               .then(res => res.json())
               .then(data => {
                    setMenu(data)
                    setLoading(false)
               })
     }, [])
     return [menu, loading]
};

export default useMenu;