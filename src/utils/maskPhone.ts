const maskPhone = (value: string) => {
  return value
    .replace(/\D/g, '') // Remove tudo o que não é dígito
    .replace(/^(\d{2})(\d)/g, '($1) $2') // Coloca parênteses em torno dos dois primeiros dígitos
    .replace(/(\d)(\d{4})$/, '$1-$2'); // Coloca hífen antes dos últimos 4 dígitos
};

export default maskPhone;
