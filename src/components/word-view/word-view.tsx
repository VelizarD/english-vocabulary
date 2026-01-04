import {FunctionComponent} from "preact";
import {WordBox} from "./word-box/word-box";
import {Word} from "../../types/unit";
import {useCallback, useEffect, useMemo, useState} from "preact/hooks";
import {State, WordFooter} from "../word-footer/word-footer";
import {shuffleArray} from "../../utils/shuffle-array";

export type WordViewProps = {
    showNextWord: () => void;
    onAnswered: (word: Word) => void;
    word: Word;
}

export const WordView: FunctionComponent<WordViewProps> = ({ showNextWord, onAnswered, word }) => {
    const {englishLabel, example, options} = word;
    const [state, setState] = useState<State>('thinking');

    const shuffledOptions = useMemo(() => {
        return shuffleArray(options);
    }, [options]);

    const [revealCorrectAnswer, setRevealCorrectAnswer] = useState(false);

    useEffect(() => {
        setState('thinking')
        setRevealCorrectAnswer(false)
    }, [word])

    const onOptionClickedHandler = useCallback((correct: boolean) => {
        setRevealCorrectAnswer(true);
        if (!correct) {
            onAnswered(word);
        }
        setState(correct ? 'correct' : 'wrong')
    }, [word]);

    return (
        <div class="word-view">
            <div>
                <h1>{englishLabel}</h1>
            </div>
            {
                example && (
                    <div>
                        {`Beispiel: ${example}`}
                    </div>
                )
            }
            <div class="word-view-options">
                {shuffledOptions.map((option) => (
                    <WordBox
                        option={option}
                        revealCorrectAnswer={revealCorrectAnswer}
                        onOptionClicked={onOptionClickedHandler}/>
                ))}
            </div>
            <WordFooter onNextClicked={showNextWord} state={state}/>
        </div>
    )
}
