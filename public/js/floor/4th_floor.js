var paper4 = Raphael('map4');
paper4.setViewBox(0, 0, '2600', '560', true);
paper4.setSize('98%', '98%');
var border = paper4.path("M24.577,446.284V235.8H60.189V134.069H218.537V235.8H453.128L487.144,62.253H739.328l34.016,172.375h490.3l-12.9-66.523h141.92l-16.42,67.7h469.18L1878.27,61.08h258.05L2170.33,235.8H2388.5V134.069h150.14V234.628H2575V446.284H24.577Z");
border.attr({ id: 'border', class: 'cls-1', 'stroke-width': 30, 'stroke': outer_border_color, 'stroke-opacity': '1' }).data('id', 'border');

var wall2 = paper4.path("M2030.75,258.062h45.75");
wall2.attr({ id: 'wall2', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data('id', 'wall2');
var wall = paper4.path("M545.791,258.062h50.437");
wall.attr({ id: 'wall', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data('id', 'wall');


var lt_lift = paper4.rect(80.813, 211.125, 58.656, 42.25);
lt_lift.attr({ id: 'lt_lift', class: 'cls-2', x: '80.813', y: '211.125', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data('id', 'lt_lift');
var rt_lift = paper4.rect(2462.41, 208.812, 58.65, 42.219);
rt_lift.attr({ id: 'rt_lift', "data-name": 'lt_lift copy', class: 'cls-2', x: '2462.41', y: '208.812', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data('id', 'rt_lift');

var toilet4W = paper4.rect(378.031, 253.375, 93.875, 56.313);
toilet4W.attr({ id: 'toilet4W', class: 'cls-2', x: '378.031', y: '253.375', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', 'toilet4W');
var _404 = paper4.rect(198.594, 253.375, 82.125, 56.313);
_404.attr({ id: '_404', "data-name": '404', class: 'cls-2', x: '198.594', y: '253.375', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '404');
var _401 = paper4.path("M40.248,349.556H179.83v79.763H40.248V349.556Z");
_401.attr({ id: '_401', "data-name": '401', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '401');
var _406 = paper4.rect(283.062, 253.375, 93.813, 56.313);
_406.attr({ id: '_406', "data-name": '406', class: 'cls-2', x: '283.062', y: '253.375', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '406');
var _402 = paper4.path("M85.407,251.024H40.248v97.359h103.22V282.7H85.407V251.024Z");
_402.attr({ id: '_402', "data-name": '402', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '402');
var _403 = paper4.rect(181, 349.562, 190.031, 79.782);
_403.attr({ id: '_403', "data-name": '403', class: 'cls-2', x: '181', y: '349.562', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '403');
var _405 = paper4.rect(372.188, 349.562, 97.374, 79.782);
_405.attr({ id: '_405', "data-name": '405', class: 'cls-2', x: '372.188', y: '349.562', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '405');
var _407 = paper4.rect(470.719, 349.562, 97.343, 79.782);
_407.attr({ id: '_407', "data-name": '407', class: 'cls-2', x: '470.719', y: '349.562', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '407');
var _409 = paper4.rect(569.25, 349.562, 184.156, 79.782);
_409.attr({ id: '_409', "data-name": '409', class: 'cls-2', x: '569.25', y: '349.562', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '409');
var toilet4M = paper4.rect(755.75, 253.375, 93.844, 56.313);
toilet4M.attr({ id: 'toilet4M', class: 'cls-2', x: '755.75', y: '253.375', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', 'toilet4M');
var _413 = paper4.rect(754.562, 349.562, 45.782, 79.782);
_413.attr({ id: '_413', "data-name": '413', class: 'cls-2', x: '754.562', y: '349.562', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '413');
var _415 = paper4.rect(801.5, 349.562, 45.75, 79.782);
_415.attr({ id: '_415', "data-name": '415', class: 'cls-2', x: '801.5', y: '349.562', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '415');
var _417 = paper4.rect(848.406, 356.594, 93.844, 72.75);
_417.attr({ id: '_417', "data-name": '417', class: 'cls-2', x: '848.406', y: '356.594', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '417');
var _418 = paper4.rect(850.75, 253.375, 93.844, 56.313);
_418.attr({ id: '_418', "data-name": '418', class: 'cls-2', x: '850.75', y: '253.375', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '418');
var _419 = paper4.rect(943.438, 356.594, 93.812, 72.75);
_419.attr({ id: '_419', "data-name": '419', class: 'cls-2', x: '943.438', y: '356.594', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '419');
var _420 = paper4.rect(945.75, 253.375, 93.84, 56.313);
_420.attr({ id: '_420', "data-name": '420', class: 'cls-2', x: '945.75', y: '253.375', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '420');
var _421 = paper4.rect(1038.44, 356.594, 193.53, 72.75);
_421.attr({ id: '_421', "data-name": '421', class: 'cls-2', x: '1038.44', y: '356.594', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '421');
var _422 = paper4.rect(1040.78, 253.375, 93.84, 56.313);
_422.attr({ id: '_422', "data-name": '422', class: 'cls-2', x: '1040.78', y: '253.375', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '422');
var _424 = paper4.rect(1135.78, 253.375, 93.84, 56.313);
_424.attr({ id: '_424', "data-name": '424', class: 'cls-2', x: '1135.78', y: '253.375', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '424');
var _425 = paper4.rect(1234.31, 356.594, 45.75, 72.75);
_425.attr({ id: '_425', "data-name": '425', class: 'cls-2', x: '1234.31', y: '356.594', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '425');
var _425a = paper4.rect(1282.41, 356.594, 45.71, 72.75);
_425a.attr({ id: '_425a', "data-name": '425a', class: 'cls-2', x: '1282.41', y: '356.594', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '425a');
var _427 = paper4.rect(1330.5, 356.594, 82.09, 72.75);
_427.attr({ id: '_427', "data-name": '427', class: 'cls-2', x: '1330.5', y: '356.594', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '427');
var _429 = paper4.rect(1413.78, 356.594, 90.31, 72.75);
_429.attr({ id: '_429', "data-name": '429', class: 'cls-2', x: '1413.78', y: '356.594', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '429');
var _430 = paper4.rect(1414.97, 253.375, 90.28, 56.313);
_430.attr({ id: '_430', "data-name": '430', class: 'cls-2', x: '1414.97', y: '253.375', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '430');
var _431 = paper4.rect(1505.25, 356.594, 90.34, 72.75);
_431.attr({ id: '_431', "data-name": '431', class: 'cls-2', x: '1505.25', y: '356.594', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '431');
var _432 = paper4.rect(1506.44, 253.375, 90.31, 56.313);
_432.attr({ id: '_432', "data-name": '432', class: 'cls-2', x: '1506.44', y: '253.375', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '432');
var _433 = paper4.rect(1596.75, 356.594, 90.31, 72.75);
_433.attr({ id: '_433', "data-name": '433', class: 'cls-2', x: '1596.75', y: '356.594', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '433');
var _434 = paper4.rect(1597.94, 253.375, 90.31, 56.313);
_434.attr({ id: '_434', "data-name": '434', class: 'cls-2', x: '1597.94', y: '253.375', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '434');
var _435 = paper4.rect(1688.25, 356.594, 90.31, 72.75);
_435.attr({ id: '_435', "data-name": '435', class: 'cls-2', x: '1688.25', y: '356.594', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '435');
var _436 = paper4.rect(1689.44, 253.375, 90.31, 56.313);
_436.attr({ id: '_436', "data-name": '436', class: 'cls-2', x: '1689.44', y: '253.375', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '436');
var _437 = paper4.rect(1780.91, 356.594, 84.43, 72.75);
_437.attr({ id: '_437', "data-name": '437', class: 'cls-2', x: '1780.91', y: '356.594', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '437');
var _439 = paper4.rect(1866.56, 356.594, 187.66, 72.75);
_439.attr({ id: '_439', "data-name": '439', class: 'cls-2', x: '1866.56', y: '356.594', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '439');
var _441 = paper4.rect(2055.38, 356.594, 93.84, 72.75);
_441.attr({ id: '_441', "data-name": '441', class: 'cls-2', x: '2055.38', y: '356.594', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '441');
var _443 = paper4.rect(2150.38, 356.594, 93.87, 72.75);
_443.attr({ id: '_443', "data-name": '443', class: 'cls-2', x: '2150.38', y: '356.594', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '443');
var none = paper4.rect(2151.56, 253.375, 92.69, 56.313);
none.attr({ id: 'none', class: 'cls-2', x: '2151.56', y: '253.375', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', 'none');
var _442 = paper4.rect(2246.56, 253.375, 156, 56.313);
_442.attr({ id: '_442', "data-name": '442', class: 'cls-2', x: '2246.56', y: '253.375', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '442');
var _445 = paper4.rect(2246.56, 356.594, 156, 72.75);
_445.attr({ id: '_445', "data-name": '445', class: 'cls-2', x: '2246.56', y: '356.594', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '445');
var _447 = paper4.path("M2523.39,249.6h24.63V428.133h-143.1V357.46h39.88V280.349h78.59V249.6Z");
_447.attr({ id: '_447', "data-name": '447', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', '447');
var toilet4M2 = paper4.rect(1780.91, 253.375, 84.43, 56.313);
toilet4M2.attr({ id: 'toilet4M-2', "data-name": 'toilet4M', class: 'cls-2', x: '1780.91', y: '253.375', 'stroke-width': stroke_width, 'stroke': room_border_color, 'stroke-opacity': '1', 'fill': fill_room }).data('id', 'toilet4M2');

var rt_stair = paper4.rect(2406.09, 153.656, 112.6, 45.75);
rt_stair.attr({ id: 'rt_stair', class: 'cls-2', x: '2406.09', y: '153.656', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data('id', 'rt_stair');
var lt_stair = paper4.rect(78.938, 151.312, 119.656, 45.75);
lt_stair.attr({ id: 'lt_stair', class: 'cls-2', x: '78.938', y: '151.312', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data('id', 'lt_stair');
var ll_lift = paper4.path("M487.144,174.78l16.421-96.185h69.2L558.694,174.78h-71.55Z");
ll_lift.attr({ id: 'll_lift', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data('id', 'll_lift');
var ll_stair = paper4.path("M487.144,174.78h71.55l-12.9,85.628H470.722Z");
ll_stair.attr({ id: 'll_stair', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data('id', 'll_stair');
var lr_lift = paper4.path("M740.5,174.78L724.08,78.595h-69.2l14.075,96.185H740.5Z");
lr_lift.attr({ id: 'lr_lift', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data('id', 'lr_lift');
var lr_stair = paper4.path("M740.5,174.78h-71.55l12.9,85.628h75.069Z");
lr_stair.attr({ id: 'lr_stair', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data('id', 'lr_stair');
var rl_lift = paper4.path("M1881.78,174.78l16.43-96.185h69.2l-14.08,96.185h-71.55Z");
rl_lift.attr({ id: 'rl_lift', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data('id', 'rl_lift');
var rl_stair = paper4.path("M1881.78,174.78h70.38l-11.73,85.628h-75.07Z");
rl_stair.attr({ id: 'rl_stair', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data('id', 'rl_stair');
var rr_lift = paper4.path("M2135.14,174.78l-16.42-96.185h-69.2l14.07,96.185h71.55Z");
rr_lift.attr({ id: 'rr_lift', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data('id', 'rr_lift');
var rr_stair = paper4.path("M2135.14,174.78h-70.37l11.73,85.628h75.06Z");
rr_stair.attr({ id: 'rr_stair', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data('id', 'rr_stair');
var ml_stair = paper4.path("M1275.37,186.51h25.8l12.91,52.784H1287.1Z");
ml_stair.attr({ id: 'ml_stair', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data('id', 'ml_stair');
var mr_stair = paper4.path("M1370.38,186.51h-25.81l-12.9,52.784h26.98Z");
mr_stair.attr({ id: 'mr_stair', class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data('id', 'mr_stair');

var path_b = paper4.path("M1234.31,276.83h25.81");
path_b.attr({ class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var path_c = paper4.path("M1269.5,276.83h110.26");
path_c.attr({ class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var path_d = paper4.path("M1390.32,276.83h24.63");
path_d.attr({ class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var path_e = paper4.path("M1228.45,255.716h60.99l-12.9-69.206h92.66l-15.24,69.206h62.16");
path_e.attr({ class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var path_f = paper4.path("M1294.14,255.716");
path_f.attr({ class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var path_g = paper4.path("M1938.09,258.062h52.78");
path_g.attr({ class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var ml_stairs = paper4.set();
var _07 = paper4.path("M1280.06,199.413h22.29").attr({   class: 'cls-1', parent: 'ml_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _17 = paper4.path("M1282.41,205.278h22.28").attr({   class: 'cls-1', parent: 'ml_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _27 = paper4.path("M1282.41,211.143h22.28").attr({   class: 'cls-1', parent: 'ml_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _37 = paper4.path("M1284.75,217.008h22.29").attr({   class: 'cls-1', parent: 'ml_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _47 = paper4.path("M1287.1,222.873h22.28").attr({   class: 'cls-1', parent: 'ml_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
ml_stairs.attr({ 'id': 'ml_stairs', 'name': 'ml_stairs' });
var mr_stairs = paper4.set();
var _08 = paper4.path("M1365.69,201.759H1343.4").attr({   class: 'cls-1', parent: 'mr_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data('id', '_08');
var _18 = paper4.path("M1363.34,207.624h-22.29").attr({   class: 'cls-1', parent: 'mr_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data('id', '_18');
var _28 = paper4.path("M1362.17,213.489h-22.29").attr({   class: 'cls-1', parent: 'mr_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data('id', '_28');
var _38 = paper4.path("M1360.99,219.354h-22.28").attr({   class: 'cls-1', parent: 'mr_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data('id', '_38');
var _48 = paper4.path("M1358.65,225.219h-22.29").attr({   class: 'cls-1', parent: 'mr_stairs', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data('id', '48');
mr_stairs.attr({ 'id': 'mr_stairs', 'name': 'mr_stairs' });

var _0 = paper4.path("M115.317,152.493v42.228");
_0.attr({  class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _1 = paper4.path("M121.182,152.493v42.228");
_1.attr({  class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _2 = paper4.path("M127.047,152.493v42.228");
_2.attr({  class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _3 = paper4.path("M132.912,152.493v42.228");
_3.attr({  class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _4 = paper4.path("M138.777,152.493v42.228");
_4.attr({  class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _5 = paper4.path("M144.641,152.493v42.228");
_5.attr({  class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _6 = paper4.path("M150.506,152.493v42.228");
_6.attr({  class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _7 = paper4.path("M156.371,152.493v42.228");
_7.attr({  class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _8 = paper4.path("M162.235,152.493v42.228");
_8.attr({  class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _9 = paper4.path("M168.1,152.493v42.228");
_9.attr({  class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _02 = paper4.path("M2443.63,156.012V198.24");
_02.attr({   class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _12 = paper4.path("M2449.49,156.012V198.24");
_12.attr({   class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _22 = paper4.path("M2455.36,156.012V198.24");
_22.attr({   class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _32 = paper4.path("M2461.22,156.012V198.24");
_32.attr({   class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _42 = paper4.path("M2467.09,156.012V198.24");
_42.attr({   class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _52 = paper4.path("M2472.95,156.012V198.24");
_52.attr({   class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _62 = paper4.path("M2478.82,156.012V198.24");
_62.attr({   class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _72 = paper4.path("M2484.68,156.012V198.24");
_72.attr({   class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _82 = paper4.path("M2490.55,156.012V198.24");
_82.attr({   class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _92 = paper4.path("M2496.41,156.012V198.24");
_92.attr({   class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _03 = paper4.path("M484.8,200.586h68.031");
_03.attr({   class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _13 = paper4.path("M483.625,206.451h68.031");
_13.attr({   class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _23 = paper4.path("M482.452,212.316h68.031");
_23.attr({   class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _33 = paper4.path("M481.279,218.181H549.31");
_33.attr({   class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _43 = paper4.path("M480.106,224.046h68.031");
_43.attr({   class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _53 = paper4.path("M478.933,229.911h68.031");
_53.attr({   class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _63 = paper4.path("M477.76,235.776h68.031");
_63.attr({   class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _73 = paper4.path("M476.587,241.64h68.031");
_73.attr({   class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _04 = paper4.path("M742.847,202.932H674.816");
_04.attr({   class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _14 = paper4.path("M744.02,208.8H675.989");
_14.attr({   class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _24 = paper4.path("M745.193,214.662H677.162");
_24.attr({   class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _34 = paper4.path("M746.366,220.527H678.335");
_34.attr({   class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _44 = paper4.path("M747.539,226.392H679.508");
_44.attr({   class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _54 = paper4.path("M748.712,232.257H680.681");
_54.attr({   class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _64 = paper4.path("M749.885,238.121H681.854");
_64.attr({   class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _74 = paper4.path("M751.058,243.986H683.027");
_74.attr({   class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _05 = paper4.path("M1879.44,202.932h68.03");
_05.attr({   class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _15 = paper4.path("M1878.27,208.8h68.03");
_15.attr({   class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _25 = paper4.path("M1877.09,214.662h68.03");
_25.attr({   class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _35 = paper4.path("M1875.92,220.527h68.03");
_35.attr({   class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _45 = paper4.path("M1874.75,226.392h68.03");
_45.attr({   class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _55 = paper4.path("M1873.57,232.257h68.04");
_55.attr({   class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _65 = paper4.path("M1872.4,238.121h68.03");
_65.attr({   class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _75 = paper4.path("M1871.23,243.986h68.03");
_75.attr({   class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _06 = paper4.path("M2137.49,204.105h-68.03");
_06.attr({   class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _16 = paper4.path("M2138.66,209.97h-68.03");
_16.attr({   class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _26 = paper4.path("M2139.83,215.835H2071.8");
_26.attr({   class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _36 = paper4.path("M2141.01,221.7h-68.03");
_36.attr({   class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _46 = paper4.path("M2142.18,227.565h-68.03");
_46.attr({   class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _56 = paper4.path("M2143.35,233.43h-68.03");
_56.attr({   class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _66 = paper4.path("M2144.53,239.3H2076.5");
_66.attr({   class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var _76 = paper4.path("M2145.7,245.159h-68.03");
_76.attr({   class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();
var path_a = paper4.path("M634.936,258.062h48.091");
path_a.attr({ class: 'cls-1', 'stroke-width': stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1' }).data();



var lang = paper4.rect(33.813, 243.562, 1746.747, 294.438);
lang.attr({ id: 'lang', class: 'cls-3', x: '33.813', y: '243.562', 'stroke-width': chair_stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'stroke-dasharray': '-', 'stroke-linecap': 'round' }).data('id', 'lang');
var e6 = paper4.rect(1864.94, 243.562, 688.5, 294.438);
e6.attr({ id: 'e6_4', class: 'cls-3', x: '1864.94', y: '243.562', 'stroke-width': chair_stroke_width, 'stroke': inner_border_color, 'stroke-opacity': '1', 'stroke-dasharray': '-', 'stroke-linecap': 'round' }).data('id', 'e6_4');


var rooms4 = [
    _401, _402,_403, _404, _405, _406, _407, _409, 
    _413, _415, _417, _418, _419, 
    _420, _421, _422,  _424, _425, _425a, _427, _429, 
    _430, _431, _432, _433, _434, _435, _436, _437, _439, 
    _441, _443, _445, _447, lang, e6, toilet4M, toilet4M2, toilet4W
]
var labels4 = [
    '401', '402', '403', '404', '405', '406', '407',  '409',
    '413', '415','417', '418', '419',
    '420','421', '422', '424', '425', '425a', '427', '429', 
    '430', '431', '432', '433', '434', '435', '436', '437', '439', 
    '441', '443', '445', '447', `${faculty_txt} лингвистики`, 'Э6', male, male, female
]
var stairs = [rt_stair, ll_stair, lr_stair, lt_stair, ml_stair, mr_stair, rl_stair, rr_stair]
var lifts = [ll_lift, lr_lift, lt_lift, rl_lift, rr_lift, rt_lift]
var chairs4 = ['lang', 'e6_4']
setEventAndEverything(paper4, rooms4, chairs4, [], labels4, room_font_size)
setEvent(stairs);
setEvent(lifts);