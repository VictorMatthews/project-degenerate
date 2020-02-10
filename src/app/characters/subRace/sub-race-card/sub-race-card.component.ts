import {Component, Input, OnInit} from "@angular/core";
import {CreateCharacterStateService} from "../../create-character/create-character.state.service";
import {SubRace} from "../../../shared/constants/character/races";

@Component({
    selector: 'app-sub-race-card',
    templateUrl: './sub-race-card.component.html',
    styleUrls: ['./sub-race-card.component.scss']
})
export class SubRaceCardComponent implements OnInit {

    @Input() subRace: SubRace;

    constructor(public state: CreateCharacterStateService) {
    }

    ngOnInit() {
    }

    isSelected() {
        return this.subRace === this.state.selectedSubRace ? 'selected-card' : '';
    }

}
