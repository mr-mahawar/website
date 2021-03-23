AOS.init();
const dropDownBtn = document.getElementById('dropDownBtn');

let browsers = document.getElementById('browsers').getContext('2d');
let os = document.getElementById('os').getContext('2d');
let companies = document.getElementById('companies').getContext('2d');
let gender = document.getElementById('gender').getContext('2d');
let age = document.getElementById('age').getContext('2d');
let performance = document.getElementById('performance').getContext('2d');

google.charts.load('current', {
    'packages':['geochart'],
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
  });
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
      ['Country', 'Popularity'],
      ['Afganisthan', 2],
      ['Albania', 10],
      ['Algeria', 8],
      ['Anguilla', 6],
      ['Argentina', 15],
      ['Armenia', 2],
      ['Australia', 9],
    ]);

    var options = {
        colors: ['#2A3F54']
    };

    var chart = new google.visualization.GeoChart(document.getElementById('map'));

    chart.draw(data, options);
  }


Chart.defaults.global.defaultFontFamily = 'Oswald';

let browsersChart = new Chart(browsers, {
    type: 'horizontalBar',
    data: {
        labels:['Firefox', 'Chrome', 'Safari', 'Opera', 'IE/Edge'],
        datasets:[{
            label: 'Usage',
            data:[
                1106,
                2257,
                364,
                179,
                525,
            ],
            backgroundColor:[
                '#6DDAE4',
                '#D98880',
                '#F6D600',
                '#E5E4E2',
                '#E3B9F3'
            ]
        }]
    },
    options: {
        title:{
            display: true,
            text: 'Browsers',
            fontSize: 22,
        }
    }
});

let osChart = new Chart(os, {
    type: 'doughnut',
    data: {
        labels:['IOS', 'Web', 'Cross', 'Android'],
        datasets:[{
            label: 'Usage',
            data:[
                17,
                15,
                5.9,
                62.1,
            ],
            backgroundColor:[
                '#3567CC',
                '#DC392A',
                '#ED9720',
                '#46961A',
            ]
        }]
    },
    options: {
        title:{
            display: true,
            text: 'Types of Projects',
            fontSize: 22,
        }
    }
});

let companiesChart = new Chart(companies, {
    type: 'bar',
    data: {
        labels:['Acer', 'HTC', 'Microsoft', 'Nvidia', 'Panasonic', 'Siemens', 'XOLO', 'Apple', 'Dell', 'HP', 'Intex', 'Lava', 'Micromax', 'Oppo', 'Toshiba', 'Xiaomi', 'Amazon', 'Cherry Mobile', 'vivo', 'vsmart', 'Ige', 'Infix'],
        datasets:[{
            label: 'Usage',
            backgroundColor: "#4386C2",
            data:[
                36,
                1,
                64,
                192,
                23,
                277,
                1,
                191,
                3,
                923,
                1,
                56,
                4,
                114,
                1451,
                8,
                112,
                8,
                106,
                207,
                6,
                2,
                5,
                111,
                29,
                71,
                105,
                3,
                7,
                2,
                520,
                9,
                19,
                108,
                4,
                24,
                64,
                2,
                1,
                34,
                1,
                46,
                2,
                26,
            ],
            // backgroundColor:[
            //     '#4386C2',
            // ]
        }]
    },
    options: {
        title:{
            display: true,
            text: 'Companies',
            fontSize: 22,
        }
    }
});

let genderChart = new Chart(gender, {
    type: 'pie',
    data: {
        labels:['Male', 'Female'],
        datasets:[{
            label: 'Gender',
            data:[
                58.4,
                41.6,
            ],
            backgroundColor:[
                '#3567CC',
                '#DC392A',
            ],
        }]
    },
    options: {
        title:{
            display: true,
            text: 'Gender Demography',
            fontSize: 22,
        }
    }
});

let ageChart = new Chart(age, {
    type: 'pie',
    data: {
        labels:['20-30 Year', '30-40 Year', '40-50 Year'],
        datasets:[{
            label: 'Gender',
            data:[
                73.3,
                22.8,
                3.1,
            ],
            backgroundColor:[
                '#54B127',
                '#448E80',
                '#ABB2B9',
            ],
        }]
    },
    options: {
        title:{
            display: true,
            text: 'Age Demography',
            fontSize: 22,
        }
    }
});

let performanceChart = new Chart(performance, {
    type: 'line',
    data: {
        labels:['19 July', '20 July', '21 July', '22 July', '23 July', '24 July', '25 July'],
        datasets:[{
            label: 'Logins',
            data:[
                7,
                20,
                7,
                15,
                12,
                33,
                9,
            ],
            lineTension: 0,
            fill: false,
        }]
    },
    options: {
        title:{
            display: true,
            text: 'Week Performance',
            fontSize: 22,
        }
    }
});

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('#dropDownBtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


dropDownBtn.addEventListener('click', myFunction);