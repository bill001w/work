const catData = [
  {
    'catid': '1',
    'catname': '新闻',
    'parentid': '0',
    'arrchildid': '2,3,4,5',
    'allchildrens': '2,3,4,5',
    'ismenu': '1',
    'image': '',
    'items': '14',
    'pagesize': '20',
    'listorder': '1',
    'meta_title': '',
    'meta_keywords': '',
    'meta_description': '',
    'categorytpl': 'category_news.html',
    'listtpl': 'list_news.html',
    'showtpl': 'show_news.html',
    'setting': {
      'memberpost': '0',
    },
    'prefix': '|-新闻',
  },
  {
    'catid': '2',
    'catname': '国内',
    'parentid': '1',
    'arrchildid': '',
    'allchildrens': '',
    'ismenu': '1',
    'image': '',
    'items': '6',
    'pagesize': '20',
    'listorder': '0',
    'meta_title': '',
    'meta_keywords': '',
    'meta_description': '',
    'categorytpl': 'category_news.html',
    'listtpl': 'list_news.html',
    'showtpl': 'show_news.html',
    'setting': {
      'memberpost': '0',
    },
    'prefix': '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-国内',
  },
  {
    'catid': '3',
    'catname': '国际',
    'parentid': '1',
    'arrchildid': '',
    'allchildrens': '',
    'ismenu': '1',
    'image': '',
    'items': '4',
    'pagesize': '20',
    'listorder': '0',
    'meta_title': '',
    'meta_keywords': '',
    'meta_description': '',
    'categorytpl': 'category_news.html',
    'listtpl': 'list_news.html',
    'showtpl': 'show_news.html',
    'setting': {
      'memberpost': '0',
    },
    'prefix': '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-国际',
  },
  {
    'catid': '4',
    'catname': '军事',
    'parentid': '1',
    'arrchildid': '',
    'allchildrens': '',
    'ismenu': '1',
    'image': '',
    'items': '2',
    'pagesize': '20',
    'listorder': '0',
    'meta_title': '',
    'meta_keywords': '',
    'meta_description': '',
    'categorytpl': 'category_news.html',
    'listtpl': 'list_news.html',
    'showtpl': 'show_news.html',
    'setting': {
      'memberpost': '0',
    },
    'prefix': '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-军事',
  },
  {
    'catid': '5',
    'catname': '娱乐',
    'parentid': '1',
    'arrchildid': '',
    'allchildrens': '',
    'ismenu': '1',
    'image': '',
    'items': '2',
    'pagesize': '20',
    'listorder': '0',
    'meta_title': '',
    'meta_keywords': '',
    'meta_description': '',
    'categorytpl': 'category_news.html',
    'listtpl': 'list_news.html',
    'showtpl': 'show_news.html',
    'setting': {
      'memberpost': '0',
    },
    'prefix': '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-娱乐',
  },
  {
    'catid': '6',
    'catname': '图片',
    'parentid': '0',
    'arrchildid': '7,8,9',
    'allchildrens': '7,8,9',
    'ismenu': 1,
    'image': '',
    'items': '5',
    'pagesize': '20',
    'listorder': '2',
    'meta_title': '',
    'meta_keywords': '',
    'meta_description': '',
    'categorytpl': 'category_image.html',
    'listtpl': 'list_image.html',
    'showtpl': 'show_image.html',
    'setting': {
      'memberpost': '0',
    },
    'prefix': '|-图片',
  },
  {
    'catid': '7',
    'catname': '非主流',
    'parentid': '6',
    'arrchildid': '',
    'allchildrens': '',
    'ismenu': '1',
    'image': '',
    'items': '3',
    'pagesize': '20',
    'listorder': '2',
    'meta_title': '',
    'meta_keywords': '',
    'meta_description': '',
    'categorytpl': 'category_image.html',
    'listtpl': 'list_image.html',
    'showtpl': 'show_image.html',
    'setting': {
      'memberpost': '0',
    },
    'prefix': '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-非主流',
  },
  {
    'catid': '8',
    'catname': '汽车',
    'parentid': '6',
    'arrchildid': '',
    'allchildrens': '',
    'ismenu': '1',
    'image': '',
    'items': '0',
    'pagesize': '20',
    'listorder': '3',
    'meta_title': '',
    'meta_keywords': '',
    'meta_description': '',
    'categorytpl': 'category_image.html',
    'listtpl': 'list_image.html',
    'showtpl': 'show_image.html',
    'setting': {
      'memberpost': '0',
    },
    'prefix': '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-汽车',
  },
  {
    'catid': '9',
    'catname': '美女',
    'parentid': '6',
    'arrchildid': '',
    'allchildrens': '',
    'ismenu': '1',
    'image': '',
    'items': '2',
    'pagesize': '20',
    'listorder': '1',
    'meta_title': '',
    'meta_keywords': '',
    'meta_description': '',
    'categorytpl': 'category_image.html',
    'listtpl': 'list_image.html',
    'showtpl': 'show_image.html',
    'setting': {
      'memberpost': '0',
    },
    'prefix': '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-美女',
  },
  {
    'catid': '10',
    'catname': '关于',
    'parentid': '0',
    'arrchildid': '11,12,13',
    'allchildrens': '11,12,13',
    'ismenu': '1',
    'image': '',
    'items': '0',
    'pagesize': '20',
    'listorder': '4',
    'meta_title': '',
    'meta_keywords': '',
    'meta_description': '',
    'categorytpl': '',
    'listtpl': '',
    'showtpl': 'page.html',
    'setting': {
      'memberpost': '0',
    },
    'prefix': '|-关于',
  },
  {
    'catid': '11',
    'catname': '用户条款',
    'parentid': '10',
    'arrchildid': '',
    'allchildrens': '',
    'ismenu': '1',
    'image': '',
    'items': '0',
    'pagesize': '20',
    'listorder': '0',
    'meta_title': '',
    'meta_keywords': '',
    'meta_description': '',
    'categorytpl': '',
    'listtpl': '',
    'showtpl': 'page.html',
    'setting': {
      'memberpost': '0',
    },
    'prefix': '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-用户条款',
  },
  {
    'catid': '12',
    'catname': '联系我们',
    'parentid': '10',
    'arrchildid': '',
    'allchildrens': '',
    'ismenu': '1',
    'image': '',
    'items': '0',
    'pagesize': '20',
    'listorder': '0',
    'meta_title': '',
    'meta_keywords': '',
    'meta_description': '',
    'categorytpl': '',
    'listtpl': '',
    'showtpl': 'page.html',
    'setting': {
      'memberpost': '0',
    },
    'prefix': '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-联系我们',
  },
  {
    'catid': '13',
    'catname': '免责声明',
    'parentid': '10',
    'arrchildid': '',
    'allchildrens': '',
    'ismenu': '1',
    'image': '',
    'items': '0',
    'pagesize': '20',
    'listorder': '0',
    'meta_title': '',
    'meta_keywords': '',
    'meta_description': '',
    'categorytpl': '',
    'listtpl': '',
    'showtpl': 'page.html',
    'setting': {
      'memberpost': '0',
    },
    'prefix': '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-免责声明',
  },
  {
    'catid': '14',
    'catname': '房产',
    'parentid': '0',
    'arrchildid': '24',
    'allchildrens': '24',
    'ismenu': '1',
    'image': '',
    'items': '2',
    'pagesize': '20',
    'listorder': '3',
    'meta_title': '',
    'meta_keywords': '',
    'meta_description': '',
    'categorytpl': 'list_fang.html',
    'listtpl': 'list_fang.html',
    'showtpl': 'show_fang.html',
    'setting': {
      'memberpost': '0',
    },
    'prefix': '|-房产',
  },
  {
    'catid': '24',
    'catname': 'fdsafds',
    'parentid': '14',
    'arrchildid': '',
    'allchildrens': '',
    'ismenu': '1',
    'image': '',
    'items': '0',
    'pagesize': '20',
    'listorder': '0',
    'meta_title': '',
    'meta_keywords': '',
    'meta_description': '',
    'categorytpl': '',
    'listtpl': '',
    'showtpl': '',
    'setting': '',
    'prefix': '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|-fdsafds',
  },
  {
    'catid': '15',
    'catname': '下载',
    'parentid': '0',
    'arrchildid': '',
    'allchildrens': '',
    'ismenu': '1',
    'image': '',
    'items': '0',
    'pagesize': '20',
    'listorder': '4',
    'meta_title': '',
    'meta_keywords': '',
    'meta_description': '',
    'categorytpl': 'list_down.html',
    'listtpl': 'list_down.html',
    'showtpl': 'show_down.html',
    'setting': {
      'memberpost': '0',
    },
    'prefix': '|-下载',
  },
  {
    'catid': '17',
    'catname': '留言',
    'parentid': '0',
    'arrchildid': '',
    'allchildrens': '',
    'ismenu': '1',
    'image': '',
    'items': '0',
    'pagesize': '2',
    'listorder': '9',
    'meta_title': '',
    'meta_keywords': '',
    'meta_description': '',
    'categorytpl': '',
    'listtpl': '',
    'showtpl': 'post_form.html',
    'setting': {
      'document': '',
      'verifypost': '0',
      'adminpost': '0',
      'memberpost': '0',
      'guestpost': '',
      'url': {
        'use': '0',
        'tohtml': '0',
        'htmldir': 'html',
        'list': '',
        'list_page': '',
        'show': '',
        'show_page': '',
      }
    },
    'prefix': '|-留言',
  },
];

export default catData.filter(() => {
  return Math.random() < 0.5 ? true : false;
});