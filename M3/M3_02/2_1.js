var nota = (Math.floor(Math.random()*(8 - 1)+1))
   console.log(nota)

   if(nota >= 6){
       console.log('Nota del alumno: Leandro  Venegas : ' + nota)
       console.log('Tienes nota igual o mayor a 6, eximido')
       console.log('Aprobado')
   }else if (nota >= 4){
        console.log('Nota del alumno: Leandro  Venegas : ' + nota)
       console.log('Menor o igual a 4 , da prueba')
       console.log('Debe Rendir examen')
   }else {
    console.log('Nota del alumno: Leandro  Venegas : ' + nota)
    console.log('Menor a 4  , no puede dar la prueba')
    console.log('reprobado ')
   }

