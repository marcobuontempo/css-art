import ONEDIV_ICON from "../../images/trait-badges/ONEDIV.png";
import ANIMATED_ICON from "../../images/trait-badges/ANIMATED.png";
import PIXELART_ICON from "../../images/trait-badges/PIXELART.png";
import INTERACTIVE_ICON from "../../images/trait-badges/INTERACTIVE.png";

export default {
    ONEDIV: {
        name: 'ONE DIV',
        icon: ONEDIV_ICON,
        description: 'only uses 1 single <div> element in the entire piece',
    },
    PIXELART: {
        name: 'PIXEL ART',
        icon: PIXELART_ICON,
        description: 'squares are the exclusive building blocks of the piece',
    },
    ANIMATED: {
        name: 'ANIMATED',
        icon: ANIMATED_ICON,
        description: 'includes CSS animations',
    },
    INTERACTIVE: {
        name: 'INTERACTIVE',
        icon: INTERACTIVE_ICON,
        description: 'reacts to user inputs in some way (click, hover, drag, etc.)',
    },
}