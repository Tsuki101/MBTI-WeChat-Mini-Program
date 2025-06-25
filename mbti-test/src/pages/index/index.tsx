import {View, Image} from '@tarojs/components'
import {AtBadge, AtButton} from 'taro-ui'
import headerbg from '../../assets/headerbg.jpg'
//import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'
import GlobalFooter from "../../components/GlobalFooter";
import Taro from "@tarojs/taro";

export default () => {
  return (
    <View className='indexPage'>

      <View className='at-article__h1 title'>
        MBTI性格测试
      </View>
      <View className='at-article__h2 subTitle'>动动手指就能测出你的性格特点</View>
      <AtButton type='primary' className='enterBtn' circle onClick={()=>Taro.navigateTo({url:'/pages/doQuestion/index'})}>开始测试</AtButton>
      <Image className='headerBg'
        //style='width: 300px;height: 100px;background: #fff;'
        src={headerbg}
      />
      <GlobalFooter />
    </View>
  )
};


