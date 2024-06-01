var ctx = document.getElementById('efficiencyComparisonChart').getContext('2d');
var efficiencyComparisonChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Máquina 1', 'Máquina 2', 'Máquina 3', 'Máquina 4', 'Máquina 5'],
    datasets: [{
      label: 'Eficiência',
      data: [80, 90, 70, 85, 95],
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Gráfico de Barras de Comparação de Eficiência'
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});