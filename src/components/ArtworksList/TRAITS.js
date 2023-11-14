import { fa1, faGrip, faCirclePlay, faHandPointer } from "@fortawesome/free-solid-svg-icons";

export default {
    ONEDIV: {
        name: 'ONE DIV',
        icon: fa1,
        description: 'One Div: entire piece is contained inside a single HTML element',
    },
    PIXELART: {
        name: 'PIXEL ART',
        icon: faGrip,
        description: 'Pixel Art: squares are the exclusive building blocks of the piece',
    },
    ANIMATED: {
        name: 'ANIMATED',
        icon: faCirclePlay,
        description: 'Animated: includes CSS animations',
    },
    INTERACTIVE: {
        name: 'INTERACTIVE',
        icon: faHandPointer,
        description: 'Interactive: reacts to user inputs in some way (click, hover, drag, etc.).\n*Please ensure CSS Animations are toggled to ON*',
    },
}