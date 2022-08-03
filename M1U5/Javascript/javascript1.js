var distancia=prompt('ingrese la distancia a recorrer en metros')
distancia=parseInt(distancia)
 

if (distancia<=1000){document.write('deberás recorrer a pie')}
if (distancia<=10000 && 1000<distancia){document.write ('deberás recorrer en bicicleta')}

if (10000<=distancia && distancia<30000){document.write('deberás recorrer en micro')}
if (30000<=distancia && distancia<100000){document.write('deberás recorrer en auto')}
if (100000<=distancia){document.write('deberás recorrer en avión')}


