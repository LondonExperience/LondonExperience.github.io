Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Sum of Station Exit & Entry People Count in Each Borough, 2017'
    },
    subtitle: {
        text: 'Source: TfL and London Datastore.com'
    },
    xAxis: {
        categories: [
          'Barking and Dagenham',
           'Barnet',
           'Brent',
           'Camden',
           'Chiltern',
           'City of London',
           'City of Westminster',
           'Ealing',
           'Enfield',
           'Epping Forest',
           'Greenwich',
           'Hackney',
           'Hammersmith and Fulham',
           'Haringey',
           'Harrow',
           'Havering',
           'Hillingdon',
           'Hounslow',
           'Islington',
           'Kensington and Chelsea',
           'Lambeth',
           'Merton',
           'Newham',
           'Redbridge',
           'Richmond',
           'Southwark',
           'Three Rivers',
           'Tower Hamlets',
           'Waltham Forest',
           'Wandsworth',
           'Watford'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Count'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Station People Flow (Million People)',
        data: [33.62,63.56,98.09,308.83,5.12,242.4,655.29,67.71,15.02,14.14,28.15,8.69,125.59,66.69,36.2,12.19,46.19,25.57,145.75,151.16,194.88,36.77,110.1,39.77,
          157.75,5.53,146.81,43.06,59.45,1.86]

    }]
});

Highcharts.chart('container2', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Weekdays Station Exit & Entry People Count in Each Borough, 2017'
    },
    subtitle: {
        text: 'Source: TfL and London Datastore.com'
    },
    xAxis: {
        categories: [
          'Barking and Dagenham',
           'Barnet',
           'Brent',
           'Camden',
           'Chiltern',
           'City of London',
           'City of Westminster',
           'Ealing',
           'Enfield',
           'Epping Forest',
           'Greenwich',
           'Hackney',
           'Hammersmith and Fulham',
           'Haringey',
           'Harrow',
           'Havering',
           'Hillingdon',
           'Hounslow',
           'Islington',
           'Kensington and Chelsea',
           'Lambeth',
           'Merton',
           'Newham',
           'Redbridge',
           'Richmond',
           'Southwark',
           'Three Rivers',
           'Tower Hamlets',
           'Waltham Forest',
           'Wandsworth',
           'Watford'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Count'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y} </b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Entry Count (People)',
        data: [54948,
  105022,
  156470,
  486780,
  8671,
  424168,
  1002122,
  110353,
  23521,
  23324,
  40613,
  13539,
  203866,
  106792,
  58342,
  20380,
  74422,
  41000,
  240252,
  230476,
  311788,
  57781,
  169736,
  65207,
  18507,
  235857,
  10058,
  236531,
  64383,
  95084,
  3307]

    },
    {
      name:'Exit Count (People)',
      data:[52289,
  99655,
  150211,
  475064,
  8810,
  429092,
  1010051,
  105322,
  22654,
  23070,
  42343,
  12569,
  194099,
  100298,
  58309,
  20375,
  67785,
  40544,
  227376,
  224693,
  304148,
  56108,
  158954,
  62193,
  18723,
  224568,
  9037,
  233997,
  68117,
  91175,
  2873]
    }
  ]
});

Highcharts.chart('container3', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Saturday Station Exit & Entry People Count in Each Borough, 2017'
    },
    subtitle: {
        text: 'Source: TfL and London Datastore.com'
    },
    xAxis: {
        categories: [
          'Barking and Dagenham',
           'Barnet',
           'Brent',
           'Camden',
           'Chiltern',
           'City of London',
           'City of Westminster',
           'Ealing',
           'Enfield',
           'Epping Forest',
           'Greenwich',
           'Hackney',
           'Hammersmith and Fulham',
           'Haringey',
           'Harrow',
           'Havering',
           'Hillingdon',
           'Hounslow',
           'Islington',
           'Kensington and Chelsea',
           'Lambeth',
           'Merton',
           'Newham',
           'Redbridge',
           'Richmond',
           'Southwark',
           'Three Rivers',
           'Tower Hamlets',
           'Waltham Forest',
           'Wandsworth',
           'Watford'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Count'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y} </b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Entry Count (People)',
        data: [36441,
  64984,
  113815,
  343616,
  4173,
  142797,
  792199,
  73293,
  18555,
  14683,
  35817,
  11134,
  141575,
  77563,
  36981,
  11949,
  54499,
  26530,
  155763,
  194671,
  216527,
  43812,
  150647,
  42361,
  19438,
  161477,
  4127,
  145397,
  49911,
  70445,
  1654]

    },
    {
      name:'Exit Count (People)',
      data:[36441,
  64984,
  113815,
  343616,
  4173,
  142797,
  792199,
  73293,
  18555,
  14683,
  35817,
  11134,
  141575,
  77563,
  36981,
  11949,
  54499,
  26530,
  155763,
  194671,
  216527,
  43812,
  150647,
  42361,
  19438,
  161477,
  4127,
  145397,
  49911,
  70445,
  1654]
    }
  ]
});
