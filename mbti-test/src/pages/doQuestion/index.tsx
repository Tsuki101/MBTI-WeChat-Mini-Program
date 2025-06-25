import {View, Image} from '@tarojs/components'
import {AtBadge, AtButton, AtRadio} from 'taro-ui'
import questions from '../../data/questions.json'
//import "taro-ui/dist/style/components/button.scss" // 按需引入
import './index.scss'
import GlobalFooter from "../../components/GlobalFooter";
import {useEffect, useState} from "react";
import Taro from "@tarojs/taro";

/**做题页面**/
export default () => {
  const question = questions[0]

  //当前题目序号从1开始
  const [current, setCurrent] = useState<number>(1);
  const [currentQuestion,setCurrentQuestion] = useState<Question>(questions[0]);
  const questionOptions = currentQuestion.options.map(option => {
    return {label: `${option.key}.${option.value}`, value: option.key};//key为“A”等字符串
  });
  const [currentAnswer, setCurrentAnswer] = useState<string>();
  const [answerList]=useState<string[]>([]);
  useEffect(()=>{
    setCurrentQuestion(questions[current-1]);
    setCurrentAnswer(answerList[current-1]);
    },[current]);//根据当前题目序号更新当前题目

  return (
    <View className='doQuestionPage'>

      <View className='at-article__h2 title'>
        {current}、{currentQuestion.title}
      </View>
      <View className="options-wrapper">
        <AtRadio
          options={questionOptions}
          value={currentAnswer}
          onClick={(value)=>{setCurrentAnswer(value);answerList[current-1]=value;}}
        />

      </View>
      {current == questions.length && <AtButton type='primary' circle className='controlBtn' onClick={()=>{Taro.setStorageSync('answerList',answerList);
        Taro.reLaunch({url: '../../pages/result/index'});
      }}
      >
        提交并查看结果</AtButton>}
      {current < questions.length && <AtButton type='primary' disabled={!currentAnswer} circle className='controlBtn' onClick={()=>{setCurrent(current+1)}}>下一题</AtButton>}
      {current > 1 && <AtButton circle className='controlBtn prebtn'  onClick={()=>{setCurrent(current-1)}}>上一题 </AtButton> }

      <GlobalFooter />
    </View>
  )
}


