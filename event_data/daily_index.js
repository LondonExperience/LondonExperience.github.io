anychart.onDocumentReady(function () {
    // create data set on our data
    chartData = {
        title: 'Event count by time in a week',
        header: ['#', 'Wednesday May1', 'Thursday May2', 'Friday May3', 'Saturday May4', 'Sunday May5', 'Monday May6', 'Tuesday May7'],
        rows: [
    ["8:00-10:00", 0,6,1,2,3,1,7],
    ["10:00-12:00", 1,1,4,3,6,9,2],
    ["12:00-14:00", 3,2,2,5,6,5,11,4],
    ["14:00-16:00", 3,4,0,5,12,3],
    ["16:00-18:00", 5,8,7,2,4,2,6],
    ["18:00-20:00", 37,27,26,15,5,15,27],
    ["20:00-22:00", 0,2,7,11,5,3,1],
    ["22:00-24:00", 0,0,1,7,10,0,0]

        ]
    };

    // create column chart
    var chart = anychart.column();

    // set chart data
    chart.data(chartData);

    // turn on chart animation
    chart.animation(true);

    chart.yAxis().labels().format('{%Value}{groupsSeparator: }');

    // set titles for Y-axis
    chart.yAxis().title('event count');

    chart.labels()
            .enabled(true)
            .position('center-top')
            .anchor('center-bottom')
            .format('{%Value}{groupsSeparator: }');
    chart.hovered().labels(false);

    // turn on legend and tune it
    chart.legend()
            .enabled(true)
            .fontSize(13)
            .padding([0, 0, 20, 0]);

    // interactivity settings and tooltip position
    chart.interactivity().hoverMode('single');

    chart.tooltip()
            .positionMode('point')
            .position('center-top')
            .anchor('center-bottom')
            .offsetX(0)
            .offsetY(5)
            .titleFormat('{%X}')
            .format('{%SeriesName} : {%Value}{groupsSeparator: }');

    // set container id for the chart
    chart.container('container');

    // initiate chart drawing
    chart.draw();
});