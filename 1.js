html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
a {
	text-decoration: none;
}
/* HTML5 display-role reset for older browsers */

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
	display: block;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
html,
body,div,p,span,h1,h2,h3,a,img,ul,ol,li,input,table,tr,td,label {
	margin: 0;
	padding: 0;
	/*font-family: "SugruProximaRegular", Proxima Nova;*/
	font-size: 14px;
	border: 0;
	text-decoration: none;
	box-sizing: border-box;
	/*transition: all 0.3s;
	-o-transition: all 0.3s;
	-moz-transition: all 0.3s;
	-webkit-transition: all 0.3s;*/
}
html {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}
input:focus,
select:focus,
textarea:focus,
button:focus {
	outline: none;
}
*,
*:before,
*:after {
	-webkit-box-sizing: inherit;
	-moz-box-sizing: inherit;
	box-sizing: inherit;
}
*.c-flex {
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
	-webkit-flex-direction: row;
	-ms-flex-direction: row;
	flex-direction: row;
	-webkit-flex-wrap: wrap;
	-ms-flex-wrap: wrap;
	flex-wrap: wrap;
}
.clearfix:after {
	visibility: hidden;
	display: block;
	font-size: 0;
	content: " ";
	clear: both;
	height: 0;
}
h1, h2, h3, h4, h5, h6 {
	/*font-weight: bold;*/
	font-family: "SugruProximaHeadline", Proxima Nova;
	font-weight: normal;
    margin-top: 0;
    margin-bottom: 15px;
}
*[property="description"],
*[he=""], 
*[he="://"], 
*[hideifempty=""], 
*[hideifempty="://"] {
	display: none !important;
}
.mob {display: none !important;}
.currys-page-wrap {
	margin: 0 !important;
	overflow: hidden;
	padding: 0 !important;
	/*background-color: #EAEAEA;*/
	/*background-image: url(../../images/download.png);*/
	/*background-repeat: repeat;*/
}
.currys-max-width {
	width: 100%;
	display: block;
	margin: 0 auto;
	/*max-width: 1920px;*/
	max-width: 2560px;
	overflow: auto;
}
.currys-wrapper {
	display: block;
	/*float: left;*/
	width: 100%;
	/*max-width: 980px;*/
	max-width: 1320px;
	/*margin: 0 auto;*/
	display: block;
	/*padding: 0 !important;*/
	margin-left: auto;
	margin-right: auto;
	padding-left: 15px;
	padding-right: 15px;
	overflow: visible;
}
/*.currys-wrapper div,
.currys-wrapper ul,
.currys-wrapper li,
.currys-wrapper a {
	display: block;
	float: left;
}*/
/********************************************************************/
.c-header .c-logo {
	/* float: left; */
	display: inline-block;
	margin: 20px 0px 15px 3px;
	max-width: 204px;
}
.c-header .c-logo img {
	width: 100%;
}
.c-menu {
	display: block;
	float: left;
	width: 100%;
	position: relative;
    padding: 0;
    margin: 0;
    /*border-top: 1px solid#E4002B;*/
    /*border-bottom: 1px solid #D0ABFF;*/
    background-color: #4C13A2;
}
.c-menu-width {
	overflow: visible;
	height: 43px;
	background-color: #4C13A2;
}
div.c-menu-width input {
	display: none;
}
ul.c-menu-list > span.c-menu-home {
	margin-left: 10px;
	display: inline-block;
}
ul.c-menu-list > span.c-menu-home a {
    display: block;
    width: 25px;
    height: 43px;
    background-repeat: no-repeat;
    background-position: center top;
    background-image: url(../../images/home.png);
    transition: none;
}
ul.c-menu-list > span.c-menu-home a:hover {
    background-color: #1e249e;
    background-position: center -43px;
}
ul.c-menu-list {
	float: left;
	list-style-type: none;
}
ul.c-menu-clearance {
	float: right;
}
ul.c-menu-arrows {
	max-width: 6%;
	display: block;
	float: right;
	list-style-type: none;
}
ul.c-menu-arrows-left {
	float: left;
}
ul.c-menu-arrows-right {
	margin-right: 5px;
}
ul.c-menu-arrows li {
	display: none;
	float: left;
	/*cursor: pointer;*/
}
/*ul.c-menu-arrows li.menu-li-left {
	display: none;
}*/
ul.c-menu-arrows li label {
	display: block;
	float: left;
	width: 100%;
	padding: 0px 15px;
	cursor: pointer;
}
ul.c-menu-arrows li .menu-arrow {
	display: block;
	height: 43px;
	width: 7px;
	background-position: center center;
	background-repeat: no-repeat;
}
ul.c-menu-arrows li .menu-arrow.right {
	background-image: url(../img/c-menu-arrow-right.png);
}
ul.c-menu-arrows li .menu-arrow.left {
	background-image: url(../img/c-menu-arrow-left.png);
}
ul.c-menu-slide {
	display: none;
	max-width: 86%;
}
input#cs0_menu_slide_1:checked ~ div.c-menu ul.menu-slide-1,
input#cs0_menu_slide_2:checked ~ div.c-menu ul.menu-slide-2,
input#cs0_menu_slide_3:checked ~ div.c-menu ul.menu-slide-3 {
	display: flex;
}
input#cs0_menu_slide_1:checked ~ div.c-menu li.menu-li-2-right,
input#cs0_menu_slide_2:checked ~ div.c-menu li.menu-li-3-right,
input#cs0_menu_slide_2:checked ~ div.c-menu li.menu-li-1-left,
input#cs0_menu_slide_3:checked ~ div.c-menu li.menu-li-2-left {
	display: block;
}

