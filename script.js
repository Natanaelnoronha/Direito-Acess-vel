function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}
function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
} 

function showTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.style.display = 'none';
  });
  document.getElementById(tabId).style.display = 'block';
}

function calcularFerias() {
  const salario = parseFloat(document.getElementById('salario-ferias').value);
  if (!salario || salario <= 0) {
    alert("Por favor, insira um salário válido.");
    return;
  }
  const resultado = salario + salario / 3; // Salário + 1/3 adicional
  document.getElementById('resultado-ferias').textContent = `Você receberá R$ ${resultado.toFixed(2)} nas férias.`;
}

function calcularDecimo() {
  const salario = parseFloat(document.getElementById('salario-decimo').value);
  const meses = parseInt(document.getElementById('meses-decimo').value, 10);
  if (!salario || !meses || meses <= 0 || meses > 12) {
    alert("Por favor, insira valores válidos.");
    return;
  }
  const resultado = (salario / 12) * meses;
  document.getElementById('resultado-decimo').textContent = `Você receberá R$ ${resultado.toFixed(2)} de décimo terceiro.`;
}

function calcularHorasExtras() {
  const salario = parseFloat(document.getElementById('salario-horas').value);
  const horasExtras = parseFloat(document.getElementById('horas-extras').value);
  if (!salario || !horasExtras || horasExtras <= 0) {
    alert("Por favor, insira valores válidos.");
    return;
  }
  const valorHora = salario / 220; // 220 horas mensais padrão
  const resultado = horasExtras * valorHora * 1.5; // Adicional de 50% por hora extra
  document.getElementById('resultado-horas').textContent = `Você receberá R$ ${resultado.toFixed(2)} por suas horas extras.`;
}
