import { navigate, useLocationProperty } from "wouter/use-location"


const hashLocation = () => window.location.hash.replace(/^#/, "") || "/";

const hashNavigate = (to) => navigate("#/" + to);

const useHashLocation = () => {
   const location = useLocationProperty(hashLocation);
   return [location, hashNavigate];
};

export default useHashLocation