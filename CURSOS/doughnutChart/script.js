//COLORS
const BACKGROUND_COLORS = ['rgba(255, 99, 132, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)'];
const BORDER_COLORS = ['rgba(255, 99, 132, 1)','rgba(54, 162, 235, 1)','rgba(255, 206, 86, 1)','rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)','rgba(255, 159, 64, 1)'];

//DATA
var data=[120,40,98,63]
//SUM DATA VALUES

var getTotal = ()=>{sum=data.reduce((a, b) => a + b, 0);return (`Total de horas: ${sum}`)}
//CHART

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Curso em Vídeo: Python","Curso em Vídeo: JavaScript","DIO: Spread Fullstack Developer", "DIO: Órbi Web Games Developer"],
        datasets: [{
            label: '# of Votes',
            data: data,
            backgroundColor: BACKGROUND_COLORS,
            borderColor: BORDER_COLORS,
            borderWidth: 3,
            borderRadius: 10,
        }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
            display: true,
            text: 'Cursos Realizados',
            font: {
              size:50,
            }
        },
        subtitle: {
          display: true,
          text: getTotal,
          font:{
            size: 25
          }
      },
        legend: {
          position: "bottom",
          labels: {
            font: {
                size: 20,
                weight: "bolder",
            }
          }
      }
    }
    }
    }
);