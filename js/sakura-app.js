const waveloop1 = () => {
  $('#banner_wave_1').css({
    'left': '-236px'
  }).animate({
    'left': '-1233px'
  }, 25000, 'linear', waveloop1)
}

const waveloop2 = () => {
  $('#banner_wave_2').css({
    'left': '0px'
  }).animate({
    'left': '-1009px'
  }, 60000, 'linear', waveloop2)
}

const headertop_down = () => {
  let coverOffset = $('#content').offset().top
  $('html,body').animate({
    scrollTop: coverOffset
  }, 600)
}

const changeBG = function () {
  const bg = POI.bg
  const getURL = (i) => {
    i = Math.abs(i % bg.length)
    return bg[i] + (i === 0 ? '' : '?time=' + bgindex)
  }

  let bgindex = 0
  $('#centerbg').css('background-image', `url("${getURL(bgindex)}")`)
  $('#bg-next').click(() => {
    bgindex += 1
    $('#centerbg').css('background-image', `url("${getURL(bgindex)}")`)
  })
  $('#bg-pre').click(() => {
    bgindex -= 1
    $('#centerbg').css('background-image', `url("${getURL(bgindex)}")`)
  })
}

const addBot = function () {
  const botui = new BotUI("hello-moelody")
  botui.message.add({
    delay: 800,
    content: "Hi, there👋"
  }).then(function () {
    botui.message.add({
      delay: 1100,
      content: "这里是 Moelody"
    }).then(function () {
      botui.message.add({
        delay: 1100,
        content: "一个可爱的蓝孩子~"
      }).then(function () {
        botui.action.button({
          delay: 1600,
          action: [{
            text: "然后呢？ 😃",
            value: "sure"
          }, {
            text: "少废话！ 🙄",
            value: "skip"
          }]
        }).then(function (a) {
          "sure" == a.value && sure();
          "skip" == a.value && end()
        })
      })
    })
  });
  const sure = function () {
      botui.message.add({
        delay: 600,
        content: "😘"
      }).then(function () {
        secondpart()
      })
    },
    end = function () {
      botui.message.add({
        delay: 600,
        content: "![...](https://view.moezx.cc/images/2018/05/06/a1c4cd0452528b572af37952489372b6.md.jpg)"
      })
    },
    secondpart = function () {
      botui.message.add({
        delay: 1500,
        content: "目前就生活在昆明，不久后会到曲靖就职"
      }).then(function () {
        botui.message.add({
          delay: 1500,
          content: "向往技术，自学程序"
        }).then(function () {
          botui.message.add({
            delay: 1500,
            content: "前端擅长多点，略懂 C，偶尔也折腾 Python/PHP/Lua/Go"
          }).then(function () {
            botui.message.add({
              delay: 1800,
              content: "喜欢看番和做视频，不过最近没什么时间"
            }).then(function () {
              botui.action.button({
                delay: 1100,
                action: [{
                  text: "为什么叫Moelody呢？ 🤔",
                  value: "why-moelody"
                }]
              }).then(function (a) {
                thirdpart()
              })
            })
          })
        })
      })
    },
    thirdpart = function () {
      botui.message.add({
        delay: 1E3,
        content: "Moelody以及站名都来自英文单词Melody即旋律，因为这个词大多被使用过，所以做了变形"
      }).then(function () {
        botui.action.button({
          delay: 1500,
          action: [{
            text: "为什么是黑猫呢？ 🤔",
            value: "why-cat"
          }]
        }).then(function (a) {
          fourthpart()
        })
      })
    },
    fourthpart = function () {
      botui.message.add({
        delay: 1E3,
        content: "因为GitHub是黑白猫 "
      }).then(function () {
        botui.message.add({
          delay: 1100,
          content: "而且我更喜欢黑色！"
        }).then(function () {
          botui.action.button({
            delay: 1500,
            action: [{
              text: "域名有什么含意吗？(ง •_•)ง",
              value: "why-domain"
            }]
          }).then(function (a) {
            fifthpart()
          })
        })
      })
    },
    fifthpart = function () {
      botui.message.add({
        delay: 1E3,
        content: "域名同名字一样，而且价格也一般"
      }).then(function () {
        botui.message.add({
          delay: 1600,
          content: "那么，仔细看看我的博客吧？ ^_^"
        })
      })
    }
}

