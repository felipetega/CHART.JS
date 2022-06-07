var DEFAULT_COLORS1 = ['#f08700', '#f49f0a', '#efca08', '#00a6a6', '#bbdef0'];
var DEFAULT_COLORS2 = ['#7fb7be', '#357266', '#dacc3e', '#bc2c1a', '#7d1538'];

var getTotal = function(myChart) {
	var sum = myChart.config.data.datasets[0].data.reduce((a, b) => a + b, 0);
	return `Total: ${sum}`;
}

// Doughnut with one line of text in the center
ctx = document.getElementById('chart').getContext('2d');
var myChart3 = new Chart(ctx, {
	type: 'doughnut',
	data: {
		datasets: [{
			data: [120,93,80,60],
			backgroundColor: DEFAULT_COLORS2,
			label: 'Dataset 1'
		}],
		labels: ['Item one', 'Item two', 'Item three', 'Item four']
	},
	options: {
		responsive: true,
		legend: {
			display: false,
			position: 'top',
		},
		title: {
			display: true,
			fontSize: 20,
			text: 'Calculated value'
		},
		animation: {
			animateScale: true,
			animateRotate: true
		},
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
			doughnutlabel: {
				labels: [
					{
						text: getTotal,
						font: {
							size: '60',
							family: 'Arial, Helvetica, sans-serif',
							style: 'italic',
							weight: 'bold'
						},
						color: '#bc2c1a'
					}
				]
			}
		}
	}
});
