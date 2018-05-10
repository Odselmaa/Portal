
var canvas_id = 'map5'

var paper5 = Raphael(canvas_id);
paper5.setViewBox(0, 0, '2600', '500', true);
paper5.setSize('100%', '100%');

var border = paper5.path("M55,372l-8-98V234l8-90H213V96H334v49H554L572,31H783l21,113h438l-14-68h111l-11,69h412l20-115h213l20,113h199V96h124v48h151l10,96v35l-10,97H55Z");
border.attr({ id: 'border', class: 'cls-1', 'stroke-width': 25, 'stroke': outer_border_color, 'stroke-opacity': '1', }).data('id', 'border');
var _501 = paper5.path("M66.808,358.238c20.563,0.237,48.5.237,76.444,0.237V274.636H59.43C61.628,303.5,64.794,330.881,66.808,358.238Z");
_501.attr({ id: '501', "data-name": '701', class: 'cls-3', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '501');
var _502 = paper5.path("M66.808,157.5c20.563-.236,48.5-0.236,76.444-0.236V241.1H59.43C61.628,212.242,64.794,184.857,66.808,157.5Z");
_502.attr({ id: '502', "data-name": '702', class: 'cls-3', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '502');
var _503 = paper5.rect(144.312, 274.625, 83.813, 83.844);
_503.attr({ id: '503', "data-name": '703', class: 'cls-5', x: '144.312', y: '274.625', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '503');
var _504 = paper5.rect(144, 157, 82, 84);
_504.attr({ id: '504', "data-name": '704', class: 'cls-5', x: '144', y: '157', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '504');
var _507 = paper5.rect(229.156, 274.625, 52.406, 83.844);
_507.attr({ id: '507', "data-name": '707', class: 'cls-5', x: '229.156', y: '274.625', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '507');
var _506 = paper5.rect(322.438, 157.25, 73.343, 83.844);
_506.attr({ id: '506', "data-name": '706', class: 'cls-5', x: '322.438', y: '157.25', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '506');
var _506a = paper5.rect(322.438, 242.156, 73.343, 57.625);
_506a.attr({ id: '506a', "data-name": '706a', class: 'cls-5', x: '322.438', y: '242.156', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '506a');
var _508 = paper5.rect(401, 157.25, 125.75, 142.531);
_508.attr({ id: '508', "data-name": '708', class: 'cls-5', x: '401', y: '157.25', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '508');
var _510 = paper5.rect(527.781, 157.25, 31.438, 71.281);
_510.attr({ id: '510', "data-name": '710', class: 'cls-5', x: '527.781', y: '157.25', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '510');
var _510a = paper5.rect(527.781, 229.562, 31.438, 70.219);
_510a.attr({ id: '510a', "data-name": '710a', class: 'cls-5', x: '527.781', y: '229.562', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '510a');
var toilet5M = paper5.rect(798.125, 157.25, 83.813, 83.844);
toilet5M.attr({ id: 'toilet5M', class: 'cls-6', x: '798.125', y: '157.25', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', 'toilet5M');
var _511 = paper5.rect(626.281, 274.625, 83.813, 83.844);
_511.attr({ id: '511', "data-name": '711', class: 'cls-6', x: '626.281', y: '274.625', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '511');
var _513 = paper5.rect(712.188, 274.625, 83.843, 83.844);
_513.attr({ id: '513', "data-name": '713', class: 'cls-6', x: '712.188', y: '274.625', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '513');
var _515 = paper5.rect(797.062, 274.625, 83.813, 83.844);
_515.attr({ id: '515', "data-name": '715', class: 'cls-6', x: '797.062', y: '274.625', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '515');
var _517 = paper5.rect(887.188, 274.625, 83.812, 83.844);
_517.attr({ id: '517', "data-name": '717', class: 'cls-5', x: '887.188', y: '274.625', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '517');
var _518 = paper5.rect(888.219, 157.25, 83.812, 83.844);
_518.attr({ id: '518', "data-name": '718', class: 'cls-7', x: '888.219', y: '157.25', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '518');
var _519 = paper5.rect(977.281, 274.625, 75.439, 83.844);
_519.attr({ id: '519', "data-name": '719', class: 'cls-6', x: '977.281', y: '274.625', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '519');
var _520 = paper5.rect(977.281, 157.25, 75.439, 83.844);
_520.attr({ id: '520', "data-name": '720', class: 'cls-6', x: '977.281', y: '157.25', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '520');
var _521 = paper5.rect(1054, 275, 76, 84);
_521.attr({ id: '521', "data-name": '721', class: 'cls-6', x: '1054', y: '275', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '521');
var _522 = paper5.rect(1054.81, 157.25, 75.44, 83.844);
_522.attr({ id: '522', "data-name": '722', class: 'cls-6', x: '1054.81', y: '157.25', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '522');
var _523 = paper5.rect(1132.34, 274.625, 75.44, 83.844);
_523.attr({ id: '523', "data-name": '723', class: 'cls-6', x: '1132.34', y: '274.625', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '523');
var _524 = paper5.rect(1131, 157, 76, 84);
_524.attr({ id: '524', "data-name": '724', class: 'cls-6', x: '1131', y: '157', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '524');
var _525 = paper5.rect(1209.34, 274.625, 75.44, 83.844);
_525.attr({ id: '525', "data-name": '725', class: 'cls-8', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '525');
var _527 = paper5.rect(1286.38, 274.625, 75.43, 83.844);
_527.attr({ id: '527', "data-name": '727', class: 'cls-6', x: '1286.38', y: '274.625', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '527');
var _529 = paper5.rect(1363.38, 274.625, 75.43, 83.844);
_529.attr({ id: '529', "data-name": '729', class: 'cls-8', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '529');
var _530 = paper5.rect(1363.38, 156.625, 75.43, 83.844);
_530.attr({ id: '530', "data-name": '730', class: 'cls-8', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '530');
var _532 = paper5.rect(1440.41, 157.25, 75.43, 83.844);
_532.attr({ id: '532', "data-name": '732', class: 'cls-6', x: '1440.41', y: '157.25', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '532');
var _534 = paper5.rect(1517.94, 157.25, 75.44, 83.844);
_534.attr({ id: '534', "data-name": '734', class: 'cls-6', x: '1517.94', y: '157.25', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '534');
var _536 = paper5.rect(1595.47, 157.25, 75.44, 83.844);
_536.attr({ id: '536', "data-name": '736', class: 'cls-6', x: '1595.47', y: '157.25', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '536');
var _531 = paper5.rect(1440.41, 274.625, 75.43, 83.844);
_531.attr({ id: '531', "data-name": '731', class: 'cls-6', x: '1440.41', y: '274.625', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '531');
var _533 = paper5.rect(1519, 274.625, 75.44, 83.844);
_533.attr({ id: '533', "data-name": '733', class: 'cls-6', x: '1519', y: '274.625', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '533');
var _535 = paper5.rect(1596.53, 274.625, 75.44, 83.844);
_535.attr({ id: '535', "data-name": '735', class: 'cls-6', x: '1596.53', y: '274.625', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '535');
var _537 = paper5.rect(1674.06, 274.625, 75.44, 83.844);
_537.attr({ id: '537', "data-name": '737', class: 'cls-6', x: '1674.06', y: '274.625', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '537');
var _539 = paper5.rect(1751.06, 274.625, 75.44, 83.844);
_539.attr({ id: '539', "data-name": '739', class: 'cls-8', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '539');
var _539a = paper5.rect(1828, 275, 39, 84);
_539a.attr({ id: '539a', "data-name": '739a', class: 'cls-6', x: '1828', y: '275', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '539a');
var toilet5W = paper5.rect(1673, 157.25, 75.44, 83.844);
toilet5W.attr({ id: 'toilet5W', class: 'cls-6', x: '1673', y: '157.25', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', 'toilet5W');
var _546 = paper5.rect(2170.19, 157.25, 37.72, 83.844);
_546.attr({ id: '546', "data-name": '746', class: 'cls-5', x: '2170.19', y: '157.25', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '546');
var _542 = paper5.rect(1987.88, 157.25, 31.4, 83.844);
_542.attr({ id: '542', "data-name": '742', class: 'cls-5', x: '1987.88', y: '157.25', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '542');
var _542a = paper5.rect(1987.88, 242.094, 31.4, 75.468);
_542a.attr({ id: '542a', "data-name": '742a', class: 'cls-5', x: '1987.88', y: '242.094', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '542a');
var _546a = paper5.rect(2170.19, 242.094, 37.72, 75.468);
_546a.attr({ id: '546a', "data-name": '746a', class: 'cls-5', x: '2170.19', y: '242.094', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '546a');
var _544 = paper5.rect(2021.38, 157.25, 146.71, 159.312);
_544.attr({ id: '544', "data-name": '744', class: 'cls-6', x: '2021.38', y: '157.25', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '544');
var _547 = paper5.rect(2257, 275, 45, 84);
_547.attr({ id: '547', "data-name": '747', class: 'cls-9', x: '2257', y: '275', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '547');
var _549 = paper5.rect(2303.81, 274.625, 73.35, 83.844);
_549.attr({ id: '549', "data-name": '749', class: 'cls-9', x: '2303.81', y: '274.625', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '549');
var _548 = paper5.rect(2303.81, 157.25, 73.35, 83.844);
_548.attr({ id: '548', "data-name": '748', class: 'cls-9', x: '2303.81', y: '157.25', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '548');
var _550 = paper5.path("M2455.7,157.5c-20.56-.236-48.5-0.236-76.44-0.236V241.1h83.82C2460.88,212.242,2457.72,184.857,2455.7,157.5Z");
_550.attr({ id: '550', "data-name": '750', class: 'cls-3', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '550');
var _551 = paper5.path("M2455.7,358.238c-20.56.237-48.5,0.237-76.44,0.237V274.636h83.82C2460.88,303.5,2457.72,330.881,2455.7,358.238Z");
_551.attr({ id: '551', "data-name": '751', class: 'cls-3', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '551');



var rr_stair = paper5.path("M1976,126h-60l9,73h64Z");
rr_stair.attr({ id: 'rborder', class: 'cls-10', 'stroke-width': '0', 'stroke-opacity': '1' }).data('id', 'rr_stair');
var rl_stair = paper5.path("M1759,126h60l-9,73h-64Z");
rl_stair.attr({ id: 'lborder', class: 'cls-10', 'stroke-width': '0', 'stroke-opacity': '1' }).data('id', 'rl_stair');
// Stairs
var ml_stair = paper5.path("M1256.16,158H1279l-11-46h-20Z");
ml_stair.attr({ id: 'ml_stair', class: 'cls-4', 'stroke-width': '0', 'stroke-opacity': '1' }).data('id', 'ml_stair');
var mr_stair = paper5.path("M1312.84,158H1290l11-46h20Z");
mr_stair.attr({ id: 'mr_stair', class: 'cls-4', 'stroke-width': '0', 'stroke-opacity': '1' }).data('id', 'mr_stair');

var ll_stair = paper5.path("M787,126H727l9,73h64Z").attr({ id: 'll_border', "data-name": 'border', class: 'cls-10', parent: 'r_stair', 'stroke-width': '0', 'stroke-opacity': '1' }).data('id', 'll_stair');
var lr_stair = paper5.path("M570,126h60l-9,73H557Z").attr({ id: 'lr_border', "data-name": 'border', class: 'cls-10', parent: 'l_stair', 'stroke-width': '0', 'stroke-opacity': '1' }).data('id', 'lr_stair');

var lt_stair = paper5.rect(224, 108, 99, 35);
lt_stair.attr({ id: 'l_stair', class: 'cls-2', x: '224', y: '108', 'stroke-width': '0', 'stroke-opacity': '1' }).data('id', 'lt_stair');
var rt_stair = paper5.rect(2207, 111, 95, 36);
rt_stair.attr({ id: 'r_stair', class: 'cls-2', x: '2207', y: '111', 'stroke-width': '0', 'stroke-opacity': '1' }).data('id', 'rt_stair');


var lbord = paper5.path("M558,198.477L582.844,44H772.75L799,198.477");
lbord.attr({ class: 'cls-4', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var ll0 = paper5.path("M642,44.522L621,198.6");
ll0.attr({ class: 'cls-4', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var rl0 = paper5.path("M717,44.4l21,154.077");
rl0.attr({ class: 'cls-4', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var ll1 = paper5.path("M570.508,126.221h59.984");
ll1.attr({ class: 'cls-4', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var rl1 = paper5.path("M727.492,126.221h58.016");
rl1.attr({ class: 'cls-4', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var lbord2 = paper5.path("M1747,198.477L1771.84,44h189.91L1988,198.477");
lbord2.attr({ id: 'lbord-2', class: 'cls-4', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var ll02 = paper5.path("M1831,44.522L1810,198.6");
ll02.attr({ id: 'll0-2', class: 'cls-4', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var rl02 = paper5.path("M1906,44.4l21,153.08");
rl02.attr({ id: 'rl0-2', class: 'cls-4', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var ll12 = paper5.path("M1759.51,126.72h59.98");
ll12.attr({ id: 'll1-2', class: 'cls-4', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var rl12 = paper5.path("M1916.49,126.72h58.02");
rl12.attr({ id: 'rl1-2', class: 'cls-4', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var mbord = paper5.path("M1207,156.99l49-.251-14-67.331h83l-11,67.331,48,0.251");
mbord.attr({ class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var wall2 = paper5.path("M1208,179h21");
wall2.attr({ class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var wall1 = paper5.path("M1239.13,179h93.74");
wall1.attr({ class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var wall0 = paper5.path("M1342,179h22");
wall0.attr({ class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var door = paper5.set();
var path_g = paper5.path("M696.518,198h57.964").attr({ class: 'cls-4', parent: 'door', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var path_h = paper5.path("M778.553,198h19.894").attr({ class: 'cls-4', parent: 'door', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var Shape_8_copy = paper5.path("M605.518,198h57.964").attr({ "data-name": 'Shape 8 copy', class: 'cls-4', parent: 'door', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var Shape_9_copy = paper5.path("M559.553,198h19.894").attr({ "data-name": 'Shape 9 copy', class: 'cls-4', parent: 'door', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
door.attr({ 'id': 'door', 'name': 'door' });
var r_stair = paper5.set();
var _13 = paper5.path("M730.492,149.006h58.016").attr({ id: '_1-3', class: 'cls-4', parent: 'r_stair', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _23 = paper5.path("M731.492,153.959h58.016").attr({ id: '_2-3', class: 'cls-4', parent: 'r_stair', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _33 = paper5.path("M732.492,158.912h58.016").attr({ id: '_3-3', class: 'cls-4', parent: 'r_stair', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _43 = paper5.path("M733.492,163.865h58.016").attr({ id: '_4-3', class: 'cls-4', parent: 'r_stair', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _53 = paper5.path("M733.492,168.818h58.016").attr({ id: '_5-3', class: 'cls-4', parent: 'r_stair', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _63 = paper5.path("M734.492,173.771h58.016").attr({ id: '_6-3', class: 'cls-4', parent: 'r_stair', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _73 = paper5.path("M735.492,178.724h58.016").attr({ id: '_7-3', class: 'cls-4', parent: 'r_stair', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _83 = paper5.path("M736.492,183.677h58.016").attr({ id: '_8-3', class: 'cls-4', parent: 'r_stair', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
r_stair.attr({ 'id': 'r_stair', 'name': 'r_stair' });
var l_stair = paper5.set();
var _14 = paper5.path("M627.5,149.006h-58.91").attr({ id: '_1-4', class: 'cls-4', parent: 'l_stair', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _24 = paper5.path("M626.485,153.959H567.576").attr({ id: '_2-4', class: 'cls-4', parent: 'l_stair', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _34 = paper5.path("M625.47,158.912H566.561").attr({ id: '_3-4', class: 'cls-4', parent: 'l_stair', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _44 = paper5.path("M624.455,163.865h-58.91").attr({ id: '_4-4', class: 'cls-4', parent: 'l_stair', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _54 = paper5.path("M624.455,168.818h-58.91").attr({ id: '_5-4', class: 'cls-4', parent: 'l_stair', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _64 = paper5.path("M623.439,173.771H564.53").attr({ id: '_6-4', class: 'cls-4', parent: 'l_stair', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _74 = paper5.path("M622.424,178.724H563.515").attr({ id: '_7-4', class: 'cls-4', parent: 'l_stair', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _84 = paper5.path("M621.408,183.677H562.5").attr({ id: '_8-4', class: 'cls-4', parent: 'l_stair', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
l_stair.attr({ 'id': 'l_stair', 'name': 'l_stair' });
var r_stair2 = paper5.set();
var _15 = paper5.path("M1919.49,149.642h58.02").attr({ id: '_1-5', class: 'cls-4', parent: 'r_stair2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _25 = paper5.path("M1920.49,154.625h58.02").attr({ id: '_2-5', class: 'cls-4', parent: 'r_stair2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _35 = paper5.path("M1921.49,159.608h58.02").attr({ id: '_3-5', class: 'cls-4', parent: 'r_stair2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _45 = paper5.path("M1922.49,164.591h58.02").attr({ id: '_4-5', class: 'cls-4', parent: 'r_stair2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _55 = paper5.path("M1922.49,169.574h58.02").attr({ id: '_5-5', class: 'cls-4', parent: 'r_stair2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _65 = paper5.path("M1923.49,174.558h58.02").attr({ id: '_6-5', class: 'cls-4', parent: 'r_stair2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _75 = paper5.path("M1924.49,179.541h58.02").attr({ id: '_7-5', class: 'cls-4', parent: 'r_stair2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _85 = paper5.path("M1925.49,184.524h58.02").attr({ id: '_8-5', class: 'cls-4', parent: 'r_stair2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
r_stair2.attr({ 'id': 'r_stair-2', 'data-name': 'r_stair', 'name': 'r_stair2' });
var l_stair2 = paper5.set();
var _16 = paper5.path("M1816.5,149.642h-58.91").attr({ id: '_1-6', class: 'cls-4', parent: 'l_stair2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _26 = paper5.path("M1815.49,154.625h-58.91").attr({ id: '_2-6', class: 'cls-4', parent: 'l_stair2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _36 = paper5.path("M1814.47,159.608h-58.91").attr({ id: '_3-6', class: 'cls-4', parent: 'l_stair2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _46 = paper5.path("M1813.45,164.591h-58.9").attr({ id: '_4-6', class: 'cls-4', parent: 'l_stair2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _56 = paper5.path("M1813.45,169.574h-58.9").attr({ id: '_5-6', class: 'cls-4', parent: 'l_stair2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _66 = paper5.path("M1812.44,174.558h-58.91").attr({ id: '_6-6', class: 'cls-4', parent: 'l_stair2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _76 = paper5.path("M1811.42,179.541h-58.91").attr({ id: '_7-6', class: 'cls-4', parent: 'l_stair2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _86 = paper5.path("M1810.41,184.524H1751.5").attr({ id: '_8-6', class: 'cls-4', parent: 'l_stair2', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
l_stair2.attr({ 'id': 'l_stair-2', 'data-name': 'l_stair', 'name': 'l_stair2' });
var door_copy = paper5.set();
var path_i = paper5.path("M1885.52,198h57.96").attr({ class: 'cls-4', "data-name": 'door copy', parent: 'door_copy', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var path_j = paper5.path("M1967.55,198h19.9").attr({ class: 'cls-4', "data-name": 'door copy', parent: 'door_copy', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var Shape_8_copy2 = paper5.path("M1794.52,198h57.96").attr({ id: 'Shape_8_copy-2', "data-name": 'Shape 8 copy', class: 'cls-4', parent: 'door_copy', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var Shape_9_copy2 = paper5.path("M1748.55,198h19.9").attr({ id: 'Shape_9_copy-2', "data-name": 'Shape 9 copy', class: 'cls-4', parent: 'door_copy', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
door_copy.attr({ 'id': 'door_copy', 'data-name': 'door copy', 'name': 'door_copy' });
var lstair = paper5.set();
var _00 = paper5.path("M1277.4,157.99h-18.8").attr({ class: 'cls-4', parent: 'lstair', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _01 = paper5.path("M1276.4,153.99h-18.8").attr({ class: 'cls-4', parent: 'lstair', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _02 = paper5.path("M1276.4,149.99h-18.8").attr({ class: 'cls-4', parent: 'lstair', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _03 = paper5.path("M1275.4,145.99h-18.8").attr({ class: 'cls-4', parent: 'lstair', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _04 = paper5.path("M1274.4,141.99h-18.8").attr({ class: 'cls-4', parent: 'lstair', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _05 = paper5.path("M1273.4,137.99h-18.8").attr({ class: 'cls-4', parent: 'lstair', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _06 = paper5.path("M1272.4,133.99h-18.8").attr({ class: 'cls-4', parent: 'lstair', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _07 = paper5.path("M1271.4,129.99h-18.8").attr({ class: 'cls-4', parent: 'lstair', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _08 = paper5.path("M1270.4,125.99h-18.8").attr({ class: 'cls-4', parent: 'lstair', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _09 = paper5.path("M1269.4,121.99h-18.8").attr({ class: 'cls-4', parent: 'lstair', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _010 = paper5.path("M1268.4,117.99h-18.8").attr({ class: 'cls-4', parent: 'lstair', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _011 = paper5.path("M1267.4,113.99h-18.8").attr({ class: 'cls-4', parent: 'lstair', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var stb = paper5.path("M1278.03,157.686L1268,113").attr({ class: 'cls-4', parent: 'lstair', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
lstair.attr({ 'id': 'lstair', 'name': 'lstair' });

var rstair = paper5.set();
var _002 = paper5.path("M1292.6,156.99h18.8").attr({ id: '_00-2', class: 'cls-4', parent: 'rstair', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _012 = paper5.path("M1292.6,152.99h18.8").attr({ id: '_01-2', class: 'cls-4', parent: 'rstair', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _022 = paper5.path("M1293.6,148.99h18.8").attr({ id: '_02-2', class: 'cls-4', parent: 'rstair', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _032 = paper5.path("M1294.6,144.99h18.8").attr({ id: '_03-2', class: 'cls-4', parent: 'rstair', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _042 = paper5.path("M1295.6,140.99h18.8").attr({ id: '_04-2', class: 'cls-4', parent: 'rstair', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _052 = paper5.path("M1295.6,136.99h18.8").attr({ id: '_05-2', class: 'cls-4', parent: 'rstair', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _062 = paper5.path("M1296.6,132.99h18.8").attr({ id: '_06-2', class: 'cls-4', parent: 'rstair', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _072 = paper5.path("M1297.6,128.99h18.8").attr({ id: '_07-2', class: 'cls-4', parent: 'rstair', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _082 = paper5.path("M1298.6,124.99h18.8").attr({ id: '_08-2', class: 'cls-4', parent: 'rstair', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _092 = paper5.path("M1299.6,120.99h18.8").attr({ id: '_09-2', class: 'cls-4', parent: 'rstair', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _0102 = paper5.path("M1300.6,116.99h18.8").attr({ id: '_010-2', class: 'cls-4', parent: 'rstair', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _0112 = paper5.path("M1301.6,112.99h18.8").attr({ id: '_011-2', class: 'cls-4', parent: 'rstair', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var stb2 = paper5.path("M1290.97,156.686L1301,112").attr({ id: 'stb-2', class: 'cls-4', parent: 'rstair', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
rstair.attr({ 'id': 'rstair', 'name': 'rstair' });


var path_a = paper5.path("M225,159");
path_a.attr({ class: 'cls-3', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var path_b = paper5.path("M321.9,157.239V109.723H226.093v48.914");
path_b.attr({ class: 'cls-3', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var path_c = paper5.path("M249.98,142h72.04");
path_c.attr({ class: 'cls-3', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _1 = paper5.path("M297.043,143V109");
_1.attr({ class: 'cls-4', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _2 = paper5.path("M292.043,143V109");
_2.attr({ class: 'cls-4', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _3 = paper5.path("M287.043,143V109");
_3.attr({ class: 'cls-4', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _4 = paper5.path("M282.043,143V109");
_4.attr({ class: 'cls-4', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _5 = paper5.path("M277.043,143V109");
_5.attr({ class: 'cls-4', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _6 = paper5.path("M272.043,143V109");
_6.attr({ class: 'cls-4', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _7 = paper5.path("M267.043,143V109");
_7.attr({ class: 'cls-4', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _8 = paper5.path("M262.043,143V109");
_8.attr({ class: 'cls-4', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _9 = paper5.path("M257.043,143V109");
_9.attr({ class: 'cls-4', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _10 = paper5.path("M252.043,143V109");
_10.attr({ class: 'cls-4', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var path_d = paper5.path("M2304,161");
path_d.attr({ class: 'cls-3', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var path_e = paper5.path("M2207.1,157.239V109.723h95.81v48.914");
path_e.attr({ class: 'cls-3', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var path_f = paper5.path("M2280.02,147h-72.04");
path_f.attr({ class: 'cls-3', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _12 = paper5.path("M2231.96,145V111");
_12.attr({ id: '_1-2', class: 'cls-4', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _22 = paper5.path("M2236.96,145V111");
_22.attr({ id: '_2-2', class: 'cls-4', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _32 = paper5.path("M2241.96,145V111");
_32.attr({ id: '_3-2', class: 'cls-4', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _42 = paper5.path("M2246.96,145V111");
_42.attr({ id: '_4-2', class: 'cls-4', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _52 = paper5.path("M2251.96,145V111");
_52.attr({ id: '_5-2', class: 'cls-4', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _62 = paper5.path("M2256.96,145V111");
_62.attr({ id: '_6-2', class: 'cls-4', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _72 = paper5.path("M2261.96,145V111");
_72.attr({ id: '_7-2', class: 'cls-4', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _82 = paper5.path("M2266.96,145V111");
_82.attr({ id: '_8-2', class: 'cls-4', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _92 = paper5.path("M2271.96,145V111");
_92.attr({ id: '_9-2', class: 'cls-4', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();
var _102 = paper5.path("M2276.96,145V111");
_102.attr({ id: '_10-2', class: 'cls-4', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data();

// var rt_stair = paper5.rect(2226, 130, 96, 39);
// rt_stair.attr({id: 'rt_stair',class: 'cls-4',x: '2206',y: '108','stroke-width': stroke_width, 'stroke':inner_border_color, 'stroke':inner_border_color,'stroke-opacity': '1',}).data('id', 'rt_stair');


//Lifts
var lt_lift = paper5.rect(226, 157, 50, 36);
lt_lift.attr({ id: 'lt_lift', class: 'cls-5', x: '226', y: '157', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data('id', 'lt_lift');

var rt_lift = paper5.rect(2253, 157, 50, 36);
rt_lift.attr({ id: 'rt_lift', "data-name": 'rt_lift', class: 'cls-5', x: '2253', y: '157', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', }).data('id', 'rt_lift');


var rr_lift = paper5.path("M1771,45h58l-11,81h-59Z");
rr_lift.attr({ id: 'rr_lift', "data-name": 'rr_lift copy', class: 'cls-4', 'stroke-width': '0', 'stroke-opacity': '1' }).data('id', 'rr_lift');
var rl_lift = paper5.path("M1906,45h55l14,81h-58Z");
rl_lift.attr({ id: 'rl_lift', "data-name": 'rl_lift copy', class: 'cls-4', 'stroke-width': '0', 'stroke-opacity': '1' }).data('id', 'rl_lift');

var lr_lift = paper5.path("M583,45h58l-11,81H570Z");
lr_lift.attr({ id: 'lr_lift', class: 'cls-4', 'stroke-width': '0', 'stroke-opacity': '1' }).data('id', 'lr_lift');
var ll_lift = paper5.path("M717,45h55l14,81H728Z");
ll_lift.attr({ id: 'll_lift', class: 'cls-4', 'stroke-width': '0', 'stroke-opacity': '1' }).data('id', 'll_lift');

var iu7 = paper5.rect(34, 140, 853, 350);
iu7.attr({ id: 'iu7', class: 'cls-2', x: '34', y: '140', rx: '10', ry: '10', 'stroke-width': 2.6, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill, 'stroke-dasharray': '-', 'stroke-linecap': 'round' }).data('id', 'iu7');
var e6 = paper5.rect(1976, 140, 507, 350);
e6.attr({ id: 'e6', class: 'cls-2', x: '1976', y: '140', rx: '10', ry: '10', 'stroke-width': 2.6, 'stroke': inner_border_color, 'stroke-opacity': '1', 'fill': fill, 'stroke-dasharray': '-', 'stroke-linecap': 'round' }).data('id', 'e6');


var lifts = [
	rr_lift,
	rl_lift,
	lr_lift,
	ll_lift,
	lt_lift,
	rt_lift,
];

var stairs = [
	rr_stair,
	rl_stair,
	ml_stair,
	mr_stair,
	ll_stair,
	lr_stair,
	rt_stair,
	lt_stair
]


var paper5Groups = [door, r_stair, l_stair, r_stair2, l_stair2, door_copy, lstair, rstair];

var labels5 = [`${chair_txt} "ИУ7"`, `${chair_txt} "Э6"`, '501', '502', '503', '504', '506', '506a', '507', '508', '510', '510a', '511',
	'513', '515', '517', '518', '519', '520', '521', '522', '523', '524', '525', '527', '529',
	'530', '531', '532', '533', '534', '535', '536', '537', '539', '539a', '542', '542a', '544', '546', '546a', '547', '548', '549', '550', '551', female, male];
// chairs5
var rooms5 = [];

rooms5.push(iu7);
rooms5.push(e6);
rooms5.push(_501);
rooms5.push(_502);
rooms5.push(_503);
rooms5.push(_504);
rooms5.push(_506);
rooms5.push(_506a);
rooms5.push(_507);
rooms5.push(_508);
rooms5.push(_510);
rooms5.push(_510a);
rooms5.push(_511);
rooms5.push(_513);
rooms5.push(_515);
rooms5.push(_517);
rooms5.push(_518);
rooms5.push(_519);
rooms5.push(_520);
rooms5.push(_521);
rooms5.push(_522);
rooms5.push(_523);
rooms5.push(_524);
rooms5.push(_525);
rooms5.push(_527);
rooms5.push(_529);

rooms5.push(_530);
rooms5.push(_531);
rooms5.push(_532);
rooms5.push(_533);
rooms5.push(_534);

rooms5.push(_535);
rooms5.push(_536);
rooms5.push(_537);
rooms5.push(_539);
rooms5.push(_539a);
rooms5.push(_542);
rooms5.push(_542a);

rooms5.push(_544);
rooms5.push(_546);
rooms5.push(_546a);
rooms5.push(_547);
rooms5.push(_548);
rooms5.push(_549);
rooms5.push(_550);
rooms5.push(_551);
rooms5.push(toilet5W);
rooms5.push(toilet5M);



var trapezoids5 = ['501', '502', '550', '551'];
var chairs5 = ['iu7', 'e6'];
var chair_font_size = 30;


function setEventAndEverything(paper, rooms, chairs, trapezoids, labels, room_font_size = 20) {
	var selected_chair;
	for (var i = 0; i < rooms.length; i++) {
		rooms[i].node.id = String(rooms[i].data('id'));
		var box = rooms[i].getBBox();
		x = parseFloat(box.x);
		y = parseFloat(box.y);
		width = parseFloat(box.width);
		height = parseFloat(box.height);
		cen_x = x + width / 2;
		cen_y = y + height / 2;

		if (rooms[i].attr('width') == 0) {
			rooms[i].attr('x', x);
			rooms[i].attr('y', y);
			rooms[i].attr('width', width);
			rooms[i].attr('height', height);
		}

		// Change Yorkshire's fill colour to gold
		if (!isChair(rooms[i].node.id, chairs)) {
			if (height / width > 1.2) {
				var txt = paper.text(cen_x, cen_y, labels[i]).attr({ 'fill': text_color, 'font-size': room_font_size, 'font-weight': 'bold', "transform": "r270" });
			} else {
				var txt = paper.text(cen_x, cen_y, labels[i]).attr({ 'fill': text_color, 'font-size': room_font_size, 'font-weight': 'bold' });
			}
			// txt.toFront();

		} else {
			var txt = paper.text(cen_x, y + height - 30, labels[i]).attr({ 'fill': gray, 'font-size': chair_font_size });
			rooms[i].click(function (e) { 		
						// selected_chair
				if(selected_chair!=undefined)
					deselect_chair(selected_chair.node)
				select_chair(this.node)
				$("#info").css({"display":"block"})
				$("#header").html(this.data("id"))
				selected_chair = this;
			}); 
		}

		rooms[i].mouseover(function (e) {
			// document.getElementById('region-name').innerHTML = this.data('label');
			if (isChair(this.data('id'), chairs)) {
				if(this != selected_chair){
					select_chair(this.node)
				}
			}else{
				select_block(this.node)
			}
		});

		rooms[i].mouseout(function (e) {
			if (isChair(this.data('id'), chairs)) {
				if(this != selected_chair){
					deselect_chair(this.node)
				}
			}
			else {
				deselect_room(this.node)
			}

		});
	}
}
//for the chair and the rooms except for the event onclick
function select_block(node){
	node.setAttribute('fill-opacity', 0.4);
	node.setAttribute('fill', hover_color);
}

function select_chair(node){
	node.setAttribute('stroke', selected_color);
	node.setAttribute('stroke-width', 10);
}

function deselect_chair(node){
	node.setAttribute('fill', fill);
	node.setAttribute('fill-opacity', 0);
	node.setAttribute('stroke', inner_border_color);
	node.setAttribute('stroke-width', stroke_width);
}

function deselect_room(node){
	node.setAttribute('fill', fill_room);
	node.setAttribute('fill-opacity', 1);
	node.style.opacity = 1;
}

function isChair(id, a) {
	// console.log(a)
	return $.inArray(id, a) != -1
}

function putIcon(x, y, icon) {
	$(`#${canvas_id}`).parent().append(`<i style="position:absolute;left:${x}px;top:${y}px;font-size:35px;color:${gray}" class="fas ${icon}"></i>`);
}

function get_center_x(node) {
	var parent_x = $(`#${canvas_id}`).parent().position().left
	return parseFloat(node.getBBox().x) + parseFloat(node.getBBox().width) / 2 + parent_x - 10;
}

function get_center_y(node) {
	var parent_y = $(`#${canvas_id}`).parent().position().top
	return parseFloat(node.getBBox().y) + parseFloat(node.getBBox().height) / 2 + parent_y - 15;
}
function setEvent(stairs) {
	$.each(stairs, (i, s) => {
		s.node.id = String(s.data('id'));
		var box = s.getBBox();
		x = parseFloat(box.x);
		y = parseFloat(box.y);
		width = parseFloat(box.width);
		height = parseFloat(box.height);
		s.attr('x', x);
		s.attr('y', y);
		s.attr('width', width);
		s.attr('height', height);
	})
}

setEventAndEverything(paper5, rooms5, chairs5, trapezoids5, labels5, room_font_size);
setEvent(stairs);
setEvent(lifts);