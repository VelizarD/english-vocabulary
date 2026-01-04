import {FunctionComponent} from "preact";
import {useCallback} from "preact/hooks";

export type State = 'thinking' | 'correct' | 'wrong';

export type  WordFooterProps= {
    onNextClicked: () => void;
    state: State;
}

export const WordFooter: FunctionComponent<WordFooterProps> = ({ onNextClicked, state }) => {
    const smiley = getSmiley(state);

    const buttonClasses = `word-footer${state === 'thinking' ? ' word-footer__disabled' : ''}`;

    const onClickHandler = () => {
        if (state === 'thinking') {
            return;
        }

        onNextClicked();
    };

    return (
        <div class={buttonClasses} onClick={onClickHandler}>
           {`${smiley} Nächste Vokabel`}
        </div>
    )
}

function getSmiley(state: State) {
    if (state === 'correct') {
        return "😁";
    } else if (state === 'wrong') {
        return "😳";
    } else {
        return "🤔";
    }
}