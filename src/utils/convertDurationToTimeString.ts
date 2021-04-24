export function convertDurationToTimeString (duration: number) {
    const hours = Math.floor(duration / 3600); 
    const minutes = Math.floor((duration % 3600) / 60); //pega o resto da divisão de horas e divide por 60 para transformar em minutos
    const seconds = duration % 60; // pega o resto da divisao e divide por 60 para transformar em segundos

    const timeString = [hours, minutes, seconds]
        .map(unit => String(unit).padStart(2, '0'))
        .join(':')

    return timeString;
}