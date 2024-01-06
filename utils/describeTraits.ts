// •┈••✦ ❤ ✦••┈• LARMF API - PHYSICAL DESCRIPTIONS •┈••✦ ❤ ✦••┈•

// •┈••✦ ❤ ✦••┈• TINYDINOS API - PHYSICAL DESCRIPTIONS •┈••✦ ❤ ✦••┈•

import { Larmf, LarmfAttribute, LarmfStats } from "./larmfInterfaces";

function describe_traits(larmf: Larmf): string {
    let { attributes } = larmf;


    // create an attributes object for the tinydinos of its traits
    let extractedAttributes: Record<string, string> = {};
    attributes.forEach((trait: LarmfAttribute) => {
        extractedAttributes[trait.trait_type] = trait.value;
    });

    // isolating the individual traits from the extractedAttributes{}
    let background: string = extractedAttributes.background;
    let body: string = extractedAttributes.body;
    let chest: string = extractedAttributes.chest;
    let eyes: string = extractedAttributes.eyes;
    let face: string = extractedAttributes.face;
    let feet: string = extractedAttributes.feet;
    let hands: string = extractedAttributes.hands;
    let head: string = extractedAttributes.head;
    let spikes: string = extractedAttributes.spikes;


// selecting strings based on the tinydino's traits to assemble into the description
    let phrases = {



        background: function (): string {
            let backgroundDescriptions: Record<string, string> = {
                'blue': ', against a blue background',
                'pink': ', against a pink background',
                'gray': ', against a gray background',
                'yellow': ', against a yellow background',
                'green': ', against a green background',
                'orange': ', against an orange background',
                'light_gray': ', against a light gray background',
                'light_brown': ', against a light brown background',
                'purple': ', against a purple background',
                'red_linear_gradient': ', against a red linear gradient background',
                'purple_linear_gradient': ', against a purple linear gradient background',
                'blue_linear_gradient': ', against a blue linear gradient background',
                'yellow_linear_gradient': ', against a yellow linear gradient background',
                'blue_conical_gradient': ', against a blue conical gradient background',
                'purple_conical_gradient': ', against a purple conical gradient background',
                'red_conical_gradient': ', against a red conical gradient background',
                'orange_conical_gradient': ', against a orange conical gradient background',
                'green_conical_gradient': ', against a green conical gradient background',
                'snow_landscape': ', against a snow landscape background',
                'day_landscape': ', against a daytime landscape background',
                'night_landscape': ', against a nightime landscape background',
            };

            return backgroundDescriptions[background] || '';
        },


        body: function (): string {
            let bodyDescriptions: Record<string, string> = {
                'teal': `with a teal colored body`,
                'lime_green': `with a lime green colored body`,
                'gray': `with a gray colored body`,
                'green': `with a green colored body`,
                'yellow': `with a yellow colored body`,
                'aqua': `with an aqua colored body`,
                'blue': `with a blue colored body`,
                'red': `with a red colored body`,
                'purple': `with a purple colored body`,
                'pink': `with a pink colored body`,
                'purple_linear_gradient': `with a purple colored linear gradient body`,
                'orange_linear_gradient': `with an orange colored linear gradient body`,
                'yellow_linear_gradient': `with a yellow colored linear gradient body`,
                'blue_linear_gradient': `with a blue colored linear gradient body`,
                'pink_linear_gradient': `with a pink colored linear gradient body`,
                'green_linear_gradient': `with a green colored linear gradient body`,
                'rainbow': `with a rainbow colored body`,
                'grayspace_linear_gradient': `with a grayspace colored linear gradient body`
            };

            return bodyDescriptions[body] || '';
        },



        eyes: function (): string {
            let eyesDescriptions: Record<string, string> = {
                'white': 'with white eyes',
                'light_gray': 'with light gray eyes',
                'purple': 'with purple eyes',
                'yellow': 'with yellow eyes',
                'blue': 'with blue eyes',
                'dark_red': 'with dark red eyes',
                'dark_gray': 'with dark gray eyes',
                'green': 'with green eyes',
                'orange': 'with orange eyes',
                'red': 'with red eyes',
                'green_red': 'with green-red eyes',
                'blue_yellow': 'with blue-yellow eyes',
                'lazer': 'with laser eyes',
            };
            
            return eyesDescriptions[eyes] || '';

        },

        face: function () {
            let faceDescriptions: Record<string, string> = {
                'normal': 'with a normal looking face',
                'mask': 'wearing a mask',
                'ninja': 'wearing a ninja mask',
                'vizor': 'wearing a visor over their face',
                'bandages': 'wearing bandages over their face',
                'skull': 'with a skeleton skull face',
                'noun_glasses': 'wearing square shaped glasses',
            };

            return faceDescriptions[face] || '';
        },

        feet: function () {
            let feetDescriptions: Record<string, string> = {
                'normal': 'barefoot',
                'rocket_boots': 'wearing rocket boots',
                'hoverboard': 'riding a hoverboard',
                'skateboard': 'riding a skateboard',
            };

            return feetDescriptions[feet] || '';
        },

        hands: function () {
            let handsDescriptions: Record<string, string> = {
                'normal': 'having normal looking hands',
                'cast_right': 'right hand shadowed',
                'cast_left': 'left hand shadowed',
                'kite': 'flying a kite',
            };

            return handsDescriptions[hands] || '';
        },


        chest: function () {
            let chestDescriptions: Record<string, string> = {
                'orangered': 'and an orangered chest',
                'light_gray': 'and a light gray colored chest',
                'green': 'and a green colored chest',
                'aqua': 'and an aqua colored chest',
                'purple': 'and a purple colored chest',
                'blue': 'and a blue colored chest',
                'pink': 'and a pink colored chest',
                'light_blue': 'and a light blue colored chest',
                'gray': 'and a gray colored chest',
                'yellow': 'and a yellow colored chest',
                'orange': 'and an orange colored chest'
            };

            return chestDescriptions[chest] || '';
        },

        head: function () {
            let headDescriptions: Record<string, string> = {
                'none': ' ',
                'cap_backwards': 'wearing a backwards cap',
                'two_tone_cap_backwards': 'wearing a two tone colored backwards cap',
                'cap_forwards': 'wearing a forward facing cap',
                'silly_yellow': 'wearing a silly yellow hat',
                'crown': 'wearing a crown',
                'chef': 'wearing a chef hat',
                'bandana': 'wearing a bandana',
                'long_peak_cap_forwards': 'wearing a long billed forward facing cap',
                'headphones': 'wearing headphones',
                'mouse_ears': 'wearing mouse ears'
            
            };

            return headDescriptions[head] || '';
        },

        spikes: function () {
            let spikesDescriptions: Record<string, string> = {
                'light_gray': 'with light gray spikes',
                'dark_gray': 'with dark gray spikes',
                'green': 'with green spikes',
                'pink': 'with pink spikes',
                'orange': 'with orange spikes',
                'white': 'with white spikes',
                'purple': 'with purple spikes',
                'teal': 'with teal spikes',
                'yellow': 'with yellow spikes',
                'burnt_orange': 'with burnt-orange colored spikes',
                'blue': 'with blue spikes',
                'red': 'with red spikes',
                'multicolor': 'with multicolored spikes',
                'none': 'without spikes'
                };

            return spikesDescriptions[spikes] || '';
        },

        // build up the physical description string with the different parts
        getDescription: function () {
            let descriptionParts = [
                this.feet(),
                this.hands(),
                this.body(),
                this.eyes(),
                this.background(),
                this.face(),
                this.chest(),
                this.head(),
                this.spikes()
            ];


            // we're gonna filter out any empty strings and concatenate the pieces together
            return descriptionParts.filter(part => part).join(' ').trim() + '.';
        }

    };

    // call the fx and return the whole description
    return `A tiny dinosaur ${phrases.getDescription.call(phrases)}`;

}

// module.exports = { describe_traits };
export default describe_traits;