ul.c-menu-list > li {
    flex-grow: 1;
    /*margin: ;*/
}
ul.c-menu-list > li > a {
	cursor: pointer;
	display: block;
	text-align: center;
	font-size: 14px;
	padding: 0;
	height: 43px;
	line-height: 43px;
	color: #ffffff;
	font-family: "SugruProximaHeadline", Proxima Nova;
	font-weight: normal;
	/*font-weight: bold;*/
	padding: 0px 12px;
	transition: none;
}
/*ul.c-menu-list > li:last-of-type > a {
    color: #cb002b;
}*/
ul.c-menu-clearance > li > a {
	background: #E5006D;
}
ul.c-menu-list > li:hover > a {
	background: #ffffff;
	color: #4C13A2;
}
ul.c-menu-list > li > ul.lev2 {
	position: absolute;
	top: 100%;
	left: 0px;
	/*width: 100%;*/
	width: 240px;
	background: #ffffff;
	border: 1px solid #D5D6DA;
	border-top: none;
	padding: 20px 0px;
	text-align: left;
	z-index: 99;
	display: none;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
}
ul.c-menu-list > li:nth-child(8) > ul.lev2 {
	left: -20px;
}
ul.c-menu-list > li:nth-child(9) > ul.lev2 {
	left: -70px;
}
ul.c-menu-list.c-menu-clearance > li > ul.lev2 {
	/*display: none;*/
	width: 178px;
	left: -50px;
}
ul.c-menu-list.c-menu-clearance > li:hover ul.lev2 {
	/*display: none;*/
}
/************** WHOLE WIDTH MENU FIX **************/
ul.c-menu-list > li > ul.lev2 {
	width: 100%;
	/*column-count: 4;*/
	/*column-gap: 25px;*/
	/*column-fill: auto;*/
	/*column-rule: solid;*/
}
/*ul.c-menu-list > li > ul.lev2 li {
	display: block;
	float: left;
	max-width: 311px;
}*/
ul.c-menu-list > li > ul.lev2 div.ul-col {
	display: block;
	float: left;
	max-width: 311px;
	width: 25%;
}
/**************************************************/
ul.c-menu-list > li:hover ul.lev2 {
	display: block;
}
ul.c-menu-list > li > ul.lev2 > li,
ul.c-menu-list > li > ul.lev2 > div > li {
	display: block;
	float: left;
	/*width: 23%;*/
	width: 100%;
	/*margin-top: 8px;*/
	/*margin-left: 20px;*/
}
/*ul.c-menu-list > li > ul.lev2 > li.has-sub {
	background-image: url(../img/sub-menu-arrow.png);
	background-repeat: no-repeat;
	background-position: 96% center;
}*/
ul.c-menu-list > li > ul.lev2 > li > a,
ul.c-menu-list > li > ul.lev2 > div > li > a {
	display: block;
	color: #4C13A2;
	font-size: 14px;
	font-family: 'CurrysSansRegular', Proxima Nova;
	font-weight: normal;
	text-decoration: none;
	/*padding-bottom: 8px;*/
	padding: 8px 20px;
	/*border-bottom: 1px solid #ccc;*/
}
ul.c-menu-list > li > ul.lev2 > li:hover,
ul.c-menu-list > li > ul.lev2 > div > li:hover {
	background-color: #FAF5FF;
}
ul.c-menu-list > li > ul.lev2 > li:hover > a,
ul.c-menu-list > li > ul.lev2 > div > li:hover > a {
	font-family: 'SugruProximaHeadline', Proxima Nova;
}
ul.c-menu-list > li > ul.lev2 > li > ul > li {
	display: block;
}
ul.c-menu-list > li > ul.lev2 > .c-menu-banner {
	display: block;
	float: right;
}
/*ul.c-menu-list > li > ul.lev2 > li > ul > li > a {
	color: #666666;
	font-size: 11px;
	line-height: 22px;
}*/
/*ul.c-menu-list > li > ul.lev2 > li > ul > li > a:hover {
	text-decoration: underline;
}*/
ul.c-menu-list ul.lev3 {
	display: none;
	position: absolute;
	right: -240px;
	top: 0;
	z-index: 9;
	width: 245px;
	background-color: #ffffff;
	border: 1px solid #D5D6DA;
	/* border-left: none; */
	border-top: none;
	border-bottom-right-radius: 8px;
	min-height: calc(100% + 1px); 
	padding: 20px 0px;
}
ul.c-menu-list ul.lev3 li a {
	color: #4C13A2;
	display: block;
	padding-left: 20px;
	font-family: 'CurrysSansRegular', Proxima Nova;
	font-size: 14px;
	padding: 8px 20px;
}
ul.c-menu-list ul.lev3 li a:hover {
	color: #4C13A2;
	background-color: #FAF5FF;
	font-family: 'SugruProximaHeadline', Proxima Nova;
	text-decoration: none;
}
/*ul.c-menu-list > li > ul.lev2 > li:hover > ul.lev3 {
	display: block;
}*/
/***********************************************************************************************************************************************/
.c-mobile-cats > ul > li > ul {
	display: none;
}
.c-mobile-cats > ul > li > label {
	display: block;
	/* line-height: 30px; */
	padding: 8px 0;
	color: #25282A;
	text-decoration: none;
	font-size: 12px;
	font-family: "SugruProximaHeadline", Proxima Nova;
	font-weight: normal;
	/* padding-left: 20px; */
	border: none;
	text-align: left !important;
	/* padding-left: 50px !important; */
	cursor: pointer;
}
.c-mobile-cats input:checked ~ ul {
	display: block !important;
}
.c-mobile-cats > ul > li::before {
	float: left;
	clear: both;
	content: '\203A';
	padding: 7px 5px;
	font-size: 16px;
	color: #25282A;
	width: 15px;
	line-height: 16px;
}
.c-mobile-cats > ul.lev1 > li > ul > li > a {
	display: block;
	font-size: 13px;
	padding: 4px 15px;
	color: #666666;
}
/***********************************************************************************************************************************************/
div.c-espots {
	display: block;
	float: left;
	width: 100%;
	margin-top: 8px;
    text-align: center;
    font-size: 14px;
}
div.c-espots .c-row {
	display: block;
	float: left;
	width: 100%;
	border-bottom: 1px solid #cccccc;
}
div.c-espots .c-row div {
	padding: 0 0 8px;
	width: 20%;
}
div.c-espots .c-row div:nth-of-type(2), div.c-espots .c-row div:nth-of-type(3) {
    width: 30%;
}
div.c-espots .c-row div:last-child a span {
    padding-left: 62px;
    background-image: url(../../images/icon-rating.png);
    background-position: left center;
    background-repeat: no-repeat;
}
div.c-espots .c-row .c-column {
	float: left;
}
div.c-espots a {
	display: inline-block;
	font-family: "SugruProximaHeadline", Proxima Nova;
	font-weight: normal;
	color: #09347b;
}
div.c-espots a span {
	font-weight: normal;
	color: #333;
	font-size: 13px;
}
div.c-espots .c-row .c-column img {
	float: left;
	margin-right: 7px;
	vertical-align: middle;
}
/*******************************************************************************************************/
div.c-item-left div.ccs-gallery {
	/*margin-top: 30px;*/
	width: 100%;
	/*height: 680px;*/
	display: block;
	float: left;
}
div.ccs-mainimg {
	display: block;
	float: left;
	height: 440px;
	position: relative;
	width: 100%;
	background-color: #ffffff;
	/*border: 1px solid #D2CDD1;*/
}
div.ccs-imgwrap {
	display: block;
	float: left;
	position: relative;
	vertical-align: middle;
	text-align: center;
	width: 100%;
	height: 100%;
	max-width: 850px;
	max-height: 520px;
	box-sizing: border-box;
}
div.ccs-arrows .arrow {
	cursor: pointer;	
	display: none;
}
div.ccs-imgwrap .left,
div.ccs-imgwrap .right {
	position: absolute;
	top: 50%;
	margin-top: -24px;
	height: 48px;
	width: 48px;
	border: 1px solid #cccccc;
	border-radius: 24px;
	background-color: #ffffff;
	background-repeat: no-repeat;
	/*background-size: auto 100%;*/
	background-position: 50% 50%;
	background-repeat: no-repeat;
}
.ccs-imgwrap .left {
	left: 0px;
	background-image: url(../img/arrow-left.jpg);
}
.ccs-imgwrap .right {
	right: 0px;
	background-image: url(../img/arrow-right.jpg);
}
.ccs-imgwrap input {
	display: none;
}
.ccs-imgwrap div.slide {
	transition: all 0.5s;
	opacity: 0;
}
.ccs-mainimg .img_fix {
	display: inline-block;
	position: absolute;
	left: 0px;
	top: 0px;
	width: 100%;
	height: 100%;
	vertical-align: middle;
	text-align: center;
}
.ccs-mainimg img {
	position: relative;
	width: auto;
	height: auto;
	max-width: 100%;
	max-height: 100%;
	/*transform: translateY(-50%);*/
	/*margin-top: 50%;*/
}
div.ccs-subimg {
	display: block;
	float: left;
	width: 100%;
	clear: both;
	/*margin: 0 30px 0 0;*/
	/*height: 100%;*/
	flex-direction: row;
}
div.ccs-subimg-wrap {
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flex;
	display: -o-flex;
	display: flex;
	flex-wrap: wrap;
	float: left;
	width: 100%;
	flex-direction: row;
	-ms-flex-pack: start;
	/*justify-content: space-between;*/
	justify-content: flex-start;
}
div.ccs-subimg-wrap label {
	cursor: pointer;
	border: 1px solid #D7D8DA;
	margin-top: 30px;
}
div.ccs-imgwrap label[hasimg=""],
div.ccs-imgwrap label[hasimg="://"] {
	display: none !important;
}
div.ccs-subimg label[hasimg=""],
div.ccs-subimg label[hasimg="://"] {
	display: none;
}
div.ccs-subimg div[hasimg=""],
div.ccs-subimg div[hasimg="://"] {
	display: none;
}
div.ccs-subimg-wrap label.img_fix {
	display: inline-block;
	position: relative;
	box-sizing: border-box;
	text-align: center;
	width: 96px;
	height: 96px;
	margin-right: 30px;
	flex: 0 0 auto;
	overflow: hidden;
	border-radius: 50%;
}
div.ccs-subimg-wrap label.img_fix:first-of-type {
	margin-left: 0px;
}
div.ccs-subimg-wrap label.img_fix:last-of-type {
	margin-right: 0px;
}
div.ccs-subimg-wrap label.img_fix[hasimg=""],
div.ccs-subimg-wrap label.img_fix[hasimg="://"] {
	display: none;
}
div.ccs-subimg-wrap label.img_fix.second-row {
	justify-content: center;
}
div.ccs-subimg-wrap .img_fix:nth-child(6) {
	margin-left: 0px;
}
div.ccs-subimg-wrap .img_fix:nth-child(6n+6) {
	margin-right: 0px;
}
div.ccs-subimg-wrap img {
	width: auto;
	height: auto;
	max-width: 94px;
	max-height: 94px;
	position: relative;
	margin-top: 50%;
	transform: translateY(-50%);
}
div.ccs-imgwrap > #cs0_slide_1:checked + div.num1,
div.ccs-imgwrap > #cs0_slide_2:checked + div.num2,
div.ccs-imgwrap > #cs0_slide_3:checked + div.num3,
div.ccs-imgwrap > #cs0_slide_4:checked + div.num4,
div.ccs-imgwrap > #cs0_slide_5:checked + div.num5,
div.ccs-imgwrap > #cs0_slide_6:checked + div.num6,
div.ccs-imgwrap > #cs0_slide_7:checked + div.num7,
div.ccs-imgwrap > #cs0_slide_8:checked + div.num8,
div.ccs-imgwrap > #cs0_slide_9:checked + div.num9,
div.ccs-imgwrap > #cs0_slide_10:checked + div.num10 {
	opacity: 1;
}
.ccs-imgwrap > #cs0_slide_1:checked ~ .ccs-arrows .show_img_02.right {
	display: block;
}
.ccs-imgwrap > #cs0_slide_2:checked ~ .ccs-arrows .show_img_01.left,
.ccs-imgwrap > #cs0_slide_2:checked ~ .ccs-arrows .show_img_03.right {
	display: block;
}
.ccs-imgwrap > #cs0_slide_3:checked ~ .ccs-arrows .show_img_02.left,
.ccs-imgwrap > #cs0_slide_3:checked ~ .ccs-arrows .show_img_04.right {
	display: block;
}
.ccs-imgwrap > #cs0_slide_4:checked ~ .ccs-arrows .show_img_03.left,
.ccs-imgwrap > #cs0_slide_4:checked ~ .ccs-arrows .show_img_05.right {
	display: block;
}

