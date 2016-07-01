console.log("--------------Task 1--------------");

var data,
	dataTemplateHtml,
	dataTemplate;


data = {        
	headers : ['Vendor', 'Model', 'OS'],          
	items : [{          
	  col1: 'Nokia',            
	  col2: 'Lumia 920',            
	  col3: 'Windows Phone'                      
	}, {          
	  col1: 'LG',            
	  col2: 'Nexus 5',            
	  col3: 'Android'                      
	}, {          
	  col1: 'Apple',            
	  col2: 'iPhone 6',                        
	  col3: 'iOS'                      
	}]          
}; 



dataTemplateHtml = document.getElementById('vendors-template').innerHTML;
dataTemplate = Handlebars.compile(dataTemplateHtml);
document.getElementById('root').innerHTML = dataTemplate({
	data: data
});

console.log("----------------------------------");




console.log("--------------Task 2--------------");

var data2,
	data2TemplateHtml,
	data2Template;

var data2 = {
  animals: [{
   name: 'Lion',
   url: 'https://susanmcmovies.files.wordpress.com/2014/12/the-lion-king-wallpaper-the-lion-king-2-simbas-pride-4685023-1024-768.jpg'
  }, {
   name: 'Turtle',
    url: 'http://www.enkivillage.com/s/upload/images/a231e4349b9e3f28c740d802d4565eaf.jpg'
  }, {
    name: 'Dog'              
  }, {
    name: 'Cat',
    url: 'http://i.imgur.com/Ruuef.jpg'
  }, {
    name: 'Dog Again'              
  }] 
};


data2TemplateHtml = document.getElementById('animals-template').innerHTML;
data2Template = Handlebars.compile(data2TemplateHtml);
document.getElementById('container').innerHTML = data2Template(
	data2
);

console.log("----------------------------------");






console.log("--------------Task 3--------------");


var listView = function() {
var listViewtemplateHtml = document.getElementById('books-template').innerHTML;
var listViewTemplate = Handlebars.compile(listViewtemplateHtml);

console.log(listViewTemplate);
var listView = {
    list: [{
        id: 1,
        title: 'JavaScript: The Good Parts'
    }, {
        id: 2,
        title: 'Secrets of the JavaScript Ninja'
    }, {
        id: 3,
        title: 'Core HTML5 Canvas'
    }, {
        id: 4,
        title: 'JavaScript Patterns'
    }]
}
var result = listViewTemplate(listView);
console.log(result);
document.getElementById('books-list').innerHTML = result;
};


listView();



















console.log("----------------------------------");