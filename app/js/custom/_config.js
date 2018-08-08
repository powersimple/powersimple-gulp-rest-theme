var posts = {}, 
  taxonomies = {},
  categories = {},
  tags = {},
  menus = {},
  media = {},
  linear_nav = [],
  posts_nav = {},
  posts_slug_ids = {},
  slug_nav = {},
  data_nav = [],
  last_dest = 'outer-nav',
  menu_levels = [],
  related = {},
  increment = 'vw',
  orientation = 'vertical', // this var is used by the slider
  _w = jQuery(window).width(),
  _h = jQuery(window).height(),
  aspect = _w / _h,
  current_notch = 0


  var menu_config = {
    'top-menu': {
        'menu_type': 'wheel',
        'location': '#outer-nav',
        '_p': {
            'maxPercent': 1,
            'min': 0.91,
            'max': 1,
            'sel_min': 0.91,
            'sel_max': 1,
        }
    },
    'social-links': {
        'menu_type': 'social',
        'location': '#social',
        '_p': {
            'maxPercent': 1,
            'min': 0.91,
            'max': 1,
            'sel_min': 0.91,
            'sel_max': 1,
        }
    },
    'projects': {
        'menu_type': 'projects',
        'location': '#projects',
        '_p': {
            'maxPercent': 1,
            'min': 0.91,
            'max': 1,
            'sel_min': 0.91,
            'sel_max': 1,
        }
    }
},
inner_nav_params = {
    'maxPercent': 1,
    'min': 0.91,
    'max': 1,
    'sel_min': 0.91,
    'sel_max': 1.0,
},
inner_subnav_params = {
    'maxPercent': 1,
    'min': 0.90,
    'max': 1,
    'sel_min': 0.90,
    'sel_max': 1.0,
},
last_outer_notch = 0,
last_inner_notch = 0


/**/
var menu_raphael = {}
var wheels = {}