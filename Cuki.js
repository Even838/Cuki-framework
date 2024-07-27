const agora = new Date();const horas = agora.getHours();
 const minutos = agora.getMinutes();const horarioAtual = `${horas}:{minutos < 10 ? '0' : ''}${minutos}`;console.log(`Horário atual: {horarioAtual}`);}
