export type Option = {
    label: string;
    correct?: boolean;
};

export type Word = {
    englishLabel: string;
    example?: string;
    options: Option[];
};

export type Unit = {
    title: string;
    words: Word[];
};
