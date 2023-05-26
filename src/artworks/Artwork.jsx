/* Parent Component -- NO Modification needed */
function Artwork({ children }) { return <>{children}</> };



/* 1. Import Artworks */
import Grimmace from "./Grimmace/Grimmace";
import Citrus from "./Citrus/Citrus";


/* 2. Add Artwork as property */
Artwork.Grimmace = Grimmace;
Artwork.Citrus = Citrus;




/* Default Export */
export default Artwork;