function pow(num, degree) {
    if (degree === 0) {
      return 1;
    } else if (degree < 0) {
      return 1 / pow(num, -degree);
    } else {
      return num * pow(num, degree - 1);
    }
  }
  
  const base = Number(prompt("Введіть число, яке потрібно піднести до ступеню:"));
  const exponent = Number(prompt("Введіть ступінь, до якого потрібно піднести число:"));
  
  const result = pow(base, exponent);
  console.log(`${base} в ступені ${exponent} = ${result}`);