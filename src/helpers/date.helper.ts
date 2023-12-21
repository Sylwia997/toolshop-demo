export function formatDateForRegister(data: Date): string {
  const tmp = data.toISOString();
  const [year, month, day] = tmp.split('T')[0].split('-');
  return `${year}-${month}-${day}`;
}
export function formatDateForCartValidation(data: Date): string {
  const tmp = data.toISOString();
  const [month] = tmp.split('T')[0].split('-')[1];
  const [year] = tmp.split('T')[0].split('-')[0];
  return `${month}/${year}`;
}
