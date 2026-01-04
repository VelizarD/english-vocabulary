export type Option = {
    label: string;
    correct?: boolean;
}

export type Word = {
    id: string;
    englishLabel: string;
    example?: string;
    options: Option[];
}

export type Unit = {
    id: string;
    title: string;
    words: Word[];
}