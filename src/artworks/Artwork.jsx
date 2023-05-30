/* Parent Component -- NO Modification needed */
function Artwork({ children }) { return <>{children}</> }



/* 1. Import Artworks */
import Grimmace from "./Grimmace/Grimmace";
import Citrus from "./Citrus/Citrus";
import Orbit from "./Orbit/Orbit";


/* 2. Add Artwork as property */
Artwork.Orbit = Orbit;
Artwork.Grimmace = Grimmace;
Artwork.Citrus = Citrus;


/* Default Export */
export default Artwork;