.ccs-imgwrap > #cs0_slide_5:checked ~ .ccs-arrows .show_img_04.left,
.ccs-imgwrap > #cs0_slide_5:checked ~ .ccs-arrows .show_img_06.right {
	display: block;
}

.ccs-imgwrap > #cs0_slide_6:checked ~ .ccs-arrows .show_img_05.left,
.ccs-imgwrap > #cs0_slide_6:checked ~ .ccs-arrows .show_img_07.right {
	display: block;
}

.ccs-imgwrap > #cs0_slide_7:checked ~ .ccs-arrows .show_img_06.left,
.ccs-imgwrap > #cs0_slide_7:checked ~ .ccs-arrows .show_img_08.right {
	display: block;
}

.ccs-imgwrap > #cs0_slide_8:checked ~ .ccs-arrows .show_img_07.left,
.ccs-imgwrap > #cs0_slide_8:checked ~ .ccs-arrows .show_img_09.right {
	display: block;
}

.ccs-imgwrap > #cs0_slide_9:checked ~ .ccs-arrows .show_img_08.left,
.ccs-imgwrap > #cs0_slide_9:checked ~ .ccs-arrows .show_img_10.right {
	display: block;
}

.ccs-imgwrap > #cs0_slide_10:checked ~ .ccs-arrows .show_img_09.left {
	display: block;
}
/*div.pagecontainer {
	display: block;
	float: left;
	width: 100%;
	min-height: 2000px;
}*/
/****************************************************************************************************************/
.c-listing-title {
	display: block;
	float: left;
	width: 100%;
	margin-top: 15px;
	font-family: "CurrysSansRegular", Proxima Nova;
}
.c-listing-title h1 {
	font-size: 24px;
	color: #09347b;
	line-height: 1.1;
	color: #252F38;
	font-family: "CurrysSansRegular", Proxima Nova;
	font-weight: normal;
}
.c-item-left {
	display: block;
	float: left;
	width: 67%;
	max-width: 840px;
	/*padding-right: 15px;*/
}
.c-item-right {
	display: block;
	float: right;
	width: 32%;
	/*padding-left: 15px;*/
}
.c-item-details {
	display: block;
	float: left;
	width: 100%;
}
.c-item-condition,
.c-item-offer {
	display: block;
	float: left;
	width: 100%;
	padding: 15px;
    border: 2px solid #D2D7DB;
    background: #FAFBFD;
}
.c-item-offer.c-tv-offer {
	padding: 10px 15px;
}
.c-item-offer {
	margin-top: 20px;
}
.c-item-condition h1,
.c-item-offer h1 {
	font-family: "SugruProximaHeadline", Proxima Nova;
	font-size: 16px;
	color: #293237;
}
.c-item-condition ul,
.c-item-offer ul {
	padding: 0px 0px 0px 15px;
}
.c-item-offer.c-tv-offer ul {
	padding: 0px;
	list-style-type: none;
}
.c-item-condition ul li,
.c-item-offer ul li {
	font-family: "CurrysSansRegular", Proxima Nova;
	color: #577077;
	font-size: 14px;
	margin-bottom: 5px;
}
.c-item-offer ul {
	padding: 0px;
}
.c-item-offer ul li {
	color: #577077;
	list-style-type: none;
}
.c-item-price {
	display: block;
	float: left;
	/*width: 100%;*/
	width: 62.104%;
	margin-top: 20px;
}
.c-item-price span {
	display: block;
	font-size: 24px;
	font-family: "SugruProximaHeadline", Proxima Nova;
	font-weight: normal;
	color: #cb002b;
}
.c-item-buttons	{
	display: block;
	float: left;
	/*width: 37.894%;*/
	margin-top: 20px;
}
.c-listing-button {
	display: block;
	float: left;
	clear: both;
	width: 100%;
	max-width: 296px;
	text-align: center;
	font-size: 16px;
	font-family: "SugruProximaHeadline", Proxima Nova;
	font-weight: normal;
	/*font-weight: bold;*/
	color: #4c13a2;
	/*background: #f7f7f7;*/
	border: 2px solid #4c13a2;
	border-radius: 26px;
	margin-bottom: 25px;
	padding: 15px 95px;
}
.c-listing-button:hover {
	color: #ffffff;
	background: #4c13a2;
}
/***********************************************************************************************************************/
.currys-tabs {
	display: block;
	float: left;
	width: 100%;
	/*padding: 0px 10px;*/
	margin-top: 12px;
}
.currys-tabs-wrap {
	display: block;
	float: left;
	width: 100%;
}
.currys-tabs input {
	display: none;
}
.currys-tabs div.currys-tabs-wrap > label {
	display: block;
	float: left;
	/*margin-bottom: -1px;*/
	/*margin-left: 10px;*/
	cursor: pointer;
	/*background-color: #f7f7f7;*/
	border: 1px solid #D3D7DA;
	-webkit-border-radius: 6px;
	-moz-border-radius: 6px;
	border-radius: 6px;
	margin-top: 40px;
	background-image: url(../img/icon-open.jpg);
	background-position: 98.5% center;
	background-repeat: no-repeat;
}
.currys-tabs label span {
	display: block;
	float: left;
	font-size: 13px;
	color: #000;
	/*font-weight: bold;*/
	font-family: "SugruProximaHeadline", Proxima Nova;
	font-weight: normal;
	/*line-height: 26px;*/
	padding: 12px 30px;
	/*margin-top:10px;*/
	/*text-transform: uppercase;*/
	/*background: #231F20;*/
}
.currys-tabs [id^="tab"]:checked + label {
	border-bottom: 1px solid #ffffff;
}
.currys-tabs [id^="tab"]:checked + label span {
	/*margin-top: 0px;*/
	/*height: 60px;*/
	/*line-height: 36px;*/
	/*background-color: #fff;*/
	color: #000000;
}
.currys-tabs div.currys-tabs-wrap > section {
	clear: both;
	display: none;
	text-align: left;
	background: #ffffff;
	border-top: none;
	/*border-top: 5px solid #231F20;*/
	/*border-bottom: 5px solid #231F20;*/
	min-height: 500px;
	overflow: auto;
	font-size: 15px;
	/*padding: 5px 30px 0px 35px;*/
	padding: 10px 15px 20px 15px;
}
.currys-tabs div >  section.scroll-section {
	/*height: 500px;*/
	max-height: 500px;
	padding-right: 30px;
	overflow-y: auto;
}
.currys-tabs div.currys-tabs-wrap > section h1 {
	display: none;
	font-size: 13px;
	font-family: "SugruProximaHeadline", Proxima Nova;
	font-weight: normal;
	/*font-weight: bold;*/
	padding-bottom: 10px;
}
.currys-tabs div.currys-tabs-wrap > section h2,
.currys-tabs div.currys-tabs-wrap > section h3 {
	font-family: "SugruProximaHeadline", Proxima Nova;
	font-weight: normal;
	font-size: 16px;
	margin-top: 10px;
	margin-bottom: 5px;
}
.currys-tabs div.currys-tabs-wrap > section h3 {
	color: #0745aa;
}
.currys-tabs div.currys-tabs-wrap > section * {
	font-family: "CurrysSansRegular", Proxima Nova;
	font-size: 14px;
	word-break: break-word;
}
.currys-tabs div.currys-tabs-wrap > section ul, p {
	padding: 5px 0px;
	line-height: 18px;
}
.currys-tabs div.currys-tabs-wrap > section ul {
	/*list-style-type: none;*/
	list-style-type: disc;
	padding-left: 15px;
}
.currys-tabs div.currys-tabs-wrap > section ul li {
	margin-bottom: 3px;
}
.currys-tabs div.currys-tabs-wrap > section a {
	color: #4A13A2;
	text-decoration: underline;
}
.currys-tabs div.currys-tabs-wrap > section span.fake-url {
	color: #c10a5d;
}
.btn {
	padding: 10px;
    display: block;
    margin: 10px 0;
    text-align: center;
    /*font-weight: bold;*/
    font-family: "SugruProximaHeadline", Proxima Nova;
	font-weight: normal;
    font-size: 14px;
    background-color: #f7f7f7;
    border: 1px solid #ccc;
    cursor: pointer;
}
.currys-item-desc label:hover {
    background-color: #eee;	
}
.currys-tabs div.currys-tabs-wrap > section .currys-item-desc ul,
.currys-tabs div.currys-tabs-wrap > section .currys-item-specs ul {
	list-style-type: none;
	padding-left: 0px;
}
.currys-tabs div.currys-tabs-wrap > section .currys-item-desc ul li,
.currys-tabs div.currys-tabs-wrap > section .currys-item-specs ul li {
	margin-bottom: 0px;
}
.currys-tabs div.currys-tabs-wrap > section b,
.currys-tabs div.currys-tabs-wrap > section strong {
	font-weight: normal;
	font-family: 'SugruProximaHeadline', Proxima Nova;
}
.currys-item-desc *, 
.currys-item-specs * {
	color: #333;
}

