/* Parent Component -- NO Modification needed */
function Artwork({ children }) { return <>{children}</> }


/* 1. Import Artworks */
import Grimmace from "./Grimmace/Grimmace";
import Citrus from "./Citrus/Citrus";
import Orbit from "./Orbit/Orbit";
import Rook from "./Rook/Rook";
import Heart from "./Heart/Heart";
import Scenic from "./Scenic/Scenic";
import Room from "./Room/Room";


/* 2. Add Artwork as property */
Artwork.Room = Room;
Artwork.Scenic = Scenic;
Artwork.Heart = Heart;
Artwork.Grimmace = Grimmace;
Artwork.Orbit = Orbit;
Artwork.Citrus = Citrus;
Artwork.Rook = Rook;


/* Default Export */
export default Artwork;