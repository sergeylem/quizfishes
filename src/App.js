import React, { Component } from 'react';
import './styles.css'
import getFourRndImages from './components/getFourRndImages';
import PlaySound from './components/playSound';

class App extends Component {
  state = {
    imgList: [
      { id: 0, img: require('./assets/images/0.jpg'), sound: require('./assets/sounds/0.mp3'), name: 'АКУЛА ГОБЛИН' },
      { id: 1, img: require('./assets/images/1.jpg'), sound: require('./assets/sounds/1.mp3'), name: 'БЕЛЫЙ АМУР' },
      { id: 2, img: require('./assets/images/2.jpg'), sound: require('./assets/sounds/2.mp3'), name: 'ВЬЮН' },
      { id: 3, img: require('./assets/images/3.jpg'), sound: require('./assets/sounds/3.mp3'), name: 'ЁРШ' },
      { id: 4, img: require('./assets/images/4.jpg'), sound: require('./assets/sounds/4.mp3'), name: 'ЖЕРЕХ' },
      { id: 5, img: require('./assets/images/5.jpg'), sound: require('./assets/sounds/5.mp3'), name: 'КАМБАЛА' },
      { id: 6, img: require('./assets/images/6.jpg'), sound: require('./assets/sounds/6.mp3'), name: 'КАРАСЬ' },
      { id: 7, img: require('./assets/images/7.jpg'), sound: require('./assets/sounds/7.mp3'), name: 'КАРП' },
      { id: 8, img: require('./assets/images/8.jpg'), sound: require('./assets/sounds/8.mp3'), name: 'КРЫЛАТКА ЗЕБРА' },
      { id: 9, img: require('./assets/images/9.jpg'), sound: require('./assets/sounds/9.mp3'), name: 'ЛЕЩЬ' },
      { id: 10, img: require('./assets/images/10.jpg'), sound: require('./assets/sounds/10.mp3'), name: 'ЛИНЬ' },
      { id: 11, img: require('./assets/images/11.jpg'), sound: require('./assets/sounds/11.mp3'), name: 'ЛОСОСЬ' },
      { id: 12, img: require('./assets/images/12.jpg'), sound: require('./assets/sounds/12.mp3'), name: 'ЛУФАРЬ' },
      { id: 13, img: require('./assets/images/13.jpg'), sound: require('./assets/sounds/13.mp3'), name: 'МАВРИТАНСКИЙ ИДОЛ' },
      { id: 14, img: require('./assets/images/14.jpg'), sound: require('./assets/sounds/14.mp3'), name: 'МОРСКАЯ ЗМЕЯ' },
      { id: 15, img: require('./assets/images/15.jpg'), sound: require('./assets/sounds/15.mp3'), name: 'МОРСКОЙ ДРАКОН' },
      { id: 16, img: require('./assets/images/16.jpg'), sound: require('./assets/sounds/16.mp3'), name: 'МУРЕНА' },
      { id: 17, img: require('./assets/images/17.jpg'), sound: require('./assets/sounds/17.mp3'), name: 'ОКУНЬ' },
      { id: 18, img: require('./assets/images/18.jpg'), sound: require('./assets/sounds/18.mp3'), name: 'ОСЁТР' },
      { id: 19, img: require('./assets/images/19.jpg'), sound: require('./assets/sounds/19.mp3'), name: 'ПЕСКАРЬ' },
      { id: 20, img: require('./assets/images/20.jpg'), sound: require('./assets/sounds/20.mp3'), name: 'ПИРАНЬЯ' },
      { id: 21, img: require('./assets/images/21.jpg'), sound: require('./assets/sounds/21.mp3'), name: 'ПЛОТВА' },
      { id: 22, img: require('./assets/images/22.jpg'), sound: require('./assets/sounds/22.mp3'), name: 'РЫБА ЖАБА' },
      { id: 23, img: require('./assets/images/23.jpg'), sound: require('./assets/sounds/23.mp3'), name: 'РЫБА КЛОУН' },
      { id: 24, img: require('./assets/images/24.jpg'), sound: require('./assets/sounds/24.mp3'), name: 'ПИКША' },
      { id: 25, img: require('./assets/images/25.jpg'), sound: require('./assets/sounds/25.mp3'), name: 'РЫБА ХИРУРГ' },
      { id: 26, img: require('./assets/images/26.jpg'), sound: require('./assets/sounds/26.mp3'), name: 'РЫБА ПОПУГАЙ' },
      { id: 27, img: require('./assets/images/27.jpg'), sound: require('./assets/sounds/27.mp3'), name: 'РЫБА ШАР' },
      { id: 28, img: require('./assets/images/28.jpg'), sound: require('./assets/sounds/28.mp3'), name: 'САЗАН' },
      { id: 29, img: require('./assets/images/29.jpg'), sound: require('./assets/sounds/29.mp3'), name: 'СКАТ ХВОСТОКОЛ' },
      { id: 30, img: require('./assets/images/30.jpg'), sound: require('./assets/sounds/30.mp3'), name: 'СКОРПЕНА' },
      { id: 31, img: require('./assets/images/31.jpg'), sound: require('./assets/sounds/31.mp3'), name: 'СКУМБРИЯ' },
      { id: 32, img: require('./assets/images/32.jpg'), sound: require('./assets/sounds/32.mp3'), name: 'СОМ' },
      { id: 33, img: require('./assets/images/33.jpg'), sound: require('./assets/sounds/33.mp3'), name: 'ТОЛСТОЛОБИК' },
      { id: 34, img: require('./assets/images/34.jpg'), sound: require('./assets/sounds/34.mp3'), name: 'ТРЕСКА' },
      { id: 35, img: require('./assets/images/35.jpg'), sound: require('./assets/sounds/35.mp3'), name: 'ТУНЕЦ' },
      { id: 36, img: require('./assets/images/36.jpg'), sound: require('./assets/sounds/36.mp3'), name: 'УГОРЬ' },
      { id: 37, img: require('./assets/images/37.jpg'), sound: require('./assets/sounds/37.mp3'), name: 'УКЛЕЙКА' },
      { id: 38, img: require('./assets/images/38.jpg'), sound: require('./assets/sounds/38.mp3'), name: 'СУДАК' },
      { id: 39, img: require('./assets/images/39.jpg'), sound: require('./assets/sounds/39.mp3'), name: 'ФОРЕЛЬ' },
      { id: 40, img: require('./assets/images/40.jpg'), sound: require('./assets/sounds/40.mp3'), name: 'ЩУКА' },
      { id: 41, img: require('./assets/images/41.jpg'), sound: require('./assets/sounds/41.mp3'), name: 'ЯЗЬ' },
      { id: 42, img: require('./assets/images/42.jpg'), sound: require('./assets/sounds/42.mp3'), name: 'ГОРБУША' }
    ],
    rndImages: [0, 0, 0, 0], //Хранятся индексы imgList 4-х картинок
    questionIndex: 0,
    maxArray: 42,
    correctAnswer: false,
    playResultAnswer: false,
    playError: true,
    playQuestion: true,
    countCorrectAnswer: 0,
    countWrongAnswer: 0,
    gameOver: false
  };

