let birthdayMonth = "Junho"; //Exemplo de mês de aniversário fornecido pelo usuário.
birthdayMonth = birthdayMonth.toLowerCase();  //Independente da forma que o usuário digitar o mês, ele será convertido para minúsculo para evitar erros na comparação.

const luckyMessages = [
    "A paciência pode ser amarga, mas seus frutos são doces.",
    "Todas as riquezas do mundo não valem um bom amigo.",
    "Um homem que não se alimenta de seus sonhos, envelhece cedo.",
    "Começar com calma também é uma forma de avançar.",
    "Confiar no processo traz segurança emocional e alívio mental.",
    "A curiosidade abre portas para novos universos e aprendizados.",
    "Deixe para trás o que já passou para abrir espaço para o novo.",
    "Se for para brilhar, que seja com autenticidade e estilo.",
    "A ordem exterior nutre a paz interior e clareia os pensamentos.",
    "O equilíbrio nasce quando aprendemos a escolher com o coração.",
    "A transformação profunda revela a sua verdadeira força interior.",
    "Acredite na expansão e mantenha a esperança sempre no horizonte."
];

const months = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro"
];


let randomMonth = Math.floor(Math.random() * luckyMessages.length);
    if (months.includes(birthdayMonth)) {
        console.log(luckyMessages[randomMonth]);
    } else {
        console.log("Mês inválido.");
    }