const addPoem = function (poem_ele, info_ele) {
  let poem = document.querySelector(poem_ele)
  let info = document.querySelector(info_ele)
  const xhr = new XMLHttpRequest()
  xhr.open('get', 'https://v2.jinrishici.com/one.json')
  xhr.withCredentials = true
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      let data = JSON.parse(xhr.responseText)
      poem && (poem.innerHTML += data.data.content)
      // info && (info.innerHTML = '【' + data.data.origin.dynasty + '】' + data.data.origin.author + '《' + data.data.origin.title + '》')
      info && (info.innerHTML = '         —    ' + data.data.origin.author + '《' + data.data.origin.title + '》' + info.innerHTML)
    }
  }
  xhr.send()
}

const fitScreen = function () {
  const fitHeight = () => {
    let _height = $(window).height()
    $('#centerbg').css({
      'height': _height
    })
    $('#bgvideo').css({
      'min-height': _height
    })
    $('.headertop').css({
      'min-height': _height
    })
  }
  $(window).resize(function () {
    fitHeight()
  })
}

const handleLive = function () {
  const s = $('#bgvideo')[0]
  s.requestFullscreen = POI.movies.requestFullscreen
  const Siren = {
    splay: function () {
      $('#bgvideo').show()
      $('#video-add').hide()
      $('#video-back').hide()
      $('#video-btn').addClass('video-pause').removeClass('video-play').show()
      $('.video-stu').css({
        'z-index': -2
      }).html('')
      $('.focusinfo').css({
        'top': '-999px'
      })
      $('#banner_wave_1').addClass('banner_wave_hide')
      $('#banner_wave_2').addClass('banner_wave_hide')
      s.play()
    },
    spause: function () {
      $('#video-add').show()
      $('#video-back').show()
      $('#video-btn').addClass('video-play').removeClass('video-pause')
      $('.focusinfo').css({
        'top': '40%'
      })
      $('#banner_wave_1').removeClass('banner_wave_hide')
      $('#banner_wave_2').removeClass('banner_wave_hide')
      s.pause()
    },
    liveplay: function () {
      if (s.oncanplay != undefined && $('.haslive').length > 0) {
        if ($('.videolive').length > 0) {
          Siren.splay()
        }
      }
    },
    addsource: function () {
      $('.video-stu').html('').css({
        'bottom': '0px',
        'z-index': 6
      })
      var t = POI.movies.name.split(','),
        _t = t[Math.floor(Math.random() * t.length)]
      $('#bgvideo').attr('src', POI.movies.url + '/' + _t)
      $('#bgvideo').attr('video-name', _t)
    },
    LV: function () {
      var _btn = $('#video-btn')
      _btn.on('click', function () {
        if ($(this).hasClass('loadvideo')) {
          $(this).addClass('video-pause').removeClass('loadvideo').hide()
          Siren.addsource()
          s.oncanplay = function () {
            Siren.splay()
            _btn.addClass('videolive')
            _btn.addClass('haslive')
          }
        } else {
          if ($(this).hasClass('video-pause')) {
            Siren.spause()
            _btn.removeClass('videolive')
            $('.video-stu').css({
              'bottom': '0px',
              'z-index': 6
            }).html('已暂停 ...')
          } else {
            Siren.splay()
            _btn.addClass('videolive')
          }
        }
        s.onended = function () {
          $('#bgvideo').attr('src', '')
          $('#video-add').hide()
          $('#video-back').hide()
          _btn.addClass('loadvideo').removeClass('video-pause')
          _btn.removeClass('videolive')
          _btn.removeClass('haslive')
          $('.focusinfo').css({
            'top': '40%'
          })
        }
      })
      $('#video-add').on('click', function () {
        Siren.addsource()
      })
      $('#video-back').on('click', function () {
        Siren.spause()
        $('#video-btn').addClass('loadvideo videolive').removeClass('video-pause')
        $('#bgvideo').hide()
        $('#video-add').hide()
        $('#video-back').hide()
        $('.video-stu').css({
          'bottom': '0px',
          'z-index': -2
        }).html('')
      })
    }
  }
  Siren.LV()
  if (POI.movies.live == 'open') Siren.liveplay()
}

/**
 * refresh
 */
const refreshFn = function () {

  $(document).ready(changeBG)
  lazyload()
  if (screen && screen.width > 860) {
    waveloop1()
    waveloop2()
  }

  addBot()
  addPoem('#poem', '#info')
  fitScreen()
  handleLive()

}

$(function () {

  refreshFn()

  console.log('%c Moelody %c', 'background:#24272A; color:#ffffff', '', 'https://moelody.com/')
  console.log('%c Mannix %c', 'background:#24272A; color:#ffffff', '', 'https://www.moelody.com/')
  console.log('%c Github %c', 'background:#24272A; color:#ffffff', '', 'https://github.com/moelody/hexo-theme-sakura')
})