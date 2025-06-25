import {View, Image} from '@tarojs/components'
import { AtButton} from 'taro-ui'
import Taro from "@tarojs/taro";
import headerbg from '../../assets/headerbg.jpg'
//import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'
import GlobalFooter from "../../components/GlobalFooter";

import questions from '../../data/questions.json'
import questionResults from "../../data/question_results.json";
import {getBestQuestionResult} from "../../utils/bizUtils";

export default () => {
  //const result=questionResults[0];
  const answerList=Taro.getStorageSync('answerList');
  if(!answerList||answerList.length==0){
    Taro.showToast({
      title: '请先完成测试',
      icon: 'error',
      duration: 30
    })
  }
  const result =getBestQuestionResult(answerList,questions,questionResults);
  return (
    <View className='resultPage'>
      <View className='at-article__h1 title'>
        {result.resultName}
      </View>
      <View className='at-article__h2 subTitle'>{result.resultDesc}</View>
      <AtButton type='primary' className='enterBtn' circle onClick={()=>Taro.navigateTo({url:'../../pages/index/index'})}>返回主页</AtButton>
      <Image className='headerBg'
        //style='width: 300px;height: 100px;background: #fff;'
        src={headerbg}
      />
      <GlobalFooter />
    </View>
  )
};


