const a = Number(prompt('Введите первое число'));
const b = Number(prompt('Введите второе число'));
const с = Number(prompt('Введите третье число'));
const в = Number(prompt('Введите четвертое число'));

const max =(a>b) ? a : b;
const xmax =(c>d) ? c : d;
const xxxmax =(xmax>max) ? xmax : max;
const garm =4/((1/a)+(1/b)+(1/c)+<1/d);
alert(xxxmax);
alert(garm);