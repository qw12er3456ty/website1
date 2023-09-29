const getlocation = () => {
    //get location from user
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position);
        });
    }
}