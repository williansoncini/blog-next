export const formatDate = (date: string): string => {
  const dateObj = new Date(date);
  console.log(date);
  return dateObj.toLocaleDateString('pt-br', {
    timeZone: 'America/Sao_Paulo',
  });
};
