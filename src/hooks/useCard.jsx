import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../AuthProvider/AuthProvider'
const useCard = () =>{
     const {user} = useContext(AuthContext);
     const { refetch, data: card = [] } = useQuery({
          queryKey: ['cards', user?.email],
          queryFn:  async () => {
               const res = await fetch(`https://restaurant-server-side-kpacpuzdc-sarzil727945.vercel.app/cards?email=${user?.email}`)
               return res.json();
             },
        })
        return [card, refetch]
}
export default useCard;