  componentDidMount() {
    this.initialState(this.state.maxArray);
  }

  initialState = (maxArray) => {
    const rndIndexes = getFourRndImages(maxArray); //Получить 4 случайных индекса из массива imgList         
    const questionIndex = Math.floor(Math.random() * 4); //Индекс озвученной картинки 
    this.setState({ rndImages: rndIndexes, questionIndex: questionIndex }); //Запомнить 4 картинки и индекс озвученной картинки 
  }

  changeImgList = (buttonIndex) => {
    let tmpArray = this.state.imgList;  //imgList записываю во временный массив 
    const rndImages = this.state.rndImages; //ХРАНЯТСЯ ИНДЕКСЫ!
    const maxArray = this.state.maxArray;
    const idImage = tmpArray[rndImages[buttonIndex]].id; //Нахожу картинку по индексу кнопки

    const imageIndex = tmpArray.findIndex(idImg => idImg.id === idImage); //Нахожу индекс картинки в imgList по картинке
    tmpArray.splice(imageIndex, 1);  //Удаляю эту картинку из imgList

    const rndIndexes = getFourRndImages(maxArray - 1); //Получить 4 случайных индекса из массива imgList
    const questionIndex = Math.floor(Math.random() * 4); //Индекс озвученной картинки 

    this.setState({
      imgList: tmpArray, maxArray: (maxArray - 1), rndImages: rndIndexes, questionIndex: questionIndex,
      correctAnswer: false, playResultAnswer: false
    });
  };

