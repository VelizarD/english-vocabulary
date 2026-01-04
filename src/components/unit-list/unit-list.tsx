import {FunctionComponent} from "preact";
import {Unit} from "../../types/unit";

export type UnitListProps = {
    onUnitSelected: (unit: Unit) => void;
    units: Unit[];
}

export const UnitList: FunctionComponent<UnitListProps> = ({onUnitSelected, units}) => {
    return (
        <div class="unit-list">
            {units.map((unit, index) => (
                <div class="unit-list-entry" key={index} onClick={() => onUnitSelected(unit)}>
                    {unit.title}
                </div>))
            }
        </div>

    )
}