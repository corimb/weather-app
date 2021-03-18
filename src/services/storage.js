const KEY_STORAGE = 'weatherFav';

export const saveFavStorage = (weatherData) => {
    let listFav = localStorage.getItem(KEY_STORAGE);
    // si no existe crear la key con un array vacío y luego la recuperamos. 
    if(!listFav){
        localStorage.setItem(KEY_STORAGE, JSON.stringify([]));
        listFav = localStorage.getItem(KEY_STORAGE);
    }
    const listFavParsed = JSON.parse(listFav);
    // en la lista de favs buscar el item que corresponde con el id de weatherData y si no hay ningún id que corresponda hacer push de ese Id a la lista y guardarlo en la key weatherFav.
    const found = listFavParsed.find(item => weatherData.id === item);
    if (!found){
        listFavParsed.push(weatherData.id);
        localStorage.setItem(KEY_STORAGE, JSON.stringify(listFavParsed));
    }
}

export const removeFavStorage = (id) => {
    let listFav = localStorage.getItem(KEY_STORAGE);
    const listFavParsed = JSON.parse(listFav);
    // buscar en la lista la posición del Id a borrar
    const position = listFavParsed.indexOf(id);
    // si esa posición es diferente a -1 significa que ese elemento existe y lo quita del array. 
    // actualizar localStorage.
    if (position !== -1){
        listFavParsed.splice(position, 1);
        localStorage.setItem(KEY_STORAGE, JSON.stringify(listFavParsed));
    }
    
}

export const readFavStorage = () => {
    let listFav = localStorage.getItem(KEY_STORAGE);
    if(listFav){
        const listFavParsed = JSON.parse(listFav);
        return listFavParsed;
    }
    return null;
}

