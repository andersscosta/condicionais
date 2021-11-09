let hora = 12.30
if(hora >=8 && hora <12){
    console.log('É cedo para buscar as crianças')
}else if(hora == 12){
    console.log('É hora de buscar as crianças')
}else if(hora >12 && hora <13){
    console.log('Você está atrasado para buscar as crianças')
}else if(hora >=13 || hora <8){
    console.log('As crianças não estão na escola')
}