import { Inject, Injectable, Type } from "@angular/core";
import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material";
import { DOCUMENT } from "@angular/common";
import { UiUtil } from "./ui-util";


@Injectable()
export class DialogService {
    constructor(private dialog: MatDialog, @Inject(DOCUMENT) doc: any) {
        dialog.afterOpen.subscribe(() => {
            if (!doc.body.classList.contains('no-scroll')) {
                doc.body.classList.add('no-scroll');
            }
        });
        dialog.afterAllClosed.subscribe(() => {
            doc.body.classList.remove('no-scroll');
        });
    }

    public open<T>(component: Type<T>, config: MatDialogConfig = {autoFocus: false}): MatDialogRef<T> {
        return this.dialog.open(component, config);
    }

    public openFullScreen<T>(component: Type<T>, config: MatDialogConfig = {autoFocus: false}): MatDialogRef<T> {
        return this.dialog.open(component, UiUtil.setDialogSizeMax(config));
    }

    public closeAll() {
        this.dialog.closeAll();
    }

}