  checkAnswer = (buttonIndex) => {
    if (buttonIndex === this.state.questionIndex) {
      if (this.state.imgList.length > 4) {
        this.setState({ questionIndex: buttonIndex, correctAnswer: true, playResultAnswer: true, playError: false, countCorrectAnswer: this.state.countCorrectAnswer + 1 });
      }
      else {
        this.setState({ gameOver: true }); //        alert("УРА! ФАНФАРЫ!");
      }
    }
    else {
      this.setState((state) => ({ correctAnswer: false, playResultAnswer: true, playError: !state.playError, countWrongAnswer: this.state.countWrongAnswer + 1 }));
    }
  };

  repeatAnswer = () => {
    this.setState((state) => ({ playQuestion: !state.playQuestion }));
  };


  render() {
    let nextBtn = false;
    let playQuestion, playSound, playGameOver;

    if (this.state.playResultAnswer === true) {
      if (this.state.correctAnswer === false) {
        nextBtn = false;
        if (this.state.playError === true) {
          playSound = (<PlaySound urlStr={require('./assets/sounds/e1.mp3')} />);

        } else {
          playSound = (<PlaySound urlStr={require('./assets/sounds/e3.mp3')} />);
        }
      } else {
        playSound = (<PlaySound urlStr={require('./assets/sounds/s1.mp3')} />);
        nextBtn = true;
      };
    }

    if (this.state.playQuestion === true) {
      playQuestion = (
        <PlaySound urlStr={this.state.imgList[this.state.rndImages[this.state.questionIndex]].sound} />
      );
    }
    else {
      playQuestion = (//Включил <div>, чтобы был рендеринг 
        <div>
          <PlaySound urlStr={this.state.imgList[this.state.rndImages[this.state.questionIndex]].sound} />
        </div>
      );
    }
    if (this.state.gameOver === true) {
      playGameOver = (
        <PlaySound urlStr={require('./assets/sounds/s1.wav')} />
      );
    }

    return (
      <div className="container1">
        {playQuestion}
        {playSound}
        {playGameOver}
        <div className="container2">
          <img
            className='image-btn'
            onClick={() => this.checkAnswer(0)}
            src={this.state.imgList[this.state.rndImages[0]].img}
            alt="Image1" />
          <img
            className='image-btn'
            onClick={() => this.checkAnswer(1)}
            src={this.state.imgList[this.state.rndImages[1]].img}
            alt="Image2" />
          <img
            className='next-repeat-btn'
            onClick={() => this.repeatAnswer()}
            src={require('./assets/arrows/speaker1.png')}
            alt="ImageRepeat" />
        </div>
        <div className="container3">
          <h5>{this.state.countCorrectAnswer} : {this.state.countWrongAnswer}</h5>
        </div>
        <div className="container2">
          <img
            className='image-btn'
            onClick={() => this.checkAnswer(2)}
            src={this.state.imgList[this.state.rndImages[2]].img}
            alt="Image3" />
          <img
            className='image-btn'
            onClick={() => this.checkAnswer(3)}
            src={this.state.imgList[this.state.rndImages[3]].img}
            alt="Image4" />
          <img
            className={nextBtn ? "next-repeat-btn" : "next-repeat-btn-disabled"}
            onClick={nextBtn ? () => this.changeImgList(this.state.questionIndex) :
              null}
            src={require('./assets/arrows/arrow2.png')}
            alt="ImageNext" />
        </div>
      </div>
    );
  }
}

export default App;