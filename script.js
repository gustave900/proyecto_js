function zoodiaco() {
    let dia, mes;
    dia = parseInt (document.formulario.dia.value)
    mes = parseInt (document.formulario.mes.value)

    var image = document.getElementById("imagenes")
    if ((dia>=21&&mes==3) || (dia<=20&&mes==4)){
        document.getElementById("imagenes").src="images/aries.png"
    }
    if ((dia>=24&&mes==9) || (dia<=23&&mes==10))
        document.getElementById("imagenes").src="images/libra.png"
    if ((dia>=21&&mes==4) || (dia<=21&&mes==5))
    document.getElementById("imagenes").src="images/taurus.png"
    if ((dia>=24&&mes==10) || (dia<=22&&mes==11))
    document.getElementById("imagenes").src="images/scorpio.png"
    if ((dia>=22&&mes==5) || (dia<=21&&mes==6))
    document.getElementById("imagenes").src="images/gemini.png"
    if ((dia>=23&&mes==11) || (dia<=21&&mes==12))
        document.getElementById("imagenes").src="images/sagittarius.png"
    if ((dia>=21&&mes==6) || (dia<=23&&mes==7))
    document.getElementById("imagenes").src="images/cancer.png"
    if ((dia>=22&&mes==12) || (dia<=20&&mes==1))
    document.getElementById("imagenes").src="images/capricorn.png"
    if ((dia>=24&&mes==7) || (dia<=23&&mes==8))
    document.getElementById("imagenes").src="images/leo.png"
    if ((dia>=21&&mes==1) || (dia<=19&&mes==2))
    document.getElementById("imagenes").src="images/acuarius.png"
    if ((dia>=24&&mes==8) || (dia<=23&&mes==9))
    document.getElementById("imagenes").src="images/virgo.png"
    if ((dia>=20&&mes==2) || (dia<=20&&mes==3))
    document.getElementById("imagenes").src="images/piscis.png"
}
