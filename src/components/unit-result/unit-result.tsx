import {FunctionComponent} from "preact";
import {Unit, Word} from "../../types/unit";

export type UnitResultProps = {
    onBackClicked: () => void;
    wrongWords: Word[]
}

export const UnitResult: FunctionComponent<UnitResultProps> = ({ onBackClicked, wrongWords }) => {
    return (
        <>
            <h1>Ergebnis:</h1>
            { wrongWords.length === 0 ?
                <h1>SUPER, alles richtig!!! 🥳</h1> :
                <>
                    <h1>Folgende Vokabeln waren leider falsch:</h1>
                    { wrongWords.map((wrongWord) => {
                        return (
                            <h3>{wrongWord.englishLabel}</h3>
                        )
                    })}
                    <h1>Beim nächsten mal hast du bestimmt mehr richtig!</h1>
                </>
            }
            <button onClick={onBackClicked}>Zurück</button>
        </>
    )
}