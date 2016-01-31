/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         isDevice = (/android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent.toLowerCase()));              
         
         
         if(isDevice) {
         
           interactionUp = "touchend";
           interactionDown = "touchstart";
           interactionOver = interactionDown;
           interactionMove = 'touchmove';
         
         } else {
         
           interactionUp = "click";
           interactionDown = "mousedown";
           interactionOver = "mouseover";
           interactionMove = 'mousemove';
         
         };
         
         //main content
         //@symbolName - the name of the symbol
         //@topText - the text (if any) for the top title (in purple)
         //@indexImage - the thumbnail image used in the index list
         //@indexTitle - the title for the index item
         //@indexBody - the bosy for the index item
         
         var pagesArray = [
         {symbolName:"Slide_00"},{symbolName:"Slide_01"},{symbolName:"Slide_02"},
         {symbolName:"Slide_03"},{symbolName:"Slide_04"},{symbolName:"Slide_05"},
         {symbolName:"Slide_06"},{symbolName:"Slide_07"},{symbolName:"Slide_08"},
         {symbolName:"Slide_09"},{symbolName:"Slide_10"},{symbolName:"Slide_11"},
         {symbolName:"Slide_12"},{symbolName:"Slide_13"},{symbolName:"Slide_14"},
         {symbolName:"Slide_15"},{symbolName:"Slide_16"},{symbolName:"Slide_17"}
         ];
         
         //number of pages
         var numPages = pagesArray.length;
         //ref to stage
         var stage = $('#Stage');
         //ref to the container that holds the pages
         var pageContainer = sym.$("pageContainer");
         //ref to the index slide out symbol
         //         var indexSymbol = sym.getSymbol('index');
         //..and its element
         //         var indexElement = indexSymbol.getSymbolElement();
         //ref to the container that holds the index items
         //         var indexListContainer = indexSymbol.$('indexListContainer');
         //the top purple text
         //refs to next and prev buttons
         var nextBtn = 		sym.$('next');
         var prevBtn = 		sym.$('back');
         //your original button refs
         
         var nav_01 = sym.getSymbol("Nav_bar").$("nav_01");
         var nav_02 = sym.getSymbol("Nav_bar").$("nav_02");
         var nav_03 = sym.getSymbol("Nav_bar").$("nav_03");
         var nav_04 = sym.getSymbol("Nav_bar").$("nav_04");
         var nav_05 = sym.getSymbol("Nav_bar").$("nav_05");
         var nav_06 = sym.getSymbol("Nav_bar").$("nav_06");
         var nav_07 = sym.getSymbol("Nav_bar").$("nav_07");
         var nav_08 = sym.getSymbol("Nav_bar").$("nav_08");
         var nav_09 = sym.getSymbol("Nav_bar").$("nav_09");
         
         
         
         
         //         var plyIndex = 	sym.$('plyIndex');
         var plyHome = 		sym.$('home');
         //         var plyPI = 		sym.$('pi');
         
         
         
         //various refs to variables
         var isDevice;
         var stageWidth = stage.width();
         var stageHeight = stage.height();
         var touchPos = {initPosX:0, threshold:5};
         var pageTweenDuration = 0.6;
         var isAnimating = false;
         
         var currentPageId = 0;
         var currentPageSymbol, currentPageElement, oldPageSymbol, oldPageElement, indexDragger;
         
         
         function init(){
         
            //build the index menu
         //            buildIndexMenu();
         
            //build the top nav
            buildNav();
         }
         
         function buildNav(){
         
         
            nextBtn.bind(interactionUp, {dir:'next'} ,clickArrow);
            prevBtn.bind(interactionUp, {dir:'prev'},clickArrow);
            //plyHome.bind(interactionUp, clickHome);
            nav_01.bind(interactionUp, clicknav_01);
            nav_02.bind(interactionUp, clicknav_02);
            nav_03.bind(interactionUp, clicknav_03);
            nav_04.bind(interactionUp, clicknav_04);
            nav_05.bind(interactionUp, clicknav_05);
            nav_06.bind(interactionUp, clicknav_06);
            nav_07.bind(interactionUp, clicknav_07);
            nav_08.bind(interactionUp, clicknav_08);
            nav_09.bind(interactionUp, clicknav_09);
         
         }
         
         function clickHome(e){ 
         
         			var dest = 0;  
         			if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         		else if(currentPageId < dest){currentPageId = dest; addPage('next'); }
            //make it glow when clicked
            glowButton(e);
         }
         
         function clicknav_01(e){ 
         			var dest = 2;  
         			if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         		else if(currentPageId < dest){currentPageId = dest; addPage('next'); }
            //make it glow when clicked 
            glowButton(e);
         }
         
         
         function clicknav_02(e){ 
         			var dest = 3;  
         			if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         		else if(currentPageId < dest){currentPageId = dest; addPage('next'); }
            //make it glow when clicked 
            glowButton(e);
         }
         
         
         function clicknav_03(e){ 
         			var dest = 4;  
         			if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         		else if(currentPageId < dest){currentPageId = dest; addPage('next'); }
            //make it glow when clicked 
            glowButton(e);
         }
         
         
         
         function clicknav_04(e){ 
         			var dest = 6;  
         			if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         		else if(currentPageId < dest){currentPageId = dest; addPage('next'); }
            //make it glow when clicked 
            glowButton(e);
         }
         
         
         function clicknav_05(e){ 
         			var dest = 9;  
         			if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         		else if(currentPageId < dest){currentPageId = dest; addPage('next'); }
            //make it glow when clicked 
            glowButton(e);
         }
         
         
         
         function clicknav_06(e){ 
         			var dest = 10;  
         			if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         		else if(currentPageId < dest){currentPageId = dest; addPage('next'); }
            //make it glow when clicked 
            glowButton(e);
         }
         
         
         function clicknav_07(e){ 
         			var dest = 11;  
         			if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         		else if(currentPageId < dest){currentPageId = dest; addPage('next'); }
            //make it glow when clicked 
            glowButton(e);
         }
         
         
         function clicknav_08(e){ 
         			var dest = 15;  
         			if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         		else if(currentPageId < dest){currentPageId = dest; addPage('next'); }
            //make it glow when clicked 
            glowButton(e);
         }
         
         
         
         function clicknav_09(e){ 
         			var dest = 16;  
         			if(currentPageId > dest){currentPageId = dest; addPage('prev'); }
         		else if(currentPageId < dest){currentPageId = dest; addPage('next'); }
            //make it glow when clicked 
            glowButton(e);
         }
         
         
		  pageContainer.bind('swipeleft', function(){
		  		highlightBtns();
         	var dest = 17;
				if (currentPageId !==dest) {
					currentPageId = checkPageId('next');
					addPage('next');
				}else if (currentPageId = dest) {
					currentPageId = checkPageId('next');
				}
			});

		  pageContainer.bind('swiperight', function(){
		  			highlightBtns();
         		var dest = 0;
               if (currentPageId !==dest) {
				   currentPageId = checkPageId('prev');
				   addPage('prev');
			   }else if (currentPageId = dest) {
				   currentPageId = checkPageId('prev');
			   }
		  });


         initPages();
		  function initPages(){
			  currentPageSymbol = sym.createChildSymbol(pagesArray[currentPageId].symbolName, pageContainer);
            currentPageElement = currentPageSymbol.getSymbolElement();

            currentPageSymbol.play(0);
         }

         function addPage(dir){
				
            //if the whole app is animating then don't do anything until it's stopped
         	if(isAnimating){return};

            oldPageSymbol = currentPageSymbol;
            oldPageElement = currentPageElement;
            oldPageSymbol.stopAll();
            currentPageSymbol = sym.createChildSymbol(pagesArray[currentPageId].symbolName, pageContainer);
            currentPageElement = currentPageSymbol.getSymbolElement();

            //set the old and new one to absolute
            TweenMax.set([oldPageElement, currentPageElement], {
               position:'absolute',
            })

//            TweenMax.set(oldPageElement, {
//              zIndex:1
//            });
//            //avoids a flash as the new one comes on to the stage
//            TweenMax.set(currentPageElement, {
//              zIndex:-1,
//              autoAlpha:0
//            })

            //if we hit next then slide the old page to the left
            TweenMax.to(oldPageElement, pageTweenDuration, {
               x:(dir == 'next') ? -stageWidth : stageWidth,
               onStart:function(){
               		isAnimating = true;
               },
               ease:Power2.linear,
               onComplete:removePage,
               onCompleteParams:[oldPageSymbol]

            })


            //if we hit next then slide the new page from the right
            TweenMax.fromTo(currentPageElement, pageTweenDuration, {
               x:(dir == 'next') ? stageWidth : -stageWidth,
               autoAlpha:0
            },{

            	x:0,
            	autoAlpha:1,
               force3D:'auto',
               ease:Power2.easeInOut,
               onComplete:function(){

                  currentPageSymbol.play(0);
             //     setTopText();
                  isAnimating = false;
                  checkArrows();

               }
            })


         }

         function removePage(s){

            s.deleteSymbol();
         }


         function setInteractionDownPos(e){

            touchPos.initPosX = (!isDevice) ? e.originalEvent.pageX : e.originalEvent.changedTouches[0].pageX ;
            touchPos.initPosY = (!isDevice) ? e.originalEvent.screenY : e.originalEvent.changedTouches[0].screenY;
         }


         function checkPageId(dir){

            var id;

            switch(dir){

               case 'next':

                  id = ((currentPageId + 1) < numPages) ? currentPageId + 1 : currentPageId;

               break;
               case 'prev':

                  id = ((currentPageId - 1) > -1) ? currentPageId - 1 : 0;

               break;


         		}


            return id;


         }

         function checkArrows(){
         	highlightBtns();
            TweenMax.to(nextBtn, 0.3, {
            	autoAlpha:(currentPageId == numPages-1) ? 0 : 1
            })
            TweenMax.to(prevBtn, 0.3, {
            	autoAlpha:(currentPageId == 0) ? 0 : 1
            })


         }

          function clickArrow(e) {
                //if the whole app is animating then don't do anything until it's stopped
                if (isAnimating) {
                    return
                };

                var dir = e.data.dir;

                currentPageId = checkPageId(dir);

                addPage(dir);
            }

         function glowButton(e){

            TweenMax.fromTo(e.target, 0.3, {

               alpha:0
            }, 
            {
               alpha:1,
               repeat:0,
               yoyo:true
            })

         }


