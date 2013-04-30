;(function(){
	function _o(o,tag){var o=typeof o!="string"?o:document.getElementById(o);if(!tag){return o}else{var m=/(.+)\[(\w*)(\W+)(.*)\]/.exec(tag);if(!m){return o.getElementsByTagName(tag)}else{tagarr=o.getElementsByTagName(m[1]);var ar=[],f=m[2],s=m[3],obj;for(var i=0,n=tagarr.length;i<n;i++){obj=tagarr[i];if(s=="="&&obj[f]==m[4]||s=="!="&&obj[f]!=m[4]){ar.push(obj)}};return ar}}};
	var addEvent=document.attachEvent?function(o,s,fn){o.attachEvent('on'+s,fn)}:function(o,s,fn){o.addEventListener(s,fn,false)};
	var delEvent=document.detachEvent?function(o,s,fn){o.detachEvent('on'+s,fn)}:function(o,s,fn){o.removeEventListener(s,fn,false);};
	var Ie=document.all,f=false,c=0;
	function mouseX(e){return(e.pageX||(e.clientX+(document.documentElement.scrollLeft||document.body.scrollLeft)));};
	function mouseY(e){return(e.pageY||(e.clientY+(document.documentElement.scrollTop||document.body.scrollTop)));};
	function previousNode(siblingNode,tag){if(!siblingNode)return null;if(siblingNode.nodeType==1){if(tag){if(siblingNode.nodeName.toLowerCase()==tag){return siblingNode}else{return previousNode(siblingNode.previousSibling,tag)}}else{return siblingNode}}else if(siblingNode.previousSibling){return previousNode(siblingNode.previousSibling,tag)};return null};
	function nextNode(siblingNode,tag){if(!siblingNode)return;if(siblingNode.nodeType==1){if(tag){if(siblingNode.nodeName.toLowerCase()==tag){return siblingNode}else{return nextNode(siblingNode.nextSibling)}}else{return siblingNode}}else if(siblingNode.nextSibling){return nextNode(siblingNode.nextSibling)};return null};
	function getTagFather(o,tag){var father=o.parentNode;if(!father){return null};if(father.nodeName.toLowerCase()==tag.toLowerCase()){return father}else{return getTagFather(father,tag)}};
	function getIndexBorther(o,tag){var arr=[];getAllBefor(previousNode(o.previousSibling,tag));function getAllBefor(node){if(!node)return null;arr.push(node);if(node.previousSibling){return getAllBefor(previousNode(node.previousSibling,tag))}else{return null}}return arr.length};
	function getEventTarget(e){e=e||window.event;return e.target||e.srcElement;}
	function eStop(e){e.stopPropagation?e.stopPropagation():(e.cancelBubble=true);e.preventDefault?e.preventDefault():(e.returnValue=false);};
	function clearSelection(){window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();};
	function PageDrag(o,d,move_h){var nfun=d.click_fun||null;var mfun=d.move_fun||null;var sfun=d.end_fun||null;addEvent(o,"mousedown",start);var c,x=0,y=0,l=0,t=0,doc=document,Ie=document.all;function start(e){eStop(e);nfun&&nfun();x=mouseX(e)-o.offsetLeft;y=mouseY(e)-o.offsetTop;l=mouseX(e)-x;t=mouseY(e)-y;c=false;addEvent(doc,"mouseup",stop);addEvent(doc,"mousemove",move);if(Ie){o.setCapture();addEvent(o,"losecapture",stop)}else{addEvent(window,"blur",stop);e.preventDefault()}};function move(e){l=mouseX(e)-x;t=mouseY(e)-y;c=true;if(t<20){t=20}if(t>move_h+20){t=move_h+20}mfun&&mfun(t-20);o.style.top=t+"px"};function stop(e){eStop(e);sfun&&sfun(l,t,c);delEvent(doc,"mouseup",stop);delEvent(doc,"mousemove",move);if(Ie){o.releaseCapture();delEvent(o,"losecapture",stop)}else{delEvent(window,"blur",stop)}}};
	function regs(o,area_box){
        var check_input=false,forefather = _o(o),
        inputs = _o(forefather, "input[className=txt_input]"),
        area = _o(area_box),
        tbox = _o(area, "b")[0],
        total_li = _o(area, "li").length,
        h = total_li * _o(area, "li")[0].offsetHeight,
        list = _o(area, "ul")[0],
        box_h = 175,
        obj_h = 135 * box_h / h,
        move_h = Math.ceil(135 - (135 * box_h / h)),
        bar = _o(area, "dt")[0];
        bar.style.height = Math.ceil(obj_h) + "px",
        j = 1,
        f2 = false,
        mail_box = _o("input_div"),
        mail_List = _o(mail_box, "div")[0],
        mail_input = _o(mail_box, "input")[0],
        mail_list_ul = _o(mail_box, "ul")[0],
        mail_list_dl = _o(mail_box, "dl")[0],
        mail_list_li = _o(mail_box, "li"),
        count_li = mail_list_li.length,
        count_li_tem = mail_list_li.length,
        li_inner = [],
        mail_list_dt = _o(mail_list_dl, "dt")[0],
        mail_move_h = Math.ceil(210 - (2100 / count_li)),
				li_data=[];
        for (var i = 0,
        l = inputs.length; i < l; i++) {
            binds(i)
        };
        for (var i = 0; i < count_li; i++) {
            li_inner[i] = _o(mail_list_li[i], "a")[0].innerHTML
        };
        function resetListPosi() {
            mail_list_ul.style.top = "0px";
            mail_list_dt.style.top = "20px";
						changeSelectOpt(mail_list_li[0]);
						c=0;
        };
        function hideList_mail() {
            f = false;
            mail_List.style.left = "-9999px";
        };
        function showList_mail() {
						hideList();
            if (mail_input.value == "") {
                hideList_mail();
                return
            };
            f = true;
            mail_List.style.left = "0px";
        };
        function changeValues(n) {
						var _this=_o(mail_list_li[n], "a")[0],_thisTxt=li_inner[n],likePart=mail_input.value.split("@")[1]?"@"+mail_input.value.split("@")[1]:"@",lpl=likePart.length;
						if((_thisTxt.indexOf(likePart) < 0 && lpl == 1)||(_thisTxt.indexOf(likePart) > -1 && lpl > 1)||lpl == 1){
							if(_this.parentNode.style.height=="0px"){
								_this.parentNode.style.height="25px";
								count_li++;
								redo();
							}
						}else{
							if(_this.parentNode.style.height!=="0px"){
								_this.parentNode.style.height="0px";
								count_li--;
								redo();
							}
						}
						_this.innerHTML = mail_input.value.split("@")[0] + li_inner[n];
        };
				function redo(){
					mail_move_h = Math.ceil(210 - (2100 / count_li));
					resetListPosi();
        if (count_li > 10) {
            mail_List.style.height = "250px";
            mail_list_dl.style.left = "215px";
            mail_list_dt.style.height = Math.ceil(2100 / count_li) + "px";
						topScrolls.modifyCounts(count_li);
						topScrolls.modifyMoveh(mail_move_h);
        } else {
            mail_List.style.height = count_li * 25 + "px";
            mail_list_dl.style.left = "-9999px"
        }



				}
        if (Ie) {
            addEvent(mail_input, "propertychange",
            function() {
                for (var i = 1; i < count_li_tem; i++) {
                    changeValues(i)
                };
                showList_mail();
								_o(mail_list_li[0], "a")[0].innerHTML=mail_input.value;
            })
        } else {
            addEvent(mail_input, "input",
            function() {
								if(check_input){return;};
                for (var i = 1; i < count_li_tem; i++) {
                    changeValues(i)
                };
                showList_mail();
								_o(mail_list_li[0], "a")[0].innerHTML=mail_input.value;
            })
        };
        addEvent(mail_box, "click",
        function(e) {
            eStop(e);
            var target = getEventTarget(e);
            if (target.tagName.toLowerCase() == "input") {
                showList_mail()
            };
            if (target.tagName.toLowerCase() == "a") {
                mail_input.value = target.innerHTML;
				mail_input.focus();
                hideList_mail();
            }
        });
        function changeSelectOpt(ne) {
            //mail_input.value = _o(ne, "a")[0].innerHTML;
            _o(mail_list_ul, "li[className=on]") && (_o(mail_list_ul, "li[className=on]")[0].className = "");
            ne.className = "on"
        };
        addEvent(mail_box, "mouseover",
        function(e) {
            eStop(e);
            var target = getEventTarget(e);
            if (target.tagName.toLowerCase() == "a") {
                c = getIndexBorther(target.parentNode, "li");
                changeSelectOpt(target.parentNode)
            }
        });
        function hideList() {
            _o(area, "div")[0].style.left = "-9999px"
        };
        function showList() {
            _o(area, "div")[0].style.left = "0px";
            list.style.top = "0px";
            bar.style.top = "20px";
						hideList_mail();
						resetListPosi()
        };
        addEvent(document, "click", hideList_mail);
        addEvent(document, "click", hideList);

        function eventSupported(eventName, el) {
            el = el || document.createElement("div");
            eventName = "on" + eventName;
            var isSupported = (eventName in el);
            if (el.setAttribute && !isSupported) {
                el.setAttribute(eventName, "return;");
                isSupported = typeof el[eventName] === "function"
            };
            el = null;
            return isSupported
        };

        addEvent(area, "click",
        function(e) {
            eStop(e);
            clearSelection();
            var target = getEventTarget(e);
            if (target.tagName.toLowerCase() == "dl" || target.tagName.toLowerCase() == "dt" || target.tagName.toLowerCase() == "dd") {
                return
            } else if (target.tagName.toLowerCase() == "b") {
                showList()
            } else if (target.tagName.toLowerCase() == "a") {
                hideList();
                tbox.innerHTML = target.innerHTML
            } else {
                hideList()
            }
        });

        function binds(n) {
            var box = getTagFather(inputs[n], "dd");
            addEvent(inputs[n], "focus",
            function() {
                onInput(box)
            });
            addEvent(inputs[n], "blur",
            function() {
                inputEnd(box)
            })
        };
        function onInput(box) {
            box.className = "oninput"
        };
        function inputEnd(box) {
            box.className = ""
        };

				

				function setScroll(sbox,uh,list,counts,showcount,moveh,barObj){
					var bodys=document.getElementsByTagName("body")[0],_this=this;
					this.counts=counts,this.moveh=moveh;
					addEvent(sbox,"mousedown",function(){bodys.style["-webkit-user-select"] = "none"});
					addEvent(sbox,"mouseup",function(){bodys.style["-webkit-user-select"] = ""});
					function setPs(m){
						var listTop=parseInt(list.style.top)||0;
						if (m) {
							var topPix = listTop - uh < -uh * (_this.counts - showcount) ? -uh * (_this.counts - showcount) : listTop - uh;
							list.style.top = topPix + "px"
						} else if(!m){
							var topPix=listTop + uh > 0 ? 0 : listTop + uh;
							list.style.top = topPix + "px"
						};
						listTop=parseInt(list.style.top)||0;
						barObj.style.top = ( - listTop * _this.moveh / (uh * _this.counts - uh*showcount) + 20) + "px"
					}
					addEvent(sbox,"click",function(e){
							eStop(e);
							clearSelection();
							var target = getEventTarget(e),ms=false;
							if (target.tagName.toLowerCase() == "dt") {
									return;
							} else if (target.tagName.toLowerCase() == "dd" && (target.className == "down" || target.className == "up")) {
									if (target.className == "down") {ms=true} else if (target.className == "up") {ms=false};
									setPs(ms);
							}
					});
					addEvent(sbox,"mouseover",function(e){
							eStop(e);
							var target = getEventTarget(e);
							if (target.tagName.toLowerCase() == "dt") {
									function clickfuns(){};
									function dragfun(t){
											list.style.top = ( - (_this.counts * uh - uh*showcount) * t / _this.moveh) + "px"
									};
									function endfun(){};
									PageDrag(target,{move_fun:dragfun},_this.moveh)
							}
					});
					function easy_move(e, n) {
							eStop(e);
							var e = e || window.event,detail = e.wheelDelta || e.detail,ms=false;
							if (detail * n < 0) {ms=true} else if (detail * n > 0) {ms=false};
							setPs(ms)
					}
							
					if(!eventSupported("mousewheel")){
						addEvent(list, "DOMMouseScroll",function(e) {easy_move(e, -1)})
					}else{
						addEvent(list, "mousewheel",function(e) {easy_move(e, 1)})
					};

				}
				setScroll.prototype={
					modifyCounts:function(v){this.counts=v;},
					modifyMoveh:function(v){this.moveh=v;}
				}
        if (count_li > 10) {
            mail_List.style.height = "250px";
            mail_list_dl.style.left = "215px";
            mail_list_dt.style.height = Math.ceil(2100 / count_li) + "px";
						var topScrolls=new setScroll(mail_list_dl,25,mail_list_ul,count_li,10,mail_move_h,mail_list_dt);
						resetListPosi();
        } else {
            mail_List.style.height = count_li * 25 + "px";
            mail_list_dl.style.left = "-9999px";
        }
				setScroll(_o(area, "dl")[0],25,list,total_li,7,move_h,bar);
				


        function selectli(k) {
            var obj = mail_list_ul,
            st = parseInt(obj.style["top"]) || 0;
            if (k != 38 && k != 40 && k != 13 && k != 34 && k != 33 && k != 9) {
                return
            };
            if (k == 38 || k == 33 || (k == 9 && f2)) {
                j = -1
            } else if ((k == 9 && !f2) || k == 34 || k == 40) {
                j = 1
            } else if (k == 13) {
								check_input=true;
								mail_input.value=_o(mail_list_li[c],"a")[0].innerHTML;
                hideList_mail();
                return;
            };
            if (c + j < 0 || c + j == count_li_tem) {
                return
            };
						
						function upC(m){
							m = m + j < 0 ? (count_li_tem - 1) : (m + j == count_li_tem ? 0 : m + j);
							if(mail_list_li[m].style.height!="0px"){
								return m;
							}else{
								return upC(m);
							}
						};
            c=upC(c);
            changeSelectOpt(mail_list_li[c]);
            crt = mail_list_li[c].offsetTop;
            if (crt > -st + 225) {
                obj.style['top'] = (225 - crt) + "px"
            } else if (crt < -st) {
                obj.style['top'] = ( - crt) + "px"
            };
            mail_list_dt.style.top = ( - parseInt(obj.style.top) * mail_move_h / (25 * count_li - 250) + 20) + "px";
        };
				addEvent(document,"keydown",
					function(e){
						var keys = window.event ? window.event.keyCode: e.keyCode;
						if(keys==116){mail_input.value="";};
						if (f) {
							selectli(keys);
							if (keys == 16) {
									f2 = true
							};
							if (keys == 9 || keys == 16 || keys == 38 || keys == 40 || keys == 34 || keys == 33) {
									eStop(e)
							}
					}
				});
				addEvent(document,"keyup",
					function(e){
						var keys = window.event ? window.event.keyCode: e.keyCode;
						if (keys == 13) {check_input=false;};
            if (f) {
                if (keys == 16) {
                    f2 = false
                };
                if (keys == 16) {
                    eStop(e)
                }
            };
				});
        addEvent(mail_input, "keydown",
					function(e) {
            if (!f) {
                var keys = window.event ? window.event.keyCode: e.keyCode;
                if (keys == 40) {
                    eStop(e);
                }
            }
        })
    };
    window.yoka_reg = regs
})();