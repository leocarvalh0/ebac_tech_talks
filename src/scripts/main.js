AOS.init();

const dataDoEvento = new Date("Dec 12, 2024 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEVento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEVento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEVento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEVento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEVento}d ${horasAteOEVento}h ${minutosAteOEVento}m ${segundosAteOEVento}s`;

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);

        document.getElementById('contador').innerHTML = 'Evento expirado'
    }

}, 1000);