// header and footer might be of format specified in http://phantomjs.org/api/webpage/property/paper-size.html

// exports.header = {
//   height: "1cm",
//   contents: function(pageNum, numPages) {
//     return 'Timothée Moulin - Software Engineer';
//   }
// }

exports.footer = {
  height: "1cm",
  contents: function(pageNum, numPages) {
    var text = "<footer><p>Timothée Moulin&nbsp;-&nbsp;Software Engineer";
    text +=  "&nbsp;-&nbsp;<a href=\"mailto:hello@timothee-moulin.me\">hello@timothee-moulin.me</a>";
    text += "&nbsp;-&nbsp;<a href=\"+41792651668\">+41 79 265 16 68</a></p>";
    text += "<p>Le Bourg 248, 1618 Châtel-St-Denis</p>";
    // text +=  "&copy; "+new Date().getFullYear()+" and beyond, All rights reserved.";
    text += "</footer>";
    text += "<style>@import url('style.css');"
    +"footer {border-top: 1px solid #dfe2e5;}"
    +"footer>* {font-size: 0.625em; margin: 5px 0; text-align: center;}"
    +"footer * {font-family: 'Roboto', 'sans-serif'; color: #6a737d;}"
    +"footer a {text-decoration: none;}"
    +"</style>";

    return text;
  }
}
