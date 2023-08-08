export function isValidCPF (cpf: string) {
  cpf = cpf.replace(/\D/g, '')
  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false
  let result = true
  ;[9, 10].forEach(j => {
    let soma = 0,
      r
    cpf
      .split(/(?=)/)
      .splice(0, j)
      .forEach((e, i) => {
        soma += parseInt(e) * (j + 2 - (i + 1))
      })
    r = soma % 11
    r = r < 2 ? 0 : 11 - r
    if (r !== parseInt(cpf.substring(j, j + 1))) result = false
  })
  return result
}

export function formatCPF (cpf: string) {
  cpf = cpf.replace(/\D/g, '')
  if (cpf.length > 3) cpf = cpf.replace(/^(\d{3})(\d)/g, '$1.$2')
  if (cpf.length > 6) cpf = cpf.replace(/^(\d{3})\.(\d{3})(\d)/g, '$1.$2.$3')
  if (cpf.length > 9)
    cpf = cpf.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/g, '$1.$2.$3-$4')
  return cpf
}

export function formatPhoneNumber (phoneNumber: string) {
  phoneNumber = phoneNumber.replace(/\D/g, '')
  if (phoneNumber.length === 11) {
    phoneNumber = phoneNumber.replace(/^(\d{2})(\d{5})(\d{4})/g, '($1) $2-$3')
  } else if (phoneNumber.length === 10) {
    phoneNumber = phoneNumber.replace(/^(\d{2})(\d{4})(\d{4})/g, '($1) $2-$3')
  }
  return phoneNumber
}