#tab1:checked ~ #content1,
#tab2:checked ~ #content2,
#tab3:checked ~ #content3,
#tab4:checked ~ #content4  {
    display: block;
}
.currys-tabs div.currys-tabs-wrap > section img {
	display: block;
	clear: both;
	margin-top: 10px;
}
.currys-body {
	padding-bottom: 10px !important;
}
.currys-item-desc {
	display: block;
	float: left;
	width: 50%;
	padding-right: 30px;
	padding-top: 5px;
}
.currys-guarantee {
	display: block;
	float: left;
	width: 100%;
	/*background: #6473b7;*/
	padding: 20px 20px 20px 90px;
	margin-top: 10px;
	background-image: url(../img/icon-guarantee.jpg);
	background-repeat: no-repeat;
	background-position: 20px 30px;
	border: 2px solid #4A13A2;
	-webkit-border-radius: 8px;
	-moz-border-radius: 8px;
	border-radius: 8px;
}
.currys-guarantee h2,
.currys-guarantee p,
.currys-guarantee a,
.currys-guarantee li {
	color: #2A3137;
}
.currys-guarantee h2 {
	margin-bottom: 10px;
}
.currys-guarantee a {
	text-decoration: underline;
}
.currys-item-specs {
	display: block;
	float: left;
	width: 42%;
	padding: 15px;
	box-sizing: border-box;
	border: 2px solid #D1D8DE;
	background: #FAFBFD;
}
.currys-item-specs ul {
	list-style-type: none;
	padding: 0px;
}
.currys-item-specs ul li {
	margin-bottom: 5px;
}
section .c-tab-image {
	float: right;
	margin-left: 40px;
	/*margin-bottom: 10px;*/
}
/********************************************************/
.currys-mobile-tabs {
	display: block;
	float: left;
	width: 100%;
	padding: 12px 0px 0px 0px;
}
div.currys-mobile-tabs input {
	display: none;
}
div.currys-mobile-tabs label {
	width: 100%;
	/*height: 50px;*/
	list-style: none;
	display: inline-block;
	position: relative;
	box-sizing: border-box;
	padding: 19px 15px;
	margin-left: 0px;
}
div.currys-mobile-tabs label span {
	display: block;
	width: 100%;
	/*background: #ffffff;*/
	font-size: 18px;
	font-family: "CurrysSansRegular", Proxima Nova;
	font-weight: normal;
	/*line-height: 50px;*/
	color: #242D36;
	padding: 0px;
}
div.currys-mobile-tabs label img {
	display: block;
	position: absolute;
	/*width: 13px;*/
	/*height: 7px;*/
	right: 40px;
	top: 21px;
}
div.currys-mobile-tabs [id^="m-tab"]:checked + label {
	border-bottom: none;
	/*background: #ffffff;*/
	background-image: url(../img/icon-close.jpg);
	/*background-image: none;*/
	border-bottom-left-radius: 0px;
	border-bottom-right-radius: 0px;
}
div.currys-mobile-tabs section {
	clear: both;
	display: none;
	text-align: left;
	background: #ffffff;
	/*height: 250px;*/
	overflow: auto;
	font-size: 15px;
	padding: 15px;
	border: 1px solid #D3D7DA;
	border-top: none;
	min-height: auto;
}
.currys-tabs section.scroll-section {
	overflow-y: visible;
}
div.currys-mobile-tabs section p,
div.currys-mobile-tabs section li {
	font-size: 15px;
}
#m-tab1:checked ~ #m-content1,
#m-tab2:checked ~ #m-content2,
#m-tab3:checked ~ #m-content3,
#m-tab4:checked ~ #m-content4  {
	display: block;
}
/********************************************************/
/*****************************************************************************************************************************/
.c-bottom-banners {
	display: block;
	float: left;
	width: 100%;
	margin-bottom: 10px;
}
.c-b-banner {
	float: left;
	width: 33.333%;
    padding: 0px 10px;
    margin-bottom: 15px;
}
.c-b-banner a {
	display: block;
	float: left;
	width: 100%;
	height: 125px;
	padding: 10px;
	color: #ffffff;
	background-color: #6473b7;
	background-position: right bottom;
	background-repeat: no-repeat;
}
.c-b-banner a.c-box-guarantee {
	background-image: url(../../images/box-icon-1.png);
}
.c-b-banner a.c-box-store {
	background-image: url(../../images/box-icon-2.png);
}
.c-b-banner a.c-box-delivery {
	background-image: url(../../images/box-icon-3.png);
}
.c-b-banner a h2 {
	color: #ffffff;
	font-size: 18px;
	text-transform: uppercase;
	/*font-weight: bold;*/
	font-family: "SugruProximaHeadline", Proxima Nova;
	font-weight: normal;
	line-height: 20px;
}
.c-b-banner a p {
	color: #ffffff;
	font-size: 11px;
	/*font-weight: bold;*/
	font-family: "SugruProximaHeadline", Proxima Nova;
	font-weight: normal;
	line-height: 13px;
}
/****************************************************************************************************************************/
.c-max-footer {
	background: #F2F2F2;
	padding: 20px 0px;
	margin-top: 40px;
}
.currys-footer {
	display: block;
	float: left;
	width: 100%;
	padding: 0px 20px;
	/*border-top: 1px solid #cccccc;*/
	/*border-bottom: 1px solid #cccccc;*/
	/*background: #F2F2F2;*/
}
.c-footer-column {
	display: block;
	float: left;
	padding: 10px 25px;
}
.c-footer-column.c-quarter {
	width: 25%;
}
.c-footer-column.c-sixth {
	width: 16.66%;
}
.c-footer-column h2 {
	font-family: "SugruProximaHeadline", Proxima Nova;
	font-size: 14px;
	color: #282D31;
	font-weight: normal;
	padding: 7px 0px 0px 0px;
	margin-bottom: 0px;
}
.c-footer-column ul {
	list-style-type: none;
	padding-left: 0px;
}
.c-footer-column ul a {
	font-family: "CurrysSansRegular", Proxima Nova;
	color: #282D31;
	font-size: 14px;
}
.c-footer-column ul a:hover {
	text-decoration: underline;
}
.c-footer-categories ul {
	column-count: 3;
	column-width: 200px;
	margin-top: 25px;
}
.c-footer-column ul {
	margin-top: 25px;
}
.c-footer-categories ul li,
.c-footer-column ul li {
	margin-bottom: 25px;
}
.c-footer-categories ul li a {
	padding-left: 30px;
	background-repeat: no-repeat;
	background-position: left center;
}
.c-footer-categories .kitchen-appliances {
background-image: url(../img/icon_03.jpg);
}
.c-footer-categories .small-appliances {
background-image: url(../img/icon_12.jpg);
}
.c-footer-categories .tv-entertainment {
background-image: url(../img/icon_18.jpg);
}
.c-footer-categories .cameras {
background-image: url(../img/icon_05.jpg);
}
.c-footer-categories .audio {
background-image: url(../img/icon_13.jpg);
}
.c-footer-categories .computing {
background-image: url(../img/icon_19.jpg);
}
.c-footer-categories .pc-accessories {
background-image: url(../img/icon_07.jpg);
}
.c-footer-categories .phones {
background-image: url(../img/icon_14.jpg);
}
.c-footer-categories .smart-tech {
background-image: url(../img/icon_20.jpg);
}
/***************************************************************************************************************************************/

