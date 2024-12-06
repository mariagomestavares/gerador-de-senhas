// Referências aos elementos
const lengthInput = document.getElementById('length');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const generateButton = document.getElementById('generate');
const passwordOutput = document.getElementById('password');
const copyButton = document.getElementById('copy');

// Conjunto de caracteres
const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const NUMBERS = '0123456789';
const SYMBOLS = '!@#$%^&*()-_=+[]{}|;:,.<>?/';

// Função para gerar a senha
function generatePassword() {
  const length = parseInt(lengthInput.value);
  const includeUppercase = uppercaseCheckbox.checked;
  const includeLowercase = lowercaseCheckbox.checked;
  const includeNumbers = numbersCheckbox.checked;
  const includeSymbols = symbolsCheckbox.checked;

  let availableCharacters = '';

  if (includeUppercase) availableCharacters += UPPERCASE;
  if (includeLowercase) availableCharacters += LOWERCASE;
  if (includeNumbers) availableCharacters += NUMBERS;
  if (includeSymbols) availableCharacters += SYMBOLS;

  if (availableCharacters === '') {
    passwordOutput.value = 'Selecione ao menos um tipo de caractere!';
    return;
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * availableCharacters.length);
    password += availableCharacters[randomIndex];
  }

  passwordOutput.value = password;
}

// Função para copiar a senha
function copyToClipboard() {
  passwordOutput.select();
  document.execCommand('copy');
  alert('Senha copiada para a área de transferência!');
}

// Event listeners
generateButton.addEventListener('click', generatePassword);
copyButton.addEventListener('click', copyToClipboard);
