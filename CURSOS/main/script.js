var DEFAULT_COLORS = ['rgba(255, 26, 104, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)','rgba(0, 0, 0, 0.2)']
var DEFAULT_BORDER_COLORS = ['rgba(255, 26, 104, 1)','rgba(54, 162, 235, 1)','rgba(255, 206, 86, 1)','rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)','rgba(255, 159, 64, 1)','rgba(0, 0, 0, 1)']

Chart.register(ChartDataLabels);
ctx = document.getElementById('myChart').getContext('2d');
var myDoughnutChart = {
  type: 'doughnut',
  data: {
    labels: ["Curso em Vídeo: Python","Curso em Vídeo: JavaScript","DIO: Spread Fullstack Developer", "DIO: Órbi Web Games Developer"],
    datasets: [{
      data: [120,40,98,63],
      backgroundColor: DEFAULT_COLORS,
      borderColor: DEFAULT_BORDER_COLORS,
      borderWidth: 4,
      borderRadius: 10,
    }]
    },
  options: {
    plugins: {
      datalabels: {
        display: true,
        align: "center",
        color: "black",
        borderRadius: 3,
        font: {
          size: 50,
        }
    },
      legend: {
        position: "bottom",
        labels: {
          font: {
            size: 18,
            family: 'Helvetica Neue',
            weight: "bolder",
          }
        },
      },
      title: {
        display: true,
        padding: 10,
        font: {
          size: 30,
          family: 'Helvetica Neue'
        },
        text: "CURSOS REALIZADOS",
        color: "black",
          },
      subtitle: {
        display: true,
        text: `${getTotal}`,
        padding: 10,
        font: {
          size: 30,
          family: 'Helvetica Neue',
          weight: "bolder",
        },
        }
}
}
}

var getTotal = function(myDoughnutChart) {
  var sum = myDoughnutChart.config.data.datasets[0].data.reduce((a, b) => a + b, 0);
  var sum = 120+40+98+63
  return `Total: ${sum}`;};
// render init block
const myChart = new Chart(
  document.getElementById('myChart'),
  myDoughnutChart,
  );
