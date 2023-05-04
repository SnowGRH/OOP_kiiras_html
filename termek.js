import { lista } from "./adatok.js";
import Elem from "./term.js";
class Termekek{
    
    constructor(){
        const ART = $("article");
        for (let index = 0; index < lista.length; index++) {
            const ELEM = new Elem(ART,lista[index]);

        }
    }

}

export default Termekek;