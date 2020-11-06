import React from 'react';
import classes from './blockgame.module.scss';
import imageRight from '../../../../../resources/images/owl_right.png';
import imageWrong from '../../../../../resources/images/owl_wrong.png';
const soundRight =  require('../../../../../resources/sounds/4-dog-shows-ducks.mp3');
const soundWrong =  require('../../../../../resources/sounds/7-you-failed.mp3');

type indicateProps = {
  resultOfExercise: any;
};

const BlockAnswerIndicate = ({ resultOfExercise }: indicateProps) => {
  // resultOfExercise.isShow = 1
  const text = {
    rightAnswer: ['Так держать!', 'Продолжай в том же духе!'],
    wrongAnswer: ['Упс! Ошибочка...', 'Попробуй еще и всё получится!'],
  };
  if (resultOfExercise.isRoundComplete) {
    text.rightAnswer = ['Верно!', 'Посмотри на свои результаты'];
    text.wrongAnswer = ['Упс! Ошибочка...', 'Посмотри на свои результаты'];
  }

  const style: any[] = [classes.indacateResult];

  if (!resultOfExercise.isShow) style.push(classes.hideBlock);

  return (
    <div className={style.join(' ')}>
      <div className={classes.owlBlock}>
        <p>
          {resultOfExercise.isRightAnswer
            ? text.rightAnswer[0]
            : text.wrongAnswer[0]}
        </p>
        <img
          src={resultOfExercise.isRightAnswer ? imageRight : imageWrong}
          alt="owl"
        />
        <p>
          {resultOfExercise.isRightAnswer
            ? text.rightAnswer[1]
            : text.wrongAnswer[1]}
        </p>
        {resultOfExercise.isShow && <audio
          src={resultOfExercise.isRightAnswer ? soundRight : soundWrong}
          autoPlay={true}
        />}
      </div>
    </div>
  );
};

export default BlockAnswerIndicate;
