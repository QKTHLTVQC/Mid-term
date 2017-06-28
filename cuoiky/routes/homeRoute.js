var express = require('express');
var product = require('../models/product');
var homeRoute = express.Router();

// homeRoute.get('/', function(req, res) {
//  	product.loadTopBid()
//         .then(function(data) {
//             res.render('home/index', {
//                 layoutModels: res.locals.layoutModels,
//                 products: data.list,
//                 isEmpty: data.total,
//             });
//         });
// });

homeRoute.get('/', function(req, res) {
    product.loadTopBid()
        .then(function(rows) {
	        product.loadTopCost()
		        .then(function(rows2) {	
		        	product.loadTopEndTime()
		        		.then(function(rows3) {	
			            var ret = {
			                layoutModels: res.locals.layoutModels,
			                products: rows,
			                products2: rows2,
			                products3: rows3,
			                isEmpty: rows.total===0,
			            }
	            res.render('home/index', ret);  
	        }); 
        });
    });
    

});

homeRoute.get('/', function(req, res) {
    product.loadTopBid()
        .then(function(rows) {
	        product.loadTopCost()
		        .then(function(rows2) {	
		        	product.loadTopEndTime()
		        		.then(function(rows3) {	
			            var ret = {
			                layoutModels: res.locals.layoutModels,
			                products: rows,
			                products2: rows2,
			                products3: rows3,
			                isEmpty: rows.total===0,
			            }
	            res.render('home/index', ret);  
	        }); 
        });
    });
    

});
module.exports = homeRoute;