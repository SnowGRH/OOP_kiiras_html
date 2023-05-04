class Elem{
    constructor(ART,adat){
        this.adat = adat;
        ART.append(`<div class="elem"><div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4"<p>${this.adat.neve}</p>
        <p>${this.adat.szine}</p>
        <p>${this.adat.neme}</p>
        <button>kedvencek</button>
        </div>
        </div>`);
        this.elem = $(".elem:last-child");
        this.buttonElem = this.elem.children("button");

    }
}
export default Elem