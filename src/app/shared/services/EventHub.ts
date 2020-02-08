import {Injectable} from "@angular/core";
import {Subject, Subscription} from "rxjs";


export class EventHubEvent {
    constructor(public name: string, public value?: any) {
    }
}

@Injectable()
export class EventHub {
    static FINISH_NEW_CHARACTER = "FINISH_NEW_CHARACTER";

    subject = new Subject<EventHubEvent>();

    constructor() {
    };

    broadcast(event: EventHubEvent) {
        let message = "broadcasting " + event.name;
        if (event.value !== undefined) {
            message = message + " with value: " + event.value;
        }
        console.log(message);
        this.subject.next(event);
    }

    broadcastNewEvent(name: string, value?: any) {
        this.broadcast(new EventHubEvent(name, value));
    }

    on(eventNameToListenFor: string, callback: (event: EventHubEvent) => void): Subscription {
        // return this.subject.filter((event: EventHubEvent) => {
        //     return event.name === eventNameToListenFor;
        // }).subscribe(callback);
        return this.subject.subscribe(callback);
    }
}
