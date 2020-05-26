/**
 * Classe responsável pela validação de um CPF
 */
abstract class CPFValidator {

  /**
   * Realiza a validação do CPF
   *
   * @param cpf CPF a ser validado
   */
  public static isValid(cpf: string): boolean {
    cpf = cpf.replace(/[^\d]/g, '');

    if (cpf.length !== 11) {
      return false;
    }

    if (/^(\d)\1+$/.test(cpf)) {
      return false;
    }

    let numbers: string = cpf.substr(0, 9);
    numbers += this.verifierDigit(numbers);
    numbers += this.verifierDigit(numbers);

    return numbers.substr(-2) === cpf.substr(-2);
  }

  private static verifierDigit(digits: string): number {
    const numbers: number[] = digits
      .split('')
      .map((digit) => parseInt(digit, 10));

    const modulus: number = numbers.length + 1;
    const multiplied: number[] = numbers.map((digit, index) => digit * (modulus - index));
    const mod: number = multiplied.reduce((buffer, digit) => buffer + digit) % 11;

    return (mod < 2 ? 0 : 11 - mod);
  }

}

export default CPFValidator;
