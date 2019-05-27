README:
@Author: Yijin Zhao
> Note: better use Chrome and Safari to see the word cloud map.
(may not work in Firefox)
> It will need 5s-10s to show all of the words in word cloud map 

### wordcloud extension based on ECharts
1. Main page is [wordcloud.html](https://github.com/LondonExperience/LondonExperience.github.io/blob/master/event_data/wordcloud.html)

2. It was installed by:
```html
<script src="echarts.min.js"></script>
<script src="echarts-wordcloud.min.js"></script>
```
3. My personal function of "Event word cloud map" is written in the script file "word_cloud.js". It can be found here [word_cloud.js](https://github.com/LondonExperience/LondonExperience.github.io/tree/master/event_data/word_cloud.js)
4. In addition, here is a bar chart on the right-bottom shows frequencies and was built through Highchart.js.

### The Weekly interactive event map
1. Main page is [event.html](https://github.com/LondonExperience/LondonExperience.github.io/blob/master/event_data/event.html)
2. The script of d3 chart build in the file of [d3chart_event.js](https://github.com/LondonExperience/LondonExperience.github.io/blob/master/event_data/d3chart_event.js) with a style sheet [d3chart_event.css](https://github.com/LondonExperience/LondonExperience.github.io/blob/master/event_data/d3chart_event.css)
3. D3 chart reference from previous work of [Naushad Pasha(2014)](http://bl.ocks.org/NPashaP/96447623ef4d342ee09b)
4. The script of Anychart build in the file of [daily_index.js](https://github.com/LondonExperience/LondonExperience.github.io/blob/master/event_data/daily_index.js)

### [Javascript Library](https://github.com/LondonExperience/LondonExperience.github.io/tree/master/event_data/lib)
> include: [D3](http://d3js.org/), [Echart](https://github.com/ecomfe/echarts-wordcloud/blob/master/README.md),[Highchart](https://www.highcharts.com/), [Anychart](https://www.anychart.com/)