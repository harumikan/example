var HogeViewModel=function(){function e(e,n){this.name=ko.observable(""),this.age=ko.observable(0),this.name(e),this.age(n)}return e}();$(function(){ko.applyBindings(new HogeViewModel("山田",32))});