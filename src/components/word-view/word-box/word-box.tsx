import { FunctionComponent } from "preact";
import {useCallback, useEffect, useState} from "preact/hooks";
import { Option } from "../../../types/unit";

export type WordBoxProps = {
    onOptionClicked: (correct: boolean) => void;
    option: Option;
    revealCorrectAnswer: boolean;
}

export const WordBox: FunctionComponent<WordBoxProps> = ({ onOptionClicked, option, revealCorrectAnswer }) => {
    const [answeredCorrectly, setAnsweredCorrectly] = useState<boolean>();
    const { label, correct } = option;

    useEffect(() => {
        setAnsweredCorrectly(undefined)
    }, [option]);

    const onClickHandler = useCallback(() => {
        if (revealCorrectAnswer) {
            return;
        }
        
        setAnsweredCorrectly(!!correct);
        onOptionClicked(!!correct);
    }, [correct, onOptionClicked, revealCorrectAnswer]);

    const showCorrectAnswer = revealCorrectAnswer ? !!correct : false;

    const classes = `word-box${ getCorrectClass(showCorrectAnswer, answeredCorrectly)}`

    return (
        <div
            class={classes}
            onClick={onClickHandler}
        >
            {label}
        </div>
    );
}

function getCorrectClass(showCorrectAnswer: boolean, answeredCorrectly: boolean | undefined) {
    if (showCorrectAnswer) {
        return ' correct';
    }

    if (answeredCorrectly === undefined) {
        return '';
    }

    if (answeredCorrectly) {
        return ' correct';
    }

    return ' wrong';
}
