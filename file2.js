const a =Number(prompt(введите сторону a))
const b =Number(prompt(введите сторону b))
const с =Number(prompt(введите сторону c))

if (a>b+c) {
	alert(a не может быть стороной треугольника)
};

if (b>c+a) {
	alert(b не может быть стороной треугольника)
};

if (c>a+b) {
	alert(c не может быть стороной треугольника)
};
