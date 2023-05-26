/* Parent Component -- NO Modification needed */
function Artwork({ children }) { return <>{children}</> };



/* 1. Import Artworks */
import Grimmace from "./Smiley/Grimmace";


/* 2. Add Artwork as property */
Artwork.Grimmace = Grimmace;




/* Default Export */
export default Artwork;