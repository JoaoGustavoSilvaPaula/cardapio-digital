export const convertNumberToMoney = (value: number): string => {
  ///return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return formatter.format(value);
};
