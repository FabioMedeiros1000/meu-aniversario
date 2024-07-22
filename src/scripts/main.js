document.addEventListener('DOMContentLoaded', function(){
    const dataAniversario = new Date('Aug 12, 2024 19:00:00');
    const dataAniversarioTimestamp = dataAniversario.getTime();
    
    const cronometro = setInterval(function(){
        const dataHoje = new Date();
        const dataHojeTimestamp = dataHoje.getTime();
        
        const tempoRestanteMilissegundos = dataAniversarioTimestamp - dataHojeTimestamp;
        const diaEmMilissegundos = (24 * 60 * 60 * 1000);
        const horaEmMilissegundos = (60 * 60 * 1000);
        const minutoEmMilissegundos = (60 * 1000);
    
        const diasRestantes = Math.floor(tempoRestanteMilissegundos / diaEmMilissegundos);
        const horasRestantes = Math.floor((tempoRestanteMilissegundos % diaEmMilissegundos) / horaEmMilissegundos);
        const minutosRestantes = Math.floor((tempoRestanteMilissegundos % horaEmMilissegundos) / minutoEmMilissegundos);
        const segundosRestantes = Math.floor((tempoRestanteMilissegundos % minutoEmMilissegundos) / 1000);
    
        document.querySelector('.contagem').innerHTML = `${diasRestantes}d ${horasRestantes}h ${minutosRestantes}m ${segundosRestantes}s`;

        if (tempoRestanteMilissegundos < 0){
            clearInterval(cronometro);
            document.querySelector('.contagem').innerHTML = `A festa já começou!`
        }

    }, 1000);
})