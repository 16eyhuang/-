//index.js
const app = getApp()

Page({
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: '',
    toothGroup:['尖牙组','磨牙组','前磨牙组','切牙组'],
    isSelected:[true,false,false,false],
    test:[1,1,1,1],
    isLogin: false,

    // jianyazu:{
    //   summary: '尖牙位于侧切牙远中, 上、下、左、右共4颗, 包括上颌尖牙和下颌尖牙。',
    //   xingtai:'颈部厚,切端有一牙尖,牙根为单根。',
    //   yaguan:'牙冠较厚, 4个轴（唇面、舌面近中面和远中面）+1个牙尖,其中唇、舌面呈五边形,邻面呈三角形。',
    //   gongneng:'穿刺和撕裂食物。',
    //   remarks:'尖牙的髓腔形态与相应的牙体外形相似,髓室与根管无明显界限,其特点是根管多为单根管。',
    //   show: [
    //     { 
    //       name: '上颌尖牙',
    //       img_url:  'http://bmob-cdn-23814.b0.upaiyun.com/2019/03/12/fd537d4c400cb2cf803adc71731b4387.jpg'
    //     },
    //     {
    //       name: '下颌尖牙',
    //       img_url: 'http://bmob-cdn-23814.b0.upaiyun.com/2019/03/12/fd537d4c400cb2cf803adc71731b4387.jpg'
    //     }
    //   ]
    // },

    // moyazu: {
    //   summary: '位于前磨牙的远中、上、下、左、右共12颗，包括上颌第一、第二、第三磨牙和下颌第一、第二、第三磨牙。',
    //   xingtai: '磨牙的牙冠体积较大，第一磨牙至第三磨牙体积逐渐减小。',
    //   yaguan: '牙冠呈立方形或长方形，由颊面、舌面、近中面、远中面四个轴面以及一个𬌗面组成，其中颊、舌面呈梯形，邻面呈四边形，𬌗面由4~5个牙尖。',
    //   yagen:'牙根一般为2~3根。',
    //   gongneng: '磨牙具有磨细食物的作用。',
    //   remarks: '',
    //   show: [
    //     {
    //       name: '上颌第一磨牙',
    //       img_url: 'http://bmob-cdn-23814.b0.upaiyun.com/2019/03/12/fd537d4c400cb2cf803adc71731b4387.jpg'
    //     },
    //     {
    //       name: '下颌第一磨牙',
    //       img_url: 'http://bmob-cdn-23814.b0.upaiyun.com/2019/03/12/fd537d4c400cb2cf803adc71731b4387.jpg'
    //     },
    //     {
    //       name: '上颌第二磨牙',
    //       img_url: 'http://bmob-cdn-23814.b0.upaiyun.com/2019/03/12/fd537d4c400cb2cf803adc71731b4387.jpg'
    //     },
    //     {
    //       name: '下颌第二磨牙',
    //       img_url: 'http://bmob-cdn-23814.b0.upaiyun.com/2019/03/12/fd537d4c400cb2cf803adc71731b4387.jpg'
    //     },
    //   ]
    // },


    // qianmoyazu: {
    //   summary: '前磨牙位于尖牙与磨牙之间,又称双尖牙,上、下、左、右共8颗,包括上颌第一前磨牙、上颌第二前磨牙、下颌第一前磨牙和下颌第二前磨牙。',
    //   xingtai: '',
    //   yaguan: '牙冠约呈立方体形,由颊面、舌面、近中面和远中面四个轴面及一个he面组成,其中颊、舌面呈五边形,邻面呈四边形,he面有2-3牙尖(下颌第二前磨牙有三尖型者,因此将前磨牙称为“双尖牙”不准确)',
    //   yagen:'牙根为单根或双根。',
    //   gongneng: '协助撕裂食物,并具有捣碎食物的作用',
    //   remarks: '',
    //   show: [
    //     {
    //       name: '上颌第一前磨牙',
    //       img_url: 'https://6579-eyhuang-3bf580-1258831815.tcb.qcloud.la/上颌第一前磨牙/左侧上颌第一前磨牙（1）颊面.png?sign=feb4f2591f6850c1d2ecdd862727b6f7&t=1552719038'
    //     },
    //     {
    //       name: '下颌第一前磨牙',
    //       img_url: 'http://i1.bvimg.com/680553/b2e79fd9e9b36c2f.png'
    //     },
    //     {
    //       name: '上颌第二前磨牙',
    //       img_url: 'http://i2.bvimg.com/680553/a1245edf1521a992.png'
    //     },
    //     {
    //       name: '下颌第二前磨牙',
    //       img_url: 'http://bmob-cdn-23814.b0.upaiyun.com/2019/03/12/fd537d4c400cb2cf803adc71731b4387.jpg'
    //     },
    //   ]
    // },

    // qieyazu: {
    //   summary: '切牙位于口腔前部,在中线两侧,呈弧形排列,形态相似,上、下、左、右共8颗,包括上颌中切牙、上颌侧切牙、下颌中切牙和下颌侧切牙。',
    //   xingtai: '颈部厚,切端薄。',
    //   yaguan: '4个轴面（唇面、舌面、近中面和远中面）+1个切嵴,其中唇、舌面呈梯形,邻面呈三角形,。',
    //   yagen:'牙根为单根。',
    //   gongneng: '切割食物。',
    //   remarks: '切牙的髓腔形态与相应的牙体外形相似,髓室与根管无明显界限,其特点是根管多为单根管。',
    //   show: [
    //     {
    //       name: '上颌侧切牙',
    //       img_url: 'http://bmob-cdn-23814.b0.upaiyun.com/2019/03/12/fd537d4c400cb2cf803adc71731b4387.jpg'
    //     },
    //     {
    //       name: '下颌侧切牙',
    //       img_url: 'https://6579-eyhuang-3bf580-1258831815.tcb.qcloud.la/下颌侧切牙/左侧下颌侧切牙（1）唇面.png?sign=d6c9334a1b93234204677f5fd25172fe&t=1552722681'
    //     },
    //     {
    //       name: '上颌中切牙',
    //       img_url: 'http://bmob-cdn-23814.b0.upaiyun.com/2019/03/12/fd537d4c400cb2cf803adc71731b4387.jpg'
    //     },
    //     {
    //       name: '下颌中切牙',
    //       img_url: 'http://bmob-cdn-23814.b0.upaiyun.com/2019/03/12/fd537d4c400cb2cf803adc71731b4387.jpg'
    //     },
    //   ]
    // },
  },

  click:function(){
    this.setData({
      isLogin:true
    })
    this.onLoad()
  },

  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    wx.setStorageSync('userInfo', e.detail.userInfo)
    this.setData({
      isLogin: true
    })
    this.onLoad()
  },

  onLoad: function() {
    // wx.showLoading({
    //   title: '加载中',
    //   mask:true,
    // })

    // if (!wx.cloud) {
    //   wx.redirectTo({
    //     url: '../chooseLib/chooseLib',
    //   })
    //   return
    // }

    // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           this.setData({
    //             avatarUrl: res.userInfo.avatarUrl,
    //             userInfo: res.userInfo
    //           })
    //         }
    //       })
    //     }
    //   }
    // })
    wx.setNavigationBarTitle({
      title: '口腔讲堂',
    })
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }
    let that=this

    if(that.data.isLogin==false){
      return
    }

    wx.showLoading({
      title: '加载中',
      mask:true
    })

    wx.cloud.callFunction({
      name:'get',
      success(res){
        console.log(res)
        if (res.errMsg =='cloud.callFunction:ok'){
          that.setData({
            jianyazu: res.result.data[0],
            moyazu: res.result.data[1],
            qianmoyazu: res.result.data[2],
            qieyazu: res.result.data[3]
          })
          wx.hideLoading()
        }
        else{
          wx.hideLoading()
          wx.showToast({
            title: '出现错误',
            icon:'none'
          })
        }
      },
      fail(res){
        console.log(res)
        wx.hideLoading()
        wx.showToast({
          title: '出现错误',
          icon:'none'
        })
      }

    })
  },

  onGetUserInfo: function(e) {
    if (!this.logged && e.detail.userInfo) {
      this.setData({
        logged: true,
        avatarUrl: e.detail.userInfo.avatarUrl,
        userInfo: e.detail.userInfo
      })
    }
  },

  onGetOpenid: function() {
    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
        wx.navigateTo({
          url: '../userConsole/userConsole',
        })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
        wx.navigateTo({
          url: '../deployFunctions/deployFunctions',
        })
      }
    })
  },

  // 上传图片
  doUpload: function () {
    // 选择图片
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {

        wx.showLoading({
          title: '上传中',
        })

        const filePath = res.tempFilePaths[0]
        
        // 上传图片
        const cloudPath = 'my-image' + filePath.match(/\.[^.]+?$/)[0]
        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success: res => {
            console.log('[上传文件] 成功：', res)

            app.globalData.fileID = res.fileID
            app.globalData.cloudPath = cloudPath
            app.globalData.imagePath = filePath
            
            wx.navigateTo({
              url: '../storageConsole/storageConsole'
            })
          },
          fail: e => {
            console.error('[上传文件] 失败：', e)
            wx.showToast({
              icon: 'none',
              title: '上传失败',
            })
          },
          complete: () => {
            wx.hideLoading()
          }
        })

      },
      fail: e => {
        console.error(e)
      }
    })
  },
  switchItem:function(e){
    let item=Number.parseInt(e.currentTarget.dataset.item)
    let isSelected=[false,false,false,false]
    isSelected[item]=true
    this.setData({
      isSelected
    })
  },
  previewPhoto:function(e){
    console.log(e)
    let url=[]
    url.push(e.currentTarget.dataset.url)
    console.log(url)
    wx.previewImage({
      urls: url,
    })
  },

  toDetail:function(e){
    let name=e.currentTarget.dataset.name
    wx.navigateTo({
      url: '../toothDetail/toothDetail?name='+name,
    })
  }
})
