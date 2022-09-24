import {FaHeart,FaRegHeart} from 'react-icons/fa';
import './Palette.css'
import { useContext,useState } from 'react';
import { FavoritesContext } from '../../context/FavoriteContext';
const Palette=({palette})=>{
    const{id,name , colors ,liked }=palette
    const{favorites, setFavorites}=useContext(FavoritesContext);
    const[isFavorite,setIsFavorite]=useState(liked);
    const handleFavorites = ()=>{
        setIsFavorite((isFavorite)=>!isFavorite);
        //BUSCO SI LA PALETA YA ESTA EN FAVORITOS
        const foundIndex= favorites.findIndex(fav =>fav.id === id);
        //PARA AGREGAR A FAVORITOS
        if(foundIndex === -1){
            setFavorites([...favorites,palette])
            return
        }
        //QUITAR A FAVORITOS
        setFavorites(
            favorites.filter((fav)=>fav.id !==id)
        )
    }
    return(
        <div className="palette-container">
            <div className="palette">
                <h3>{name}</h3>
                {
                    colors.map((color)=>{
                        return(
                            <div
                                key={color}
                                className='color'
                                style={{backgroundColor:color}}
                                >
                                 <span>{color}</span>
                            </div>
                           
                        )
                    }

                    ) 
                }
            </div>
            <div className="fav">
                {
                    isFavorite ? 
                        (<FaHeart className="fav heart" onClick={handleFavorites} />) 
                        :
                        (<FaRegHeart className="fav" onClick={handleFavorites} />)

                }
            </div>
        </div>
    );
}
export default Palette;


