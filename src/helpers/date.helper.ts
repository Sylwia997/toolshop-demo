export function formatDateForRegister(data: Date): string {
  const tmp = data.toISOString();
  const [year, month, day] = tmp.split('T')[0].split('-');
  return `${year}-${month}-${day}`;
}