init();

function highlightBtns(e){
	if (currentPageId==0){
	nav_01.animate({top:21},700);
	nav_02.animate({top:21},700);
	nav_03.animate({top:21},700);
	nav_04.animate({top:21},700);
	nav_05.animate({top:21},700);
	nav_06.animate({top:21},700);
	nav_07.animate({top:21},700);
	nav_08.animate({top:21},700);
	nav_09.animate({top:21},700);
	}
	if (currentPageId==1){
	nav_01.animate({top:21},700);
	nav_02.animate({top:21},700);
	nav_03.animate({top:21},700);
	nav_04.animate({top:21},700);
	nav_05.animate({top:21},700);
	nav_06.animate({top:21},700);
	nav_07.animate({top:21},700);
	nav_08.animate({top:21},700);
	nav_09.animate({top:21},700);
	}
	if (currentPageId==2){
	nav_01.animate({top:41},700);
	nav_02.animate({top:21},700);
	nav_03.animate({top:21},700);
	nav_04.animate({top:21},700);
	nav_05.animate({top:21},700);
	nav_06.animate({top:21},700);
	nav_07.animate({top:21},700);
	nav_08.animate({top:21},700);
	nav_09.animate({top:21},700);
	}
	if (currentPageId==3){
	nav_01.animate({top:21},700);
	nav_02.animate({top:41},700);
	nav_03.animate({top:21},700);
	nav_04.animate({top:21},700);
	nav_05.animate({top:21},700);
	nav_06.animate({top:21},700);
	nav_07.animate({top:21},700);
	nav_08.animate({top:21},700);
	nav_09.animate({top:21},700);
	}
	if (currentPageId==4){
	nav_01.animate({top:21},700);
	nav_02.animate({top:21},700);
	nav_03.animate({top:41},700);
	nav_04.animate({top:21},700);
	nav_05.animate({top:21},700);
	nav_06.animate({top:21},700);
	nav_07.animate({top:21},700);
	nav_08.animate({top:21},700);
	nav_09.animate({top:21},700);
	}
	if (currentPageId==5){
	nav_01.animate({top:21},700);
	nav_02.animate({top:21},700);
	nav_03.animate({top:41},700);
	nav_04.animate({top:21},700);
	nav_05.animate({top:21},700);
	nav_06.animate({top:21},700);
	nav_07.animate({top:21},700);
	nav_08.animate({top:21},700);
	nav_09.animate({top:21},700);
	}
	if (currentPageId==6){
	nav_01.animate({top:21},700);
	nav_02.animate({top:21},700);
	nav_03.animate({top:21},700);
	nav_04.animate({top:41},700);
	nav_05.animate({top:21},700);
	nav_06.animate({top:21},700);
	nav_07.animate({top:21},700);
	nav_08.animate({top:21},700);
	nav_09.animate({top:21},700);
	}
	if (currentPageId==7){
	nav_01.animate({top:21},700);
	nav_02.animate({top:21},700);
	nav_03.animate({top:21},700);
	nav_04.animate({top:41},700);
	nav_05.animate({top:21},700);
	nav_06.animate({top:21},700);
	nav_07.animate({top:21},700);
	nav_08.animate({top:21},700);
	nav_09.animate({top:21},700);
	}
	if (currentPageId==8){
	nav_01.animate({top:21},700);
	nav_02.animate({top:21},700);
	nav_03.animate({top:21},700);
	nav_04.animate({top:41},700);
	nav_05.animate({top:21},700);
	nav_06.animate({top:21},700);
	nav_07.animate({top:21},700);
	nav_08.animate({top:21},700);
	nav_09.animate({top:21},700);
	}
	if (currentPageId==9){
	nav_01.animate({top:21},700);
	nav_02.animate({top:21},700);
	nav_03.animate({top:21},700);
	nav_04.animate({top:21},700);
	nav_05.animate({top:41},700);
	nav_06.animate({top:21},700);
	nav_07.animate({top:21},700);
	nav_08.animate({top:21},700);
	nav_09.animate({top:21},700);
	}
	if (currentPageId==10){
	nav_01.animate({top:21},700);
	nav_02.animate({top:21},700);
	nav_03.animate({top:21},700);
	nav_04.animate({top:21},700);
	nav_05.animate({top:21},700);
	nav_06.animate({top:41},700);
	nav_07.animate({top:21},700);
	nav_08.animate({top:21},700);
	nav_09.animate({top:21},700);
	}
	if ((currentPageId==11)||(currentPageId==12)||(currentPageId==13)||(currentPageId==14)){
	nav_01.animate({top:21},700);
	nav_02.animate({top:21},700);
	nav_03.animate({top:21},700);
	nav_04.animate({top:21},700);
	nav_05.animate({top:21},700);
	nav_06.animate({top:21},700);
	nav_07.animate({top:41},700);
	nav_08.animate({top:21},700);
	nav_09.animate({top:21},700);
	}
	if (currentPageId==15){
	nav_01.animate({top:21},700);
	nav_02.animate({top:21},700);
	nav_03.animate({top:21},700);
	nav_04.animate({top:21},700);
	nav_05.animate({top:21},700);
	nav_06.animate({top:21},700);
	nav_07.animate({top:21},700);
	nav_08.animate({top:41},700);
	nav_09.animate({top:21},700);
	}
	if (currentPageId==16){
	nav_01.animate({top:21},700);
	nav_02.animate({top:21},700);
	nav_03.animate({top:21},700);
	nav_04.animate({top:21},700);
	nav_05.animate({top:21},700);
	nav_06.animate({top:21},700);
	nav_07.animate({top:21},700);
	nav_08.animate({top:21},700);
	nav_09.animate({top:41},700);
	}
	if (currentPageId==17){
	nav_01.animate({top:21},700);
	nav_02.animate({top:21},700);
	nav_03.animate({top:21},700);
	nav_04.animate({top:21},700);
	nav_05.animate({top:21},700);
	nav_06.animate({top:21},700);
	nav_07.animate({top:21},700);
	nav_08.animate({top:21},700);
	nav_09.animate({top:21},700);
	}

}
highlightBtns();



      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Slide_00'
   (function(symbolName) {   
   
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.$('container').html('<video id="vid" width="1280" autoplay>'+
								 '<source src="media/Secretariat.mp4" type="video/mp4">'+
								 '<embed src="media/Secretariat.swf" type="application/swf">'+
								 'Your browser does not support the video tag.'+
								'</video>');
         setTimeout(function(){
         	var vid = document.getElementById("vid");
         	vid.pause();
         	sym.$('container').animate({left:-1280},500).hide(setTimeout(1000));
         	sym.$('skipBtn').hide();
         },17000);
         
         sym.$('skipBtn').bind('click', function(){
         	var vid = document.getElementById("vid");
         	vid.pause();
         	sym.$('container').animate({left:-1280},500).hide(setTimeout(1000));
         	sym.$('skipBtn').hide();
         });

      });
      //Edge binding end

   })("Slide_00");
   //Edge symbol end:'Slide_00'

   //=========================================================
   
   //Edge symbol: 'Slide_01'
   (function(symbolName) {   
   
      

   })("Slide_01");
   //Edge symbol end:'Slide_01'

   //=========================================================
   
   //Edge symbol: 'Slide_1'
   (function(symbolName) {   
   
   })("Slide_02");
   //Edge symbol end:'Slide_02'

   //=========================================================
   
   //Edge symbol: 'Slide_1'
   (function(symbolName) {   
   
   })("Slide_03");
   //Edge symbol end:'Slide_03'

   //=========================================================
   
   //Edge symbol: 'Nav_bar'
   (function(symbolName) {   
   
   })("Nav_bar");
   //Edge symbol end:'Nav_bar'

   //=========================================================
   
   //Edge symbol: 'Slide_1'
   (function(symbolName) {   
   
   })("Slide_04");
   //Edge symbol end:'Slide_04'

   //=========================================================
   
   //Edge symbol: 'Slide_1'
   (function(symbolName) {   
   
   })("Slide_05");
   //Edge symbol end:'Slide_05'

   //=========================================================
   
   //Edge symbol: 'Slide_1'
   (function(symbolName) {   
   
   })("Slide_06");
   //Edge symbol end:'Slide_06'

   //=========================================================
   
   //Edge symbol: 'Slide_1'
   (function(symbolName) {   
   
   })("Slide_07");
   //Edge symbol end:'Slide_07'

   //=========================================================
   
   //Edge symbol: 'Slide_1'
   (function(symbolName) {   
   
   })("Slide_08");
   //Edge symbol end:'Slide_08'

   //=========================================================
   
   //Edge symbol: 'Slide_1'
   (function(symbolName) {   
   
   })("Slide_11");
   //Edge symbol end:'Slide_11'

   //=========================================================
   
   //Edge symbol: 'Slide_1'
   (function(symbolName) {   
   
   })("Slide_12");
   //Edge symbol end:'Slide_12'

   //=========================================================
   
   //Edge symbol: 'Slide_1'
   (function(symbolName) {   
   
   })("Slide_13");
   //Edge symbol end:'Slide_13'

   //=========================================================
   
   //Edge symbol: 'Slide_1'
   (function(symbolName) {   
   
   })("Slide_14");
   //Edge symbol end:'Slide_14'

   //=========================================================
   
   //Edge symbol: 'Slide_1'
   (function(symbolName) {   
   
   })("Slide_16");
   //Edge symbol end:'Slide_16'

   //=========================================================
   
   //Edge symbol: 'Slide_1'
   (function(symbolName) {   
   
   })("Slide_17");
   //Edge symbol end:'Slide_17'

   //=========================================================
   
   //Edge symbol: 'Slide_1'
   (function(symbolName) {   
   
      })("Slide_09");
   //Edge symbol end:'Slide_09'

   //=========================================================
   
   //Edge symbol: 'Slide_1'
   (function(symbolName) {   
   
      })("Slide_10");
   //Edge symbol end:'Slide_10'

   //=========================================================
   
   //Edge symbol: 'Slide_1'
   (function(symbolName) {   
   
      })("Slide_15");
   //Edge symbol end:'Slide_15'

   //=========================================================
   
   //Edge symbol: 'Slide_02_graph'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${plyGraph}", "click", function(sym, e) {
         if (sym.getPosition()<=250) {sym.play();}
         else if (sym.getPosition()>250) {sym.playReverse(2000);}
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Group}", "click", function(sym, e) {
         if (sym.getPosition()<=250) {sym.play();}
         else if (sym.getPosition()>250) {sym.playReverse();}
         

      });
      //Edge binding end

   })("Slide_02_graph");
   //Edge symbol end:'Slide_02_graph'

   //=========================================================
   
   //Edge symbol: 'Slide_03_graph'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${plyGraph}", "click", function(sym, e) {
         // insert code for mouse click here
         if (sym.getPosition()<=0) {sym.play();}
         else if (sym.getPosition()>0) {sym.playReverse(2000);}
         

      });
      //Edge binding end

   })("Slide_03_graph");
   //Edge symbol end:'Slide_03_graph'

   //=========================================================
   
   //Edge symbol: 'Slide_06_graph'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${playGraph}", "click", function(sym, e) {
         // insert code for mouse click here
         if (sym.getPosition()<=0) {sym.play();}
         else if (sym.getPosition()>0) {sym.playReverse(2000);}
         
         

      });
      //Edge binding end

   })("Slide_06_graph");
   //Edge symbol end:'Slide_06_graph'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-810360");