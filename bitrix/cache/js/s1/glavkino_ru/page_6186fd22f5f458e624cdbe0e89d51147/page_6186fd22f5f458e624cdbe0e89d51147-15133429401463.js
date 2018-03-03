
; /* Start:"a:4:{s:4:"full";s:89:"/bitrix/templates/.default/components/bitrix/news.list/ajax_list/script.js?14865667541094";s:6:"source";s:74:"/bitrix/templates/.default/components/bitrix/news.list/ajax_list/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
function newsLoader(p){
	var o = this;
	//this.root = $(p.root);
	this.newsBlock = $(p.newsBlock);
	this.newsLoader = $(p.newsLoader);
	//this.ajaxLoader = $(p.ajaxLoader);	
	
	this.curPage = 1;	
	this.loadSett = (p.loadSett);
		
	// загружаем дополнительные новости
	this.loadMoreNews = function(){
		var loadUrl = location.href;
			if(location.search != ''){
				loadUrl += '&';
			}
			else{
				loadUrl += '?';
			}
			loadUrl  += 'PAGEN_'+ o.loadSett.navNum +'=' + (++o.curPage);
			
			//o.ajaxLoader.show();
			
			o.newsLoader[0].classList.add("loading");
	
		$.ajax({
				url: loadUrl,
				type: "POST",
				data:{
					AJAX: 'Y'					
				}
			})
			.done(function(html){
				 o.newsBlock.append(html);
				 o.newsLoader[0].classList.remove("loading");
				 //o.ajaxLoader.hide();

				 if(o.curPage == o.loadSett.endPage){
					 o.newsLoader.parent().hide(); 
				 }				
			});
	}
	
	this.init = function(){
		o.newsLoader.click(function(event){
			o.loadMoreNews();
			event.preventDefault();
		})
	}

}
/* End */
;; /* /bitrix/templates/.default/components/bitrix/news.list/ajax_list/script.js?14865667541094*/
