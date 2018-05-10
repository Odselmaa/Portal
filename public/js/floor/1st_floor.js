
var paper1 = Raphael('map1', '1602', '591');
paper1.setViewBox(0, 0,   '1602', '591', true);
paper1.setSize('100%', '100%');
var outer_border = paper1.path("M63,591c220.623-10.348,282-204,282-204h703l208-158h346L1554,0,30,1,8,120l88-1.125V225H0Z");
outer_border.attr({ id: 'outer_border', class: 'cls-1', 'stroke-width': 23, 'stroke': outer_border_color,'stroke-opacity': '1',  }).data('id', 'outer_border');
var inner_border = paper1.path("M112,212l1-109H26L42,14H1544l42,201-332,1L1040,374H431");
inner_border.attr({ id: 'inner_border', class: 'cls-1', 'stroke-width': 2, 'stroke': outer_border_color,'stroke-opacity': '1',  }).data('id', 'inner_border');

var rt_lift = paper1.rect(1214, 115, 47, 17);
rt_lift.attr({ id: 'rt_lift', class: 'cls-2', x: '1214', y: '115', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', 'rt_lift');
var lt_lift = paper1.rect(137, 114, 31, 16);
lt_lift.attr({ id: 'lt_lift', class: 'cls-2', x: '137', y: '114', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', 'lt_lift');

var buffet = paper1.rect(1005, 212, 36, 162);
buffet.attr({ id: 'buffet', class: 'cls-2', x: '1005', y: '212', 'stroke-width': stroke_width, 'stroke': room_border_color,'stroke-opacity': '1', 'fill':fill_room  }).data('id', 'buffet');

var r102 = paper1.path("M198,69.125H73V81h59v22L26,104l4-23H62V69.125H31");
r102.attr({ id: '_102', "data-name": '102', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1', 'fill':fill_room }).data('id', '102');
var r105 = paper1.rect(568, 212, 45, 51);
r105.attr({ id: '_105', "data-name": '105', class: 'cls-2', x: '568', y: '212', 'stroke-width': stroke_width, 'stroke': room_border_color,'stroke-opacity': '1', 'fill':fill_room }).data('id', '105');
var r105a = paper1.rect(568, 264, 45, 51);
r105a.attr({ id: '_105a', "data-name": '105a', class: 'cls-2', x: '568', y: '264', 'stroke-width': stroke_width, 'stroke': room_border_color,'stroke-opacity': '1', 'fill':fill_room }).data('id', '105a');
var r106a = paper1.path("M273,14l11,70H224V14h49Z");
r106a.attr({ id: '_106a', "data-name": '106a', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': room_border_color,'stroke-opacity': '1', 'fill':fill_room }).data('id', '106a');
var r106 = paper1.path("M42,14H222V84H209V56H35Z");
r106.attr({ id: '_106', "data-name": '106', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': room_border_color,'stroke-opacity': '1', 'fill':fill_room }).data('id', '106');
var r107 = paper1.rect(651, 264, 64, 110);
r107.attr({ id: '_107', "data-name": '107', class: 'cls-2', x: '651', y: '264', 'stroke-width': stroke_width, 'stroke': room_border_color,'stroke-opacity': '1', 'fill':fill_room }).data('id', '107');
var r108 = paper1.path("M679.373,145L662,14h66L710.864,145H679.373Z");
r108.attr({ id: '_108', "data-name": '108', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': room_border_color,'stroke-opacity': '1', 'fill':fill_room }).data('id', '108');
var r109 = paper1.rect(651, 212, 41, 34);
r109.attr({ id: '_109', "data-name": '109', class: 'cls-2', x: '651', y: '212', 'stroke-width': stroke_width, 'stroke': room_border_color,'stroke-opacity': '1', 'fill':fill_room }).data('id', '109');
var r109c = paper1.rect(784, 212, 45, 34);
r109c.attr({ id: '_109c', "data-name": '109c', class: 'cls-2', x: '784', y: '212', 'stroke-width': stroke_width, 'stroke': room_border_color,'stroke-opacity': '1', 'fill':fill_room }).data('id', '109c');
var r110 = paper1.rect(1214, 14, 23, 49);
r110.attr({ id: '_110', "data-name": '110', class: 'cls-2', x: '1214', y: '14', 'stroke-width': stroke_width, 'stroke': room_border_color,'stroke-opacity': '1', 'fill':fill_room }).data('id', '110');
var r111 = paper1.rect(718, 264, 64, 110);
r111.attr({ id: '_111', "data-name": '111', class: 'cls-2', x: '718', y: '264', 'stroke-width': stroke_width, 'stroke': room_border_color,'stroke-opacity': '1', 'fill':fill_room }).data('id', '111');
var r112 = paper1.rect(1257, 14, 22, 49);
r112.attr({ id: '_112', "data-name": '112', class: 'cls-2', x: '1257', y: '14', 'stroke-width': stroke_width, 'stroke': room_border_color,'stroke-opacity': '1', 'fill':fill_room }).data('id', '112');
var r113 = paper1.rect(784, 264, 64, 110);
r113.attr({ id: '_113', "data-name": '113', class: 'cls-2', x: '784', y: '264', 'stroke-width': stroke_width, 'stroke': room_border_color,'stroke-opacity': '1', 'fill':fill_room }).data('id', '113');
var r114 = paper1.rect(1300, 14, 41, 64);
r114.attr({ id: '_114', "data-name": '114', class: 'cls-2', x: '1300', y: '14', 'stroke-width': stroke_width, 'stroke': room_border_color,'stroke-opacity': '1', 'fill':fill_room }).data('id', '114');
var r115 = paper1.rect(830, 212, 37, 34);
r115.attr({ id: '_115', "data-name": '115', class: 'cls-2', x: '830', y: '212', 'stroke-width': stroke_width, 'stroke': room_border_color,'stroke-opacity': '1', 'fill':fill_room }).data('id', '115');
var r116 = paper1.rect(1343, 14, 86, 64);
r116.attr({ id: '_116', "data-name": '116', class: 'cls-2', x: '1343', y: '14', 'stroke-width': stroke_width, 'stroke': room_border_color,'stroke-opacity': '1', 'fill':fill_room }).data('id', '116');
var r117 = paper1.rect(869, 212, 134, 93);
r117.attr({ id: '_117', "data-name": '117', class: 'cls-2', x: '869', y: '212', 'stroke-width': stroke_width, 'stroke': room_border_color,'stroke-opacity': '1', 'fill':fill_room }).data('id', '117');
var r118 = paper1.rect(1431, 14, 43, 64);
r118.attr({ id: '_118', "data-name": '118', class: 'cls-2', x: '1431', y: '14', 'stroke-width': stroke_width, 'stroke': room_border_color,'stroke-opacity': '1', 'fill':fill_room }).data('id', '118');
var r119 = paper1.path("M1003,321v53H940V348h17.557V321H1003Z");
r119.attr({ id: '_119', "data-name": '119', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': room_border_color,'stroke-opacity': '1', 'fill':fill_room }).data('id', '119');
var r119a = paper1.rect(694, 212, 41, 34);
r119a.attr({ id: '_119a', "data-name": '119a', class: 'cls-2', x: '694', y: '212', 'stroke-width': stroke_width, 'stroke': room_border_color,'stroke-opacity': '1', 'fill':fill_room }).data('id', '119a');
var r119b = paper1.rect(737, 212, 45, 34);
r119b.attr({ id: '_119b', "data-name": '119b', class: 'cls-2', x: '737', y: '212', 'stroke-width': stroke_width, 'stroke': room_border_color,'stroke-opacity': '1', 'fill':fill_room }).data('id', '119b');
var r120 = paper1.path("M1476,123V14h69l22,109h-91Z");
r120.attr({ id: '_120', "data-name": '120', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': room_border_color,'stroke-opacity': '1', 'fill':fill_room }).data('id', '120');
var r121 = paper1.rect(521, 343, 65, 31);
r121.attr({ id: '_121', "data-name": '121', class: 'cls-2', x: '521', y: '343', 'stroke-width': stroke_width, 'stroke': room_border_color,'stroke-opacity': '1', 'fill':fill_room }).data('id', '121');
var r122 = paper1.rect(1332, 80, 142, 43);
r122.attr({ id: '_122', "data-name": '122', class: 'cls-2', x: '1332', y: '80', 'stroke-width': stroke_width, 'stroke': room_border_color,'stroke-opacity': '1', 'fill':fill_room }).data('id', '122');
var r125 = paper1.rect(447, 343, 72, 31);
r125.attr({ id: '_125', "data-name": '125', class: 'cls-2', x: '447', y: '343', 'stroke-width': stroke_width, 'stroke': room_border_color,'stroke-opacity': '1', 'fill':fill_room }).data('id', '125');
var r127 = paper1.rect(502, 212, 64, 119);
r127.attr({ id: '_127', "data-name": '127', class: 'cls-2', x: '502', y: '212', 'stroke-width': stroke_width, 'stroke': room_border_color,'stroke-opacity': '1', 'fill':fill_room }).data('id', '127');
var r129 = paper1.rect(436, 212, 64, 119);
r129.attr({ id: '_129', "data-name": '129', class: 'cls-2', x: '436', y: '212', 'stroke-width': stroke_width, 'stroke': room_border_color,'stroke-opacity': '1', 'fill':fill_room }).data('id', '129');
var r133 = paper1.rect(1167, 151, 46, 65);
r133.attr({ id: '_133', "data-name": '133', class: 'cls-2', x: '1167', y: '151', 'stroke-width': stroke_width, 'stroke': room_border_color,'stroke-opacity': '1', 'fill':fill_room }).data('id', '133');
var r135 = paper1.rect(1215, 151, 42, 65);
r135.attr({ id: '_135', "data-name": '135', class: 'cls-2', x: '1215', y: '151', 'stroke-width': stroke_width, 'stroke': room_border_color,'stroke-opacity': '1', 'fill':fill_room }).data('id', '135');
var r137 = paper1.rect(1259, 151, 51, 65);
r137.attr({ id: '_137', "data-name": '137', class: 'cls-2', x: '1259', y: '151', 'stroke-width': stroke_width, 'stroke': room_border_color,'stroke-opacity': '1', 'fill':fill_room }).data('id', '137');
var r139 = paper1.rect(1312, 151, 27, 64);
r139.attr({ id: '_139', "data-name": '139', class: 'cls-2', x: '1312', y: '151', 'stroke-width': stroke_width, 'stroke': room_border_color,'stroke-opacity': '1', 'fill':fill_room }).data('id', '139');
var r141 = paper1.rect(1341, 151, 43, 64);
r141.attr({ id: '_141', "data-name": '141', class: 'cls-2', x: '1341', y: '151', 'stroke-width': stroke_width, 'stroke': room_border_color,'stroke-opacity': '1', 'fill':fill_room }).data('id', '141');
var r143 = paper1.rect(1386, 151, 43, 64);
r143.attr({ id: '_143', "data-name": '143', class: 'cls-2', x: '1386', y: '151', 'stroke-width': stroke_width, 'stroke': room_border_color,'stroke-opacity': '1', 'fill':fill_room }).data('id', '143');
var r145 = paper1.rect(1431, 151, 43, 64);
r145.attr({ id: '_145', "data-name": '145', class: 'cls-2', x: '1431', y: '151', 'stroke-width': stroke_width, 'stroke': room_border_color,'stroke-opacity': '1', 'fill':fill_room }).data('id', '145');
var r147 = paper1.path("M1476,151l96-1,14,65H1476V151Z");
r147.attr({ id: '_147', "data-name": '147', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': room_border_color,'stroke-opacity': '1', 'fill':fill_room }).data('id', '147');
var bzdk = paper1.path("M112,238.172H16L75,591l21-2.01L93,570.9c63.466-4.9,96-28.146,96-28.146l7,13.068,11-6.032-7-13.067c54.138-27.178,90-81.422,90-81.422l10,8.042,8-11.058-10-7.036C318.98,425,334,372.87,334,372.87h98V212.005H220v51.3H201V211H112v27.173Z");
bzdk.attr({ id: 'bzdk', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': room_border_color,'stroke-opacity': '1', 'fill':fill_room }).data('id', 'bzdk');



var empty = paper1.rect(1171, 14, 41, 64);
empty.attr({ id: 'empty', class: 'cls-2', x: '1171', y: '14', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', 'empty');
var empty2 = paper1.rect(1214, 80, 47, 52);
empty2.attr({ id: 'empty-2', "data-name": 'empty', class: 'cls-2', x: '1214', y: '80', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', 'empty2');

var toiletM = paper1.path("M1100.36,145L1119,14h-55l16.78,131h19.58Z");
toiletM.attr({ id: 'toiletM', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', 'toiletM');

var cloak1 = paper1.rect(1114, 80, 98, 43);
cloak1.attr({ id: 'cloak1', class: 'cls-2', x: '1114', y: '80', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1', 'fill':fill_room }).data('id', 'cloak1');
var cloak2 = paper1.path("M738,125l0.986-47h198.1L943,125H738Z");
cloak2.attr({ id: 'cloak2', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1','fill':fill_room   }).data('id', 'cloak2');
var cloak3 = paper1.path("M454,125l7.107-47H654v47H454Z");
cloak3.attr({ id: 'cloak3', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  'fill':fill_room }).data('id', 'cloak3');

var toiletW = paper1.path("M948.644,145L930,14h55L968.22,145H948.644Z");
toiletW.attr({ id: 'toiletW', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', 'toiletW');
var toiletW2 = paper1.path("M428.477,145L415,41h49L447.72,145H428.477Z");
toiletW2.attr({ id: 'toiletM2', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', 'toiletM2');
var toiletM2 = paper1.path("M315.523,146L329,41H281l15.28,105h19.243Z");
toiletM2.attr({ id: 'toiletM2-2', "data-name": 'toiletM2', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', 'toiletM2');
var antresoli = paper1.path("M462,76l10.052-62H654V76H462Z");
antresoli.attr({ id: 'antresoli', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', 'antresoli');

var rl_stair = paper1.path("M971,145l8-64,20,4-8,60H971Z");
rl_stair.attr({ id: 'rl_stair', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', 'rl_stair');

var _2nd = paper1.path("M739,76V14H927l9,62H739Z");
_2nd.attr({ id: '_2nd', "data-name": '2nd', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '2nd');
var _02 = paper1.path("M978,93l19,3");
_02.attr({ id: '_0-2', "data-name": '0', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '02');
var _12 = paper1.path("M978,97l19,3");
_12.attr({ id: '_1-2', "data-name": '1', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '12');
var _22 = paper1.path("M977,101l19,3");
_22.attr({ id: '_2-2', "data-name": '2', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '22');
var _32 = paper1.path("M977,105l19,3");
_32.attr({ id: '_3-2', "data-name": '3', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '32');
var _42 = paper1.path("M976,109l19,3");
_42.attr({ id: '_4-2', "data-name": '4', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '42');
var _5 = paper1.path("M976,113l19,3");
_5.attr({ id: '_5', "data-name": '5', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '5');
var _6 = paper1.path("M975.535,117l18.078,3");
_6.attr({ id: '_6', "data-name": '6', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '6');
var _7 = paper1.path("M974.535,121l18.078,3");
_7.attr({ id: '_7', "data-name": '7', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '7');
var _8 = paper1.path("M974.535,125l18.078,3");
_8.attr({ id: '_8', "data-name": '8', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '8');
var rl_lift = paper1.path("M980,77l8-63h19l-8,67Z");
rl_lift.attr({ id: 'rl_lift', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', 'rl_lift');

var rl_stair2 = paper1.path("M1078,145l-8-64-20,4,8,60h20Z");
rl_stair2.attr({ id: 'rl_stair-2', "data-name": 'rl_stair', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', 'rl_stair2');

var _9 = paper1.path("M1071.2,93l-18.65,3");
_9.attr({ id: '_9', "data-name": '9', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '9');
var _10 = paper1.path("M1071.2,97l-18.65,3");
_10.attr({ id: '_10', "data-name": '10', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '10');
var _11 = paper1.path("M1072.18,101l-18.65,3");
_11.attr({ id: '_11', "data-name": '11', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '11');
var _12 = paper1.path("M1072.18,105l-18.65,3");
_12.attr({ id: '_12', "data-name": '12', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '12');
var _13 = paper1.path("M1073.16,109l-18.65,3");
_13.attr({ id: '_13', "data-name": '13', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '13');
var _1412 = paper1.path("M1073.16,113l-18.65,3");
_1412.attr({ id: '_141-2', "data-name": '141', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '1412');
var _15 = paper1.path("M1073.62,117l-17.74,3");
_15.attr({ id: '_15', "data-name": '15', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '15');
var _16 = paper1.path("M1074.6,121l-17.74,3");
_16.attr({ id: '_16', "data-name": '16', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '16');
var _17 = paper1.path("M1074.6,125l-17.74,3");
_17.attr({ id: '_17', "data-name": '17', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '17');
var rl_lift2 = paper1.path("M1069,77l-8-63h-19l8,67Z");
rl_lift2.attr({ id: 'rl_lift-2', "data-name": 'rl_lift', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', 'rl_lift2');

var rl_stair3 = paper1.path("M319,145l8-64,20,4-8,60H319Z");
rl_stair3.attr({ id: 'rl_stair-3', "data-name": 'rl_stair', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', 'rl_stair3');

var _03 = paper1.path("M326,93l19,3");
_03.attr({ id: '_0-3', "data-name": '0', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '03');
var _13 = paper1.path("M326,97l19,3");
_13.attr({ id: '_1-3', "data-name": '1', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '13');
var _23 = paper1.path("M325,101l19,3");
_23.attr({ id: '_2-3', "data-name": '2', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '23');
var _33 = paper1.path("M325,105l19,3");
_33.attr({ id: '_3-3', "data-name": '3', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '33');
var _43 = paper1.path("M324,109l19,3");
_43.attr({ id: '_4-3', "data-name": '4', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '43');
var _52 = paper1.path("M324,113l19,3");
_52.attr({ id: '_5-2', "data-name": '5', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '52');
var _62 = paper1.path("M323.535,117l18.078,3");
_62.attr({ id: '_6-2', "data-name": '6', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '62');
var _72 = paper1.path("M322.535,121l18.078,3");
_72.attr({ id: '_7-2', "data-name": '7', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '72');
var _82 = paper1.path("M322.535,125l18.078,3");
_82.attr({ id: '_8-2', "data-name": '8', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '82');
var rl_lift3 = paper1.path("M328,77l8-63h19l-8,67Z");
rl_lift3.attr({ id: 'rl_lift-3', "data-name": 'rl_lift', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', 'rl_lift3');

var l_stair = paper1.path("M426,145l-8-64-20,4,8,60h20Z");
l_stair.attr({ id: 'l_stair', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', 'l_stair');

var _0_copy = paper1.path("M419.2,93l-18.645,3");
_0_copy.attr({ id: '_0_copy', "data-name": '0 copy', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '0_copy');
var _1_copy = paper1.path("M419.2,97l-18.645,3");
_1_copy.attr({ id: '_1_copy', "data-name": '1 copy', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '1_copy');
var _2_copy = paper1.path("M420.179,101l-18.646,3");
_2_copy.attr({ id: '_2_copy', "data-name": '2 copy', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '2_copy');
var _3_copy = paper1.path("M420.179,105l-18.646,3");
_3_copy.attr({ id: '_3_copy', "data-name": '3 copy', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '3_copy');
var _4_copy = paper1.path("M421.16,109l-18.645,3");
_4_copy.attr({ id: '_4_copy', "data-name": '4 copy', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '4_copy');
var _5_copy = paper1.path("M421.16,113l-18.645,3");
_5_copy.attr({ id: '_5_copy', "data-name": '5 copy', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '5_copy');
var _6_copy = paper1.path("M421.616,117l-17.741,3");
_6_copy.attr({ id: '_6_copy', "data-name": '6 copy', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '6_copy');
var _7_copy = paper1.path("M422.6,121l-17.74,3");
_7_copy.attr({ id: '_7_copy', "data-name": '7 copy', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '7_copy');
var _8_copy = paper1.path("M422.6,125l-17.74,3");
_8_copy.attr({ id: '_8_copy', "data-name": '8 copy', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '8_copy');
var ll_lift = paper1.path("M417,77l-8-63H390l8,67Z");
ll_lift.attr({ id: 'll_lift', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', 'll_lift');

var stair_1073 = paper1.path("M1518,126h49.3l4.7,22h-54V126Z");
stair_1073.attr({ id: 'stair_107-3', "data-name": 'stair_107', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', 'stair_1073');
var _010 = paper1.path("M1538,127.363v20.182");
_010.attr({ id: '_0-10', "data-name": '0', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '010');
var _110 = paper1.path("M1542,127.363v20.182");
_110.attr({ id: '_1-10', "data-name": '1', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '110');
var _210 = paper1.path("M1544,127.363v20.182");
_210.attr({ id: '_2-10', "data-name": '2', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '210');
var _310 = paper1.path("M1540,127.363v20.182");
_310.attr({ id: '_3-10', "data-name": '3', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '310');
var _410 = paper1.path("M1546,127.363v20.182");
_410.attr({ id: '_4-10', "data-name": '4', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '410');
var _59 = paper1.path("M1550,127.363v20.182");
_59.attr({ id: '_5-9', "data-name": '5', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '59');
var _69 = paper1.path("M1552,127.363v20.182");
_69.attr({ id: '_6-9', "data-name": '6', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '69');
var _79 = paper1.path("M1548,127.363v20.182");
_79.attr({ id: '_7-9', "data-name": '7', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '79');
var _89 = paper1.path("M1554,127.363v20.182");
_89.attr({ id: '_8-9', "data-name": '8', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '89');
var _98 = paper1.path("M1556,127.363v20.182");
_98.attr({ id: '_9-8', "data-name": '9', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '98');
var _108 = paper1.path("M1560,127.363v20.182");
_108.attr({ id: '_10-8', "data-name": '10', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '108');
var _118 = paper1.path("M1562,127.363v20.182");
_118.attr({ id: '_11-8', "data-name": '11', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '118');
var _128 = paper1.path("M1558,127.363v20.182");
_128.attr({ id: '_12-8', "data-name": '12', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '128');
var _134 = paper1.path("M1534,127.363v20.182");
_134.attr({ id: '_13-4', "data-name": '13', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '134');
var _143 = paper1.path("M1536,127.363v20.182");
_143.attr({ id: '_14-3', "data-name": '14', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '143');
var _154 = paper1.path("M1532,127.363v20.182");
_154.attr({ id: '_15-4', "data-name": '15', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '154');
var stair_119_0 = paper1.rect(908, 348, 12.188, 17);
stair_119_0.attr({ id: 'stair_119_0', class: 'cls-2', x: '908', y: '348', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', 'stair_119_0');
var stair_119_2 = paper1.rect(919.25, 365, 6.562, 9);
stair_119_2.attr({ id: 'stair_119_2', class: 'cls-2', x: '919.25', y: '365', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', 'stair_119_2');
var stair_119_1 = paper1.rect(924.875, 348, 13.125, 17);
stair_119_1.attr({ id: 'stair_119_1', class: 'cls-2', x: '924.875', y: '348', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', 'stair_119_1');
var empty_119 = paper1.path("M918,319h-9v54h28V319H924v17H909");
empty_119.attr({ id: 'empty_119', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', 'empty_119');
var _011 = paper1.path("M925,350h12");
_011.attr({ id: '_0-11', "data-name": '0', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '011');
var _111 = paper1.path("M925,352h12");
_111.attr({ id: '_1-11', "data-name": '1', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '111');
var _211 = paper1.path("M925,354h12");
_211.attr({ id: '_2-11', "data-name": '2', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '211');
var _311 = paper1.path("M925,356h12");
_311.attr({ id: '_3-11', "data-name": '3', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '311');
var _411 = paper1.path("M925,358h12");
_411.attr({ id: '_4-11', "data-name": '4', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '411');
var _510 = paper1.path("M925,360h12");
_510.attr({ id: '_5-10', "data-name": '5', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '510');
var _610 = paper1.path("M925,362h12");
_610.attr({ id: '_6-10', "data-name": '6', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '610');
var _710 = paper1.path("M908.462,350h11.076");
_710.attr({ id: '_7-10', "data-name": '7', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '710');
var _810 = paper1.path("M908.462,352h11.076");
_810.attr({ id: '_8-10', "data-name": '8', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '810');
var _99 = paper1.path("M908.462,354h11.076");
_99.attr({ id: '_9-9', "data-name": '9', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '99');
var _109 = paper1.path("M908.462,356h11.076");
_109.attr({ id: '_10-9', "data-name": '10', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '109');
var _119 = paper1.path("M908.462,358h11.076");
_119.attr({ id: '_11-9', "data-name": '11', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '119');
var _129 = paper1.path("M908.462,360h11.076");
_129.attr({ id: '_12-9', "data-name": '12', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '129');
var _135 = paper1.path("M908.462,362h11.076");
_135.attr({ id: '_13-5', "data-name": '13', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '135');
var _144 = paper1.path("M919,367h6");
_144.attr({ id: '_14-4', "data-name": '14', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '144');
var _155 = paper1.path("M919,369h6");
_155.attr({ id: '_15-5', "data-name": '15', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '155');
var _164 = paper1.path("M919,371h6");
_164.attr({ id: '_16-4', "data-name": '16', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '164');
var border = paper1.rect(869, 319, 34, 26);
border.attr({ id: 'border', class: 'cls-2', x: '869', y: '319', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', 'border');

var stair_113 = paper1.path("M903,323H882.2l13.52,9.429H878V345h25V323Z");
stair_113.attr({ id: 'stair_113', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', 'stair_113');

var _012 = paper1.path("M899,323.588v20.9");

_012.attr({ id: '_0-12', "data-name": '0', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '012');
var _112 = paper1.path("M897,323.531V344.47");
_112.attr({ id: '_1-12', "data-name": '1', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '112');
var _212 = paper1.path("M895,323.464v7.524");
_212.attr({ id: '_2-12', "data-name": '2', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '212');
var _312 = paper1.path("M893,323.547v6.544");
_312.attr({ id: '_3-12', "data-name": '3', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '312');
var _412 = paper1.path("M891,323.49v5.031");
_412.attr({ id: '_4-12', "data-name": '4', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '412');
var _511 = paper1.path("M889,323.472v3.44");
_511.attr({ id: '_5-11', "data-name": '5', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '511');
var _611 = paper1.path("M887,323.419v2.169");
_611.attr({ id: '_6-11', "data-name": '6', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '611');
var _711 = paper1.path("M901,323.588v20.9");
_711.attr({ id: '_7-11', "data-name": '7', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '711');
var _811 = paper1.path("M894,344V333");
_811.attr({ id: '_8-11', "data-name": '8', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '811');
var _910 = paper1.path("M892,344V333");
_910.attr({ id: '_9-10', "data-name": '9', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '910');
var _1010 = paper1.path("M890,344V333");
_1010.attr({ id: '_10-10', "data-name": '10', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '1010');
var _1110 = paper1.path("M888,344V333");
_1110.attr({ id: '_11-10', "data-name": '11', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '1110');
var _1210 = paper1.path("M886,344V333");
_1210.attr({ id: '_12-10', "data-name": '12', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '1210');
var _136 = paper1.path("M884,344V333");
_136.attr({ id: '_13-6', "data-name": '13', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '136');
var _145 = paper1.path("M882,344V333");
_145.attr({ id: '_14-5', "data-name": '14', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '145');
var _156 = paper1.path("M880,344V333");
_156.attr({ id: '_15-6', "data-name": '15', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '156');
var atm2 = paper1.rect(1149, 176, 16, 38);
atm2.attr({ id: 'atm2', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1', 'fill':fill_room }).data('id', 'atm2');
var empty3 = paper1.rect(850, 319, 17, 55);
empty3.attr({ id: 'empty-3', "data-name": 'empty', class: 'cls-2', x: '850', y: '319', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', 'empty3');
var atm1 = paper1.rect(964, 194, 38, 16);
atm1.attr({ id: 'atm1', class: 'cls-2', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1', 'fill':fill_room  }).data('id', 'atm1');
var Gate1 = paper1.set();
var gate = paper1.path("M1064.8,322.562l103.83-78.513,37.56,49.67-103.82,78.513Z").attr({ id: 'gate', class: 'cls-1', parent: 'Gate1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1', 'fill':fill_room }).data('id', 'gate');
var _0 = paper1.path("M1092.86,359.4l103.36-77.208").attr({ id: '_0', "data-name": '0', class: 'cls-1', parent: 'Gate1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '0');
var _1 = paper1.path("M1094.83,361.432l103.36-77.208").attr({ id: '_1', "data-name": '1', class: 'cls-1', parent: 'Gate1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '1');
var _2 = paper1.path("M1096.79,363.467l103.36-77.208").attr({ id: '_2', "data-name": '2', class: 'cls-1', parent: 'Gate1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '2');
var _3 = paper1.path("M1097.74,366.484l103.36-77.208").attr({ id: '_3', "data-name": '3', class: 'cls-1', parent: 'Gate1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '3');
var _4 = paper1.path("M1099.7,368.518l103.37-77.208").attr({ id: '_4', "data-name": '4', class: 'cls-1', parent: 'Gate1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '4');
Gate1.attr({ 'id': 'Gate1', 'name': 'Gate1' });

var gate2 = paper1.rect(107, 129, 30, 82);
gate2.attr({id: 'gate2',class: 'cls-2',x: '107',y: '129','stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke-opacity': '1', 'fill':fill_room}).data('id', 'gate2');
var cl_stair = paper1.path("M629,166v15H586l-21-15h64Z").attr({ id: 'cl_stair', class: 'cls-1', parent: 'cl_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', 'cl_stair');

var cl_stairs = paper1.set();
var _04 = paper1.path("M627,166v14").attr({ id: '_0-4', "data-name": '0', class: 'cls-1', parent: 'cl_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '04');
var _14 = paper1.path("M625,166v14").attr({ id: '_1-4', "data-name": '1', class: 'cls-1', parent: 'cl_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '14');
var _24 = paper1.path("M623,166v14").attr({ id: '_2-4', "data-name": '2', class: 'cls-1', parent: 'cl_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '24');
var _34 = paper1.path("M621,166v14").attr({ id: '_3-4', "data-name": '3', class: 'cls-1', parent: 'cl_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '34');
var _44 = paper1.path("M619,166v14").attr({ id: '_4-4', "data-name": '4', class: 'cls-1', parent: 'cl_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '44');
var _53 = paper1.path("M617,166v14").attr({ id: '_5-3', "data-name": '5', class: 'cls-1', parent: 'cl_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '53');
var _63 = paper1.path("M615,166v14").attr({ id: '_6-3', "data-name": '6', class: 'cls-1', parent: 'cl_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '63');
var _73 = paper1.path("M613,166v14").attr({ id: '_7-3', "data-name": '7', class: 'cls-1', parent: 'cl_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '73');
var _83 = paper1.path("M611,166v14").attr({ id: '_8-3', "data-name": '8', class: 'cls-1', parent: 'cl_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '83');
var _92 = paper1.path("M609,166v14").attr({ id: '_9-2', "data-name": '9', class: 'cls-1', parent: 'cl_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '92');
var _10_2 = paper1.path("M589,166v14").attr({ id: '_10-2', "data-name": '10', class: 'cls-1', parent: 'cl_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '102');
var _112 = paper1.path("M587,166.467v13.066").attr({ id: '_11-2', "data-name": '11', class: 'cls-1', parent: 'cl_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '112');
var _122 = paper1.path("M585,166.46v12.08").attr({ id: '_12-2', "data-name": '12', class: 'cls-1', parent: 'cl_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '122');
var _132 = paper1.path("M583,166.452v11.1").attr({ id: '_13-2', "data-name": '13', class: 'cls-1', parent: 'cl_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '132');
var _14 = paper1.path("M581,166.414v10.172").attr({ id: '_14', "data-name": '14', class: 'cls-1', parent: 'cl_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '14');
var _152 = paper1.path("M579,166.376v9.248").attr({ id: '_15-2', "data-name": '15', class: 'cls-1', parent: 'cl_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '152');
var _162 = paper1.path("M577,166.478v8.044").attr({ id: '_16-2', "data-name": '16', class: 'cls-1', parent: 'cl_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '162');
var _172 = paper1.path("M575,166.408v6.184").attr({ id: '_17-2', "data-name": '17', class: 'cls-1', parent: 'cl_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '172');
var _18 = paper1.path("M573,166.386v4.228").attr({ id: '_18', "data-name": '18', class: 'cls-1', parent: 'cl_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '18');
var _19 = paper1.path("M571,166.39v3.22").attr({ id: '_19', "data-name": '19', class: 'cls-1', parent: 'cl_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '19');
var cl_stair2 = paper1.path("M762,166v15h43.672L827,166H762Z").attr({ id: 'cl_stair-2', "data-name": 'cl_stair', class: 'cls-1', parent: 'cr_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', 'cl_stair2');

var cr_stairs = paper1.set();
cr_stairs.attr({ 'id': 'cr_stairs', 'name': 'cr_stairs' });

var _05 = paper1.path("M765,166v14").attr({ id: '_0-5', "data-name": '0', class: 'cls-1', parent: 'cr_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '05');
var _15 = paper1.path("M767,166v14").attr({ id: '_1-5', "data-name": '1', class: 'cls-1', parent: 'cr_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '15');
var _25 = paper1.path("M769,166v14").attr({ id: '_2-5', "data-name": '2', class: 'cls-1', parent: 'cr_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '25');
var _35 = paper1.path("M771,166v14").attr({ id: '_3-5', "data-name": '3', class: 'cls-1', parent: 'cr_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '35');
var _45 = paper1.path("M773,166v14").attr({ id: '_4-5', "data-name": '4', class: 'cls-1', parent: 'cr_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '45');
var _54 = paper1.path("M775,166v14").attr({ id: '_5-4', "data-name": '5', class: 'cls-1', parent: 'cr_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '54');
var _64 = paper1.path("M777,166v14").attr({ id: '_6-4', "data-name": '6', class: 'cls-1', parent: 'cr_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '64');
var _74 = paper1.path("M779,166v14").attr({ id: '_7-4', "data-name": '7', class: 'cls-1', parent: 'cr_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '74');
var _84 = paper1.path("M781,166v14").attr({ id: '_8-4', "data-name": '8', class: 'cls-1', parent: 'cr_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '84');
var _93 = paper1.path("M783,166v14").attr({ id: '_9-3', "data-name": '9', class: 'cls-1', parent: 'cr_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '93');
var _103 = paper1.path("M803,166v14").attr({ id: '_10-3', "data-name": '10', class: 'cls-1', parent: 'cr_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '103');
var _113 = paper1.path("M805,166.467v13.066").attr({ id: '_11-3', "data-name": '11', class: 'cls-1', parent: 'cr_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '113');
var _123 = paper1.path("M807,166.46v12.08").attr({ id: '_12-3', "data-name": '12', class: 'cls-1', parent: 'cr_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '123');
var _133 = paper1.path("M809,166.452v11.1").attr({ id: '_13-3', "data-name": '13', class: 'cls-1', parent: 'cr_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '133');
var _142 = paper1.path("M811,166.414v10.172").attr({ id: '_14-2', "data-name": '14', class: 'cls-1', parent: 'cr_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '142');
var _153 = paper1.path("M813,166.376v9.248").attr({ id: '_15-3', "data-name": '15', class: 'cls-1', parent: 'cr_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '153');
var _163 = paper1.path("M815,166.478v8.044").attr({ id: '_16-3', "data-name": '16', class: 'cls-1', parent: 'cr_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '163');
var _173 = paper1.path("M817,166.408v6.184").attr({ id: '_17-3', "data-name": '17', class: 'cls-1', parent: 'cr_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '173');
var _182 = paper1.path("M819,166.386v4.228").attr({ id: '_18-2', "data-name": '18', class: 'cls-1', parent: 'cr_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '182');
var _192 = paper1.path("M821,166.39v3.22").attr({ id: '_19-2', "data-name": '19', class: 'cls-1', parent: 'cr_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '192');
var stairs_107 = paper1.set();
var stair_107 = paper1.path("M604,343h45v30.909H604V343Z").attr({ id: 'stair_107', class: 'cls-1', parent: 'stairs_107', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', 'stair_107');
stairs_107.attr({ 'id': 'stairs_107', 'name': 'stairs_107' });

var _06 = paper1.path("M617,344.371v29.134").attr({ id: '_0-6', "data-name": '0', class: 'cls-1', parent: 'stairs_107', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '06');
var _16 = paper1.path("M621,344.371v29.134").attr({ id: '_1-6', "data-name": '1', class: 'cls-1', parent: 'stairs_107', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '16');
var _26 = paper1.path("M623,344.371v29.134").attr({ id: '_2-6', "data-name": '2', class: 'cls-1', parent: 'stairs_107', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '26');
var _36 = paper1.path("M619,344.371v29.134").attr({ id: '_3-6', "data-name": '3', class: 'cls-1', parent: 'stairs_107', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '36');
var _46 = paper1.path("M625,344.371v29.134").attr({ id: '_4-6', "data-name": '4', class: 'cls-1', parent: 'stairs_107', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '46');
var _55 = paper1.path("M629,344.371v29.134").attr({ id: '_5-5', "data-name": '5', class: 'cls-1', parent: 'stairs_107', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '55');
var _65 = paper1.path("M631,344.371v29.134").attr({ id: '_6-5', "data-name": '6', class: 'cls-1', parent: 'stairs_107', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '65');
var _75 = paper1.path("M627,344.371v29.134").attr({ id: '_7-5', "data-name": '7', class: 'cls-1', parent: 'stairs_107', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '75');
var _85 = paper1.path("M633,344.371v29.134").attr({ id: '_8-5', "data-name": '8', class: 'cls-1', parent: 'stairs_107', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '85');
var _94 = paper1.path("M635,344.371v29.134").attr({ id: '_9-4', "data-name": '9', class: 'cls-1', parent: 'stairs_107', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '94');
var _104 = paper1.path("M639,344.371v29.134").attr({ id: '_10-4', "data-name": '10', class: 'cls-1', parent: 'stairs_107', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '104');
var _114 = paper1.path("M641,344.371v29.134").attr({ id: '_11-4', "data-name": '11', class: 'cls-1', parent: 'stairs_107', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '114');
var _124 = paper1.path("M637,344.371v29.134").attr({ id: '_12-4', "data-name": '12', class: 'cls-1', parent: 'stairs_107', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '124');
var lt_stairs = paper1.set();
var lt_stair = paper1.rect(133, 81, 35, 22).attr({ id: 'lt_stair', class: 'cls-2', x: '133', y: '81', parent: 'lt_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', 'lt_stair');
lt_stairs.attr({ 'id': 'lt_stairs', 'name': 'lt_stairs' });
var stairs_106a = paper1.set();
var stair_106a = paper1.path("M277,14l4,25h48l3-25H277Z").attr({ id: 'stair_106a', class: 'cls-1', parent: 'stairs_106a', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', 'stair_106a');
var _17 = paper1.path("M303,14.411V38.589").attr({ id: '_1-7', "data-name": '1', class: 'cls-1', parent: 'stairs_106a', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '17');
var _27 = paper1.path("M307,14.411V38.589").attr({ id: '_2-7', "data-name": '2', class: 'cls-1', parent: 'stairs_106a', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '27');
var _37 = paper1.path("M309,14.411V38.589").attr({ id: '_3-7', "data-name": '3', class: 'cls-1', parent: 'stairs_106a', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '37');
var _47 = paper1.path("M305,14.411V38.589").attr({ id: '_4-7', "data-name": '4', class: 'cls-1', parent: 'stairs_106a', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '47');
var _56 = paper1.path("M311,14.411V38.589").attr({ id: '_5-6', "data-name": '5', class: 'cls-1', parent: 'stairs_106a', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '56');
var _66 = paper1.path("M315,14.411V38.589").attr({ id: '_6-6', "data-name": '6', class: 'cls-1', parent: 'stairs_106a', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '66');
var _76 = paper1.path("M317,14.411V38.589").attr({ id: '_7-6', "data-name": '7', class: 'cls-1', parent: 'stairs_106a', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '76');
var _86 = paper1.path("M313,14.411V38.589").attr({ id: '_8-6', "data-name": '8', class: 'cls-1', parent: 'stairs_106a', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '86');
var _95 = paper1.path("M299,14.411V38.589").attr({ id: '_9-5', "data-name": '9', class: 'cls-1', parent: 'stairs_106a', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '95');
var _105 = paper1.path("M301,14.411V38.589").attr({ id: '_10-5', "data-name": '10', class: 'cls-1', parent: 'stairs_106a', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '105');
var _115 = paper1.path("M297,14.411V38.589").attr({ id: '_11-5', "data-name": '11', class: 'cls-1', parent: 'stairs_106a', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '115');
var _125 = paper1.path("M295,14.411V38.589").attr({ id: '_12-5', "data-name": '12', class: 'cls-1', parent: 'stairs_106a', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '125');
var _07 = paper1.path("M319,14V38").attr({ id: '_0-7', "data-name": '0', class: 'cls-1', parent: 'stairs_106a', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '07');
stairs_106a.attr({ 'id': 'stairs_106a', 'name': 'stairs_106a' });

var stairs_ant = paper1.set();
var stair_106a2 = paper1.path("M411,14l4.145,25h49.746L468,14H411Z").attr({ id: 'stair_106a-2', "data-name": 'stair_106a', class: 'cls-1', parent: 'stairs_ant', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', 'stair_106a2');
var _18 = paper1.path("M437,14.411V38.589").attr({ id: '_1-8', "data-name": '1', class: 'cls-1', parent: 'stairs_ant', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '18');
var _28 = paper1.path("M441,14.411V38.589").attr({ id: '_2-8', "data-name": '2', class: 'cls-1', parent: 'stairs_ant', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '28');
var _38 = paper1.path("M443,14.411V38.589").attr({ id: '_3-8', "data-name": '3', class: 'cls-1', parent: 'stairs_ant', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '38');
var _48 = paper1.path("M439,14.411V38.589").attr({ id: '_4-8', "data-name": '4', class: 'cls-1', parent: 'stairs_ant', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '48');
var _57 = paper1.path("M445,14.411V38.589").attr({ id: '_5-7', "data-name": '5', class: 'cls-1', parent: 'stairs_ant', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '57');
var _67 = paper1.path("M449,14.411V38.589").attr({ id: '_6-7', "data-name": '6', class: 'cls-1', parent: 'stairs_ant', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '67');
var _77 = paper1.path("M451,14.411V38.589").attr({ id: '_7-7', "data-name": '7', class: 'cls-1', parent: 'stairs_ant', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '77');
var _87 = paper1.path("M447,14.411V38.589").attr({ id: '_8-7', "data-name": '8', class: 'cls-1', parent: 'stairs_ant', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '87');
var _96 = paper1.path("M433,14.411V38.589").attr({ id: '_9-6', "data-name": '9', class: 'cls-1', parent: 'stairs_ant', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '96');
var _10_6 = paper1.path("M435,14.411V38.589").attr({ id: '_10-6', "data-name": '10', class: 'cls-1', parent: 'stairs_ant', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '106');
var _116 = paper1.path("M431,14.411V38.589").attr({ id: '_11-6', "data-name": '11', class: 'cls-1', parent: 'stairs_ant', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '116');
var _126 = paper1.path("M429,14.411V38.589").attr({ id: '_12-6', "data-name": '12', class: 'cls-1', parent: 'stairs_ant', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '126');
var _08 = paper1.path("M453,14V38").attr({ id: '_0-8', "data-name": '0', class: 'cls-1', parent: 'stairs_ant', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '08');
stairs_ant.attr({ 'id': 'stairs_ant', 'name': 'stairs_ant' });

var stairs1 = paper1.set();
var stair_1072 = paper1.path("M345,213v39H304.992V213H345Z").attr({ id: 'stair_107-2', "data-name": 'stair_107', class: 'cls-1', parent: 'stairs1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', 'stair_1072');
var _09 = paper1.path("M343.232,226H305.639").attr({ id: '_0-9', "data-name": '0', class: 'cls-1', parent: 'stairs1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '09');
var _19 = paper1.path("M343.232,230H305.639").attr({ id: '_1-9', "data-name": '1', class: 'cls-1', parent: 'stairs1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '19');
var _29 = paper1.path("M343.232,232H305.639").attr({ id: '_2-9', "data-name": '2', class: 'cls-1', parent: 'stairs1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '29');
var _39 = paper1.path("M343.232,228H305.639").attr({ id: '_3-9', "data-name": '3', class: 'cls-1', parent: 'stairs1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '39');
var _49 = paper1.path("M343.232,234H305.639").attr({ id: '_4-9', "data-name": '4', class: 'cls-1', parent: 'stairs1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '49');
var _58 = paper1.path("M343.232,238H305.639").attr({ id: '_5-8', "data-name": '5', class: 'cls-1', parent: 'stairs1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '58');
var _68 = paper1.path("M343.232,240H305.639").attr({ id: '_6-8', "data-name": '6', class: 'cls-1', parent: 'stairs1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '68');
var _78 = paper1.path("M343.232,236H305.639").attr({ id: '_7-8', "data-name": '7', class: 'cls-1', parent: 'stairs1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '78');
var _88 = paper1.path("M343.232,242H305.639").attr({ id: '_8-8', "data-name": '8', class: 'cls-1', parent: 'stairs1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '88');
var _97 = paper1.path("M343.232,244H305.639").attr({ id: '_9-7', "data-name": '9', class: 'cls-1', parent: 'stairs1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '97');
var _107 = paper1.path("M343.232,248H305.639").attr({ id: '_10-7', "data-name": '10', class: 'cls-1', parent: 'stairs1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '107');
var _117 = paper1.path("M343.232,250H305.639").attr({ id: '_11-7', "data-name": '11', class: 'cls-1', parent: 'stairs1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '117');
var _127 = paper1.path("M343.232,246H305.639").attr({ id: '_12-7', "data-name": '12', class: 'cls-1', parent: 'stairs1', 'stroke-width': stroke_width, 'stroke': inner_border_color,'stroke-opacity': '1',  }).data('id', '127');

var rooms1 = [r102 ,r105 ,r105a ,r106a ,r106 ,r107 ,r108 ,r109 ,r109c ,
    r110 ,r111 ,r112 ,r113 ,r114 ,r115 ,r116 ,r117 ,r118 ,r119 ,r119a ,r119b ,
    r120 ,r121 ,r122 ,r125 ,r127 ,r129 ,r133 ,r135 ,r137 ,r139 ,r141 ,r143 ,r145 ,r147 ,
    bzdk, cloak1, cloak2, cloak3, buffet, atm1, atm2, toiletM, toiletW, toiletM2, toiletW2]

    var labels1 = ['102','105','105a','106a','106','107','108','109','109в',
'110','111','112','113','114','115','116','117','118','119','119a','119б',
'120','121','122','125','127','129','133','135','137','139','141','143','145','147',
culture_txt, `${wardrobe_txt} #1`, `${wardrobe_txt} #2`, `${wardrobe_txt} #3`, buffet_txt, 'ATM', 'ATM', male, female,  male, female]

var cloaks = [cloak1, cloak2, cloak3]
var lifts1 = [rt_lift, lt_lift, rl_lift, rl_lift2, rl_lift3, ll_lift]
var stairs1 = [rl_stair,rl_stair2,rl_stair3,l_stair,stair_1073,stair_119_0,stair_119_1, stair_119_2, stair_113, cl_stair,cl_stair2,stair_107,lt_stair,stair_106a,stair_106a2,stair_1072]
var gates1 = [gate, gate2]
setEventAndEverything(paper1, rooms1, [], [], labels1, 17)
setEvent(cloaks)
setEvent(lifts1)
setEvent(stairs1)
setEvent(gates1)