.c-mobile-cats {
	display: block;
    float: left;
    width: 100%;
    position: relative;
    overflow: visible;
}
.c-mobile-cats .wide-bar {
	display: block;
    /* float: left; */
    width: 100%;
    height: 43px;
	/*border-top: 1px solid #cccccc;*/
	/*border-bottom: 1px solid #cccccc;*/
	background-color: #4C13A2;
    /* overflow: hidden; */
}
.c-mobile-cats input {
	display: none;
}
.c-mobile-cats .wide-bar label {
    display: block;
    line-height: 43px;
    font-weight: normal;
    font-size: 14px;
    color: #ffffff;
    margin-left: 15px;
    padding-left: 35px;
    background-image: url(../img/menu.png);
    background-repeat: no-repeat;
    background-position: 0px center;
    background-size: auto 30px;
    cursor: pointer;
    font-family: 'SugruProximaHeadline', Proxima Nova;
}
.c-mobile-cats ul.lev1 {
    list-style-type: none;
    display: none;
    background: #ffffff;
    z-index: 999;
    border-bottom: 4px solid #1c1c1c;
    position: absolute;
    width: 100%;
    z-index: 999;
    top: 43px;
    left: 0px;
    padding: 5px 15px;
    border: 1px solid #cccccc;
    border-top: 0px;
}
.c-mobile-cats ul.lev1 li {
	display: block;
	height: auto;
	width: 100%;
}
.c-mobile-cats ul.lev1 li a,
.c-mobile-cats ul.lev1 li label {
	font-size: 13px;
	font-weight: normal;
	font-family: 'CurrysSansRegular', Proxima Nova;
}
.c-mobile-cats ul.lev1 li a {
	display: block;
	/*line-height: 30px;*/
	padding: 8px 0;
	color: #25282A;
	text-decoration: none;
	/*padding-left: 20px;*/
	border: none;
	text-align: left !important;
	/*padding-left: 50px !important;*/
}
.c-mobile-cats ul.lev2 {
	position: relative;
	top: 0px;
	display: block;
	background: #ffffff;
	padding: 0px;
}
.c-mobile-cats ul.lev2 li a {
	padding-left: 80px !important;
}
.c-mobile-cats #menuclick:checked ~ ul {
    display: block;
}
/**************************************************************************************************************************/
.c-listing-breadcrumb {
	border-bottom: 1px solid #D5D6DA;
}
.c-listing-path {
	padding: 13px 0px 10px 0px;
}
.c-listing-path a {
	font-family: 'CurrysSansRegular', Proxima Nova;
	font-size: 14px;
	color: #563191;
	margin: 0px 10px;
}
.c-listing-path *[hasdata=""] {
	display: none;
}
/*.c-listing-path a:first-of-type {
	margin-left: 0px;
}*/
.c-listing-path a:hover {
	text-decoration: underline;
}
.test-tab {
	padding: 15px 0px;
}
.test-tab h1,
.currys-tabs div.currys-tabs-wrap > section .test-tab h1 {
	display: block;
	float: left;
	width: 100%;
	text-align: center;
	font-size: 22px;
	/*font-weight: bold;*/
	font-family: "SugruProximaHeadline", Proxima Nova;
	font-weight: normal;
	margin-top: 20px;
}
.test-tab h1.a-title {
	margin-top: 35px;
}
.test-tab div > p.a-center {
	display: block;
	float: left;
	width: 100%;
	margin-bottom: 15px;
}
.test-tab .a-center {
	text-align: center;
}
.test-tab h4 {
	/*font-weight: bold;*/
	font-family: "SugruProximaHeadline", Proxima Nova;
	font-weight: normal;
	color: #000000;
	margin: 10px 0px 5px 0px;
}
.test-tab h4:first-of-type {
	margin-top: 0px;
}
.currys-tabs div.currys-tabs-wrap > section ol {
	padding-left: 22px;
	/*list-style-type: decimal;*/
}
.currys-tabs div.currys-tabs-wrap > section ol li {
	list-style-type: decimal;
}
.currys-tabs div.currys-tabs-wrap > section ol li p {
	padding-left: 5px;
}
.test-tab section.a-steps,
.test-tab section.a-apple-subs {
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flex;
	display: -o-flex;
	display: flex;
	float: left;
	width: 100%;
	clear: both;
	-webkit-box-pack: justify;
	-ms-flex-pack: justify;
	justify-content: space-between;
	margin-top: 45px;
	margin-bottom: 10px;
}
.test-tab section.a-steps div.a-one-step,
.test-tab section.a-apple-subs div.a-one-sub {
	position: relative;
	background: #fff;
	border-radius: 10px;
	-webkit-box-flex: 0;
	-ms-flex: 0 0 32%;
	flex: 0 0 32%;
	border: 1px solid #E1E1E1;
	text-align: center;
	padding: 45px 30px 30px 30px;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	color: #213038;
}
.test-tab section.a-apple-subs div.a-one-sub {
	padding: 30px 20px 30px 20px;
}
.test-tab section.a-steps span.a-step-circle {
	height: 60px;
	width: 60px;
	position: absolute;
	top: -30px;
	left: 50%;
	-webkit-transform: translateX(-50%);
	transform: translateX(-50%);
	border-radius: 100%;
	background: #fff;
	border: 1px solid #E1E1E1;
	line-height: 60px;
	font-size: 27px;
	color: #4C12A1;
}
.test-tab section.a-steps div.a-one-step h3 {
	font-size: 20px;
	margin-bottom: 10px;
}
.test-tab section.a-steps div.a-one-step p {
	font-size: 14px;
	margin-bottom: 10px;
}
.test-tab section.a-included-list {
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flex;
	display: -o-flex;
	display: flex;
	width: 100%;
	float: left;
	flex-wrap: wrap;
	flex-direction: row;
}
.test-tab section .a-included-link {
    background: #faf5ff;
    display: block;
    padding: 20px 5px;
    text-align: center;
    border-radius: 10px;
    text-decoration: none;
    color: inherit;
    text-align: center;
    margin: 5px;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    color: #4C12A1;
    /*font-weight: bold;*/
    font-family: "SugruProximaHeadline", Proxima Nova;
	font-weight: normal;
}
.test-tab section .a-included-link img {
    display: block;
    height: 20px;
    margin: 0 auto 15px auto;
}
.test-tab section.a-apple-subs div.a-one-sub img {
	display: block;
	max-height: 65px;
	max-width: 100%;
	margin: 0px auto;
}
.test-tab section.a-apple-subs div.a-one-sub div.a-sub-copy {
	/*padding: 0px 20px;*/
	text-align: left;
}
.test-tab section.a-apple-subs div.a-one-sub div.a-sub-copy h3 {
	font-size: 18px;
	/*font-weight: bold;*/
	font-family: "SugruProximaHeadline", Proxima Nova;
	font-weight: normal;
	margin-top: 20px;
}
.test-tab section.a-apple-subs div.a-one-sub div.a-sub-copy p {
	font-size: 14px;
	font-weight: normal;
}
.test-tab section.a-apple-subs div.a-one-sub div.a-sub-copy ul {
	padding-left: 15px;
	margin-top: 10px;
}
.test-tab section.a-apple-subs div.a-one-sub div.a-sub-copy ul li {
	margin-top: 10px;
}
.a-faq-tabs {
	display: block;
	float: left;
	width: 100%;
	/*padding: 12px 10px 0px 10px;*/
	padding: 0px 15%;
}
div.a-faq-tabs input {
	display: none;
}
div.a-faq-tabs label {
	width: 100%;
	/*height: 50px;*/
	list-style: none;
	display: inline-block;
	position: relative;
	box-sizing: border-box;
	padding: 15px 10px;
	margin-left: 0px;
	cursor: pointer;
	background-image: url(../../images/plus-symbol.png);
	background-repeat: no-repeat;
	background-position: 98% center;
	transition: none;
	border-bottom: 1px solid #E1E1E1;
	margin-bottom: 10px;
}
div.a-faq-tabs label span {
	display: block;
	width: 100%;
	/*background: #ffffff;*/
	font-size: 13px;
	/*font-weight: bold;*/
	font-family: "SugruProximaHeadline", Proxima Nova;
	font-weight: normal;
	/*line-height: 50px;*/
	color: #25282A;
	padding: 0px;
}
div.a-faq-tabs label img {
	display: block;
	position: absolute;
	/*width: 13px;*/
	/*height: 7px;*/
	right: 40px;
	top: 21px;
}
div.a-faq-tabs [id^="a-tab"]:checked + label {
	border-bottom: none;
	/*background: #ffffff;*/
	background-image: url(../../images/cross-symbol.png);
	border-bottom: none;
	margin-bottom: 0px;
}
div.a-faq-tabs section {
	clear: both;
	display: none;
	text-align: left;
	background: #F2F3F4;
	/*height: 250px;*/
	overflow: auto;
	font-size: 14px;
	padding: 15px;
	/*border: 1px solid #cccccc;*/
	border-top: none;
	min-height: auto;
}
div.a-faq-tabs section p,
div.a-faq-tabs section li {
	font-size: 14px;
}
#a-tab1:checked ~ #a-content1,
#a-tab2:checked ~ #a-content2,
#a-tab3:checked ~ #a-content3,
#a-tab4:checked ~ #a-content4,
#a-tab5:checked ~ #a-content5,
#a-tab6:checked ~ #a-content6,
#a-tab7:checked ~ #a-content7,
#a-tab8:checked ~ #a-content8,
#a-tab9:checked ~ #a-content9  {
	display: block;
	border-bottom: 1px solid #E1E1E1;
	margin-bottom: 10px;
}
/**************************************************************************************************************************/
.c-listing-promo {
	display: block;
	float: left;
	width: 100%;
}
.c-listing-promo img {
	display: block;
	width: 100%;
	max-width: 100%;
}
.c-hidden {
	display: none;
}
