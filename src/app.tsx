import type { FunctionComponent } from 'preact';
import './index.scss';
import { UnitView } from './components/unit-view/unit-view';
import { Unit1 } from './units/unit-1';
import { Unit2 } from './units/unit-2';
import { Unit3 } from './units/unit-3';
import { Unit4 } from './units/unit-4';
import { Unit5 } from './units/unit-5';
import { Unit6 } from './units/unit-6';
import { Unit7 } from './units/unit-7';
import { Unit8 } from './units/unit-8';
import { Unit9 } from './units/unit-9';
import { UnitList } from './components/unit-list/unit-list';
import { useCallback, useState } from 'preact/hooks';
import { Unit } from './types/unit';

const units = [Unit1, Unit2, Unit3, Unit4, Unit5, Unit6, Unit7, Unit8, Unit9];

export const App: FunctionComponent = () => {
    const [selectedUnit, setSelectedUnit] = useState<Unit>();

    const onUnitSelectedHandler = useCallback((unit: Unit) => {
        setSelectedUnit(unit);
    }, []);

    return (
        <>
            <h1>{'Englisch Vokabel Lern-App'}</h1>

            {selectedUnit ? (
                <UnitView
                    unit={selectedUnit}
                    onBackToUnitList={() => setSelectedUnit(undefined)}
                />
            ) : (
                <UnitList
                    onUnitSelected={onUnitSelectedHandler}
                    units={units}
                />
            )}
        </>
    );
};
