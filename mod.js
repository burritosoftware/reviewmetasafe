// URLs
var baseUrl = 'https://reviewmeta.com/';
var apiUrls = {};
apiUrls[1] = 'amazon/';
apiUrls[4] = 'amazon-ca/';
apiUrls[3] = 'amazon-uk/';
apiUrls[5] = 'amazon-au/';
apiUrls[7] = 'amazon-fr/';
apiUrls[6] = 'amazon-de/';
apiUrls[8] = 'amazon-it/';
apiUrls[9] = 'amazon-jp/';
apiUrls[10] = 'amazon-in/';
apiUrls[11] = 'amazon-es/';
apiUrls[12] = 'amazon-cn/';
apiUrls[13] = 'amazon-mx/';
apiUrls[14] = 'amazon-br/';
apiUrls[15] = 'amazon-nl/';
apiUrls[16] = 'amazon-sg/';


//Set up the target_url varable.
var target_url = baseUrl;

var self_url = window.location.href;

//First let's figure out what is the source.
var ret_source = 0;
var productSource = 0;
if (self_url.indexOf('amazon.com.au') !== -1) {	
	productSource = 5;
}  else if (self_url.indexOf('amazon.com.mx') !== -1) {	
  		productSource = 13;
	} else if (self_url.indexOf('amazon.com.br') !== -1) {	
  		productSource = 14;
	} else if (self_url.indexOf('amazon.ca') !== -1) {	
  		productSource = 4;
	} else if (self_url.indexOf('amazon.co.uk') !== -1) {	
  		productSource = 3;
	} else if (self_url.indexOf('amazon.com') !== -1) {	
  		productSource = 1;
	} else if (self_url.indexOf('amazon.de') !== -1) {	
  		productSource = 6;
	} else if (self_url.indexOf('amazon.fr') !== -1) {	
  		productSource = 7;
	} else if (self_url.indexOf('amazon.it') !== -1) {	
  		productSource = 8;
	} else if (self_url.indexOf('amazon.co.jp') !== -1) {	
  		productSource = 9;
	} else if (self_url.indexOf('amazon.in') !== -1) {	
  		productSource = 10;
	} else if (self_url.indexOf('amazon.es') !== -1) {	
  		productSource = 11;
	} else if (self_url.indexOf('amazon.cn') !== -1) {	
  		productSource = 12;
	} else if (self_url.indexOf('amazon.nl') !== -1) {	
  		productSource = 15;
	}
	

var isMemberReview = self_url.search('/member-reviews/');
var isCustomerReview = self_url.search('/customer-reviews/');
var isCustomerProfile = self_url.search('/profile/');
var isSingleReview = self_url.search('/review/');

if ( isMemberReview >= 0 || isCustomerReview >= 0 || isCustomerProfile >= 0 || isSingleReview >= 0 ) {
    //ret = {};
} else {
    var matchResults = self_url.match("\\/([A-Z0-9]{10})(?:\\/|\\?|$)");
    
    if (matchResults && matchResults && matchResults[1] && matchResults[1].length) {
        var ret_asin = matchResults[1];
        ret_source = productSource;
    }
}

if (ret_source) {
	
	target_url = baseUrl + apiUrls[ret_source] + ret_asin;
	
}

//alert('Target UrL: ' + target_url + ' ret_source: ' + ret_source + ' productSource: ' + productSource);
window.open(target_url, '_blank');
