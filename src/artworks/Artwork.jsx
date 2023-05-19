/* Parent Component -- NO Modification needed */
function Artwork({ children }) { return <>{children}</> };





/* 1. Import Artworks */
import Smiley from "./Smiley/Smiley";

/* 2. Add Artwork as property */
Artwork.Smiley = Smiley;





/* Default Export */
export default Artwork;