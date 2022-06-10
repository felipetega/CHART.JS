var DEFAULT_COLORS = ['rgba(255, 26, 104, 0.2)','rgba(54, 162, 235, 0.2)','rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)','rgba(153, 102, 255, 0.2)','rgba(255, 159, 64, 0.2)','rgba(0, 0, 0, 0.2)']
var DEFAULT_BORDER_COLORS = ['rgba(255, 26, 104, 1)','rgba(54, 162, 235, 1)','rgba(255, 206, 86, 1)','rgba(75, 192, 192, 1)','rgba(153, 102, 255, 1)','rgba(255, 159, 64, 1)','rgba(0, 0, 0, 1)']

var getTotal = function(myChart) {
	var sum = myChart.config.data.datasets[0].data.reduce((a, b) => a + b, 0);
	return `Total: ${sum}`;
}
//Chart.register(ChartDataLabels); //
// Doughnut with one line of text in the center
ctx = document.getElementById('chart').getContext('2d');
var myChart3 = new Chart(ctx, {
	type: 'doughnut',
	data: {
		datasets: [{
			data: [120,40,98,63],
			backgroundColor: DEFAULT_COLORS,
			borderColor: DEFAULT_BORDER_COLORS,
			borderWidth: 4,
			label: 'Dataset 1'
		}],
		labels: ["Curso em Vídeo: Python","Curso em Vídeo: JavaScript","DIO: Spread Fullstack Developer", "DIO: Órbi Web Games Developer"]
	},
	options: {
		responsive: true,
		legend: {
			display: true,
			position: 'bottom',
			labels:{
				fontColor: 'black',
				fontSize: 15,
			}
		},
		title: {
			display: true,
			fontSize: 50,
			fontColor: "black",
			fontStyle: "bold",
			text: 'Cursos realizados',
		},
		animation: {
			animateScale: true,
			animateRotate: true
		},
		plugins: {
			doughnutlabel: {
				labels: [
					{
						text: getTotal,
						color: 'black',
						font: {
							size: '90',
							family: 'Arial, Helvetica, sans-serif',
							style: 'italic',
							weight: 'bold'
						},
					}
				]
			}
		}
	}
});
