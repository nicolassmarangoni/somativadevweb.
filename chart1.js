var ctx = document.getElementById('dailyProductionChart').getContext('2d');
var dailyProductionChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['1º', '2º', '3º', '4º', '5º', '6º', '7º', '8º', '9º', '10º', '11º', '12º', '13º', '14º', '15º', '16º', '17º', '18º', '19º', '20º', '21º', '22º', '23º', '24º', '25º', '26º', '27º', '28º', '29º', '30º'],
    datasets: [{
      label: 'Peças Automotivas A',
      data: [100, 120, 110, 130, 140, 120, 110, 130, 140, 120, 110, 130, 140, 120, 110, 130, 140, 120, 110, 130, 140, 120, 110, 130, 140, 120, 110, 130, 140],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }, {
      label: 'Peças Automotivas B',
      data: [80, 90, 100, 110, 120, 110, 100, 110, 120, 110, 100, 110, 120, 110, 100, 110, 120, 110, 100, 110, 120, 110, 100, 110, 120, 110, 100, 110, 120],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }, {
      label: 'Peças Automotivas C',
      data: [60, 70, 80, 90, 100, 90, 80, 90, 100, 90, 80, 90, 100, 90, 80, 90, 100, 90, 80, 90, 100, 90, 80, 90, 100, 90, 80, 90, 100],
      backgroundColor: 'rgba(255, 206, 86, 0.2)',
      borderColor: 'rgba(255, 206, 86, 1)',
      borderWidth: 1
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Gráfico diário de linhas de produção'
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});