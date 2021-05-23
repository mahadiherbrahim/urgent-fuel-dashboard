// === include 'setup' then 'config' above ===

// <block:setup:1>
const labels = [
    '0',
    'Sat',
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri'
];
const rowset = [
    '250',
    '500',
    '750',
    '1000'
]

const data = {
    labels: labels,
    datasets: [{
        label: "Urgent Fuel",
        fill: true,
        backgroundColor: 'rgb(248, 144, 44,0.4)',
        borderColor: '#f8902c',
        data: [0, 100, 300, 200, 400, 402, 604, 203],
    }]
};
// </block:setup>

// <block:config:0>
const config = {
    type: 'line',
    data,
    options: {
        legend: {
            display: false,
        },
        scales: {
            y: {
                min: 0,
                max: 1000,
                scaleSteps: 250,
            }
        }
    }
};
// </block:config>

module.exports = {
    actions: [],
    config: config,
};

var myChart = new Chart(
    document.getElementById('myChart'),
    config
);
