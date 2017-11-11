import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
var BlankPage = /** @class */ (function () {
    function BlankPage(nav) {
        this.nav = nav;
    }
    BlankPage.prototype.openPage = function () {
        this.nav.push('LoginPage');
    };
    BlankPage = __decorate([
        Component({
            selector: 'ui-blank',
            template: "<p>Blank</p>\n    <button ion-item (click)=\"openPage()\">\n      Login\n    </button>\n    "
        }),
        __metadata("design:paramtypes", [NavController])
    ], BlankPage);
    return BlankPage;
}());
export { BlankPage };
//# sourceMappingURL=blank.page.js.map