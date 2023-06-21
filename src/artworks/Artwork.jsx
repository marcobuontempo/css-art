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
import Three from "./Three/Three";
import AvoPear from "./AvoPear/AvoPear";
import Ross from "./Ross/Ross";
import StickyBanana from "./StickyBanana/StickyBanana";
import Tear from "./Tear/Tear";
import Amaze from "./Amaze/Amaze";
import Terminal from "./Terminal/Terminal";
import GreatWave from "./GreatWave/GreatWave";
import Almost from "./Almost/Almost";
import Pong from "./Pong/Pong";


/* 2. Add Artwork as property */
Artwork.Almost = Almost;
Artwork.Pong = Pong;
Artwork.GreatWave = GreatWave;
Artwork.Terminal = Terminal;
Artwork.Ross = Ross;
Artwork.StickyBanana = StickyBanana;
Artwork.Tear = Tear;
Artwork.Amaze = Amaze;
Artwork.AvoPear = AvoPear;
Artwork.Three = Three;
Artwork.Room = Room;
Artwork.Room = Room;
Artwork.Scenic = Scenic;
Artwork.Heart = Heart;
Artwork.Grimmace = Grimmace;
Artwork.Orbit = Orbit;
Artwork.Citrus = Citrus;
Artwork.Rook = Rook;


/* Default Export */
export default Artwork;