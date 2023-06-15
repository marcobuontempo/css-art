/* Parent Component -- NO Modification needed */
function Artwork({ children }) { return <>{children}</> }



/* 1. Import Artworks */
import Grimmace from "./Grimmace/Grimmace";
import Citrus from "./Citrus/Citrus";
import Rook from "./Rook/Rook";


/* 2. Add Artwork as property */
Artwork.Grimmace = Grimmace;
Artwork.Citrus = Citrus;
Artwork.Rook = Rook;




/* Default Export */
export default Artwork;