import { FunctionComponent } from "preact";
import {useMemo, useRef, useState} from 'preact/hooks'
import {Unit, Word} from "../../types/unit";
import { WordView } from "../word-view/word-view";
import {shuffleArray} from "../../utils/shuffle-array";
import {UnitResult} from "../unit-result/unit-result";

export type UnitViewProps = {
    onBackToUnitList: () => void;
    unit: Unit;
}

export const UnitView: FunctionComponent<UnitViewProps> = ({ onBackToUnitList, unit }) => {
    const { words } = unit;
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    const shuffledWords = useMemo(() => {
        return shuffleArray(words);
    }, [words]);

    const word = shuffledWords[currentWordIndex];
    const wrongWords = useRef<Word[]>([]);

    return (
        <div class="unit-view">
            {word ?
                <WordView
                    showNextWord={() => setCurrentWordIndex((cur) => (cur + 1))}
                    word={word}
                    onAnswered={(word) => {
                        console.log(word.englishLabel)
                        wrongWords.current.push(word);
                    }}
                />
                : <UnitResult onBackClicked={onBackToUnitList} wrongWords={wrongWords.current} />
            }
        </div>
    )
}