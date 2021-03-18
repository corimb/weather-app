const GeoLocationApi = {
    getCityFromCoordinates: (latitude, longitude) => {
        let URL = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`;
        return fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                let loc = '';
                if (data.address.town) {
                    loc = data.address.town;
                } else if (data.address.village) {
                    loc = data.address.village;
                } else if (data.address.state) {
                    loc = data.address.state;
                }
                return loc;
            })
            .catch((error) => {
                console.log(error);
                return false;
            });
    },
};

export default GeoLocationApi;