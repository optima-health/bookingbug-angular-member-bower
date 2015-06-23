angular.module("BB").run(["$templateCache", function($templateCache) {$templateCache.put("edit_booking_modal_form.html","<div class=\"modal-header\">\n  <h3 class=\"modal-title\">{{title}}</h3>\n</div>\n<form name=\"booking_form\" ng-submit=\"submit(modal_form)\">\n  <div class=\"member_booking_form_content\" >\n    <p>{{form_model.full_describe}}</p>\n    <p>{{form_model.describe}}</p>\n  </div>\n  <div class=\"modal-body\" sf-schema=\"schema\" sf-form=\"form\"\n    sf-model=\"form_model\" sf-options=\"{formDefaults: {feedback: false}}\">\n  </div>\n  <div class=\"modal-footer\">\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"OK\">\n    <button class=\"btn btn-default\" ng-click=\"cancel($event)\">Dismiss</button>\n  </div>\n</form>\n");
$templateCache.put("login.html","<form name=\"login_form\" ng-submit=\"submit()\" class=\"form-horizontal\"\n  role=\"form\">\n  <div class=\"alert alert-danger\" role=\"alert\" ng-if=\"alert && alert.length > 0\">{{alert}}</div>\n  <div ng-class=\"{\'form-group\': true, \'has-error\': emailIsInvalid()}\">\n    <label for=\"email\" class=\"col-sm-2 control-label\">Email</label>\n    <div class=\"col-sm-10\">\n      <input type=\"email\" ng-model=\"email\" name=\"email\" class=\"form-control\"\n        id=\"email\" placeholder=\"Email\" required autofocus>\n    </div>\n  </div>\n  <div ng-class=\"{\'form-group\': true, \'has-error\': passwordIsInvalid()}\">\n    <label for=\"password\" class=\"col-sm-2 control-label\">Password</label>\n    <div class=\"col-sm-10\">\n      <input type=\"password\" ng-model=\"password\" name=\"password\"\n        class=\"form-control\" id=\"password\" placeholder=\"Password\" required>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <div class=\"col-sm-offset-2 col-sm-10\">\n      <button type=\"submit\" class=\"btn btn-primary\">Log In</button>\n    </div>\n  </div>\n</form>\n");
$templateCache.put("login_modal_form.html","<div class=\"modal-header\">\n  <h3 class=\"modal-title\">{{title}}</h3>\n</div>\n<form name=\"login_form\" ng-submit=\"submit(login_form)\">\n  <div class=\"modal-body\" sf-schema=\"schema\" sf-form=\"form\"\n    sf-model=\"login_form\">\n  </div>\n  <div class=\"modal-footer\">\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"OK\">\n    <button class=\"btn btn-default\" ng-click=\"cancel($event)\">Dismiss</button>\n  </div>\n</form>\n");
$templateCache.put("member_booking_delete_modal.html","<div class=\"modal-header\">\n    <h3>Confirm you want to cancel this booking.</h3>\n</div>\n<div class=\"modal-body\">\n    Booking: {{booking.full_describe}} - {{booking.describe}}\n</div>\n<div class=\"modal-footer\">\n    <button class=\"btn btn-primary btn-next\" ng-click=\"confirm_delete()\"><span>Yes</span></button>\n    <button class=\"btn btn-warning\" ng-click=\"cancel()\">No</button>\n</div>\n");
$templateCache.put("member_bookings_table.html","<div ng-show=\"loading\"><img src=\'/BB_wait.gif\' class=\"loader\"></div>\n<table tr-ng-grid=\"\" items=\"bookings\" enable-filtering=\"false\"\n  ng-hide=\"loading\" fields=\"fields\">\n  <thead>\n    <tr>\n      <th field-name=\"describe\" display-name=\"Date/Time\"></th>\n      <th field-name=\"full_describe\" display-name=\"Description\"></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>\n        <button class=\"btn btn-default btn-sm\"\n          ng-click=\"delete(gridItem.id)\">\n            Cancel\n        </button>\n        <button class=\"btn btn-default btn-sm\"\n          ng-click=\"edit(gridItem.id)\">\n            Details\n        </button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n");
$templateCache.put("member_bookings_tabs.html","<div class=\"bb-member-bookings\">\n   <div tabset class=\"bb-tabs\">\n    <div tab>\n      <div tab-heading>\n        Upcoming Bookings\n      </div>\n      <div id=\"member\">\n        <div bb-member-upcoming-bookings member=\"member\"></div>\n      </div>\n    </div>\n    <div tab>\n      <div tab-heading>\n        Past bookings\n      </div>\n      <div id=\"member\">\n        <div bb-member-past-bookings member=\"member\"></div>\n      </div>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("member_past_bookings.html","<div ng-show=\"loading\"><img src=\'/BB_wait.gif\' class=\"loader\"></div>\n<div ng-hide=\"loading\" class=\"bb-past clearfix\">\n  <div class=\"bb-head\">\n    <span id=\"your_bookings\">Your past appointments:</span>\n  </div>\n  <div id=\"bookings\">\n    <div ng-if=\"past_bookings.length == 0\">\n      <h3>You don\'t currently have any past appointments.</h3>\n    </div>\n    <div ng-repeat=\"booking in past_bookings | filter:{deleted: false} |\n      orderBy: \'datetime.unix()\' \" class=\"booking-row\">\n      <div class=\"type col-sm-1\">\n        <div style=\"background-color:{{booking.getColour()}}\"></div>\n      </div>\n      <div class=\"datetime col-sm-5\">\n        <div>{{booking.datetime.format(\'Do MMM YYYY HH:mm\')}}</div>\n      </div>\n      <div class=\"describe col-sm-5\">\n        <div class=\"detail\">{{booking.full_describe}}</div>\n        <div class=\"resource\">{{booking.resource}}</div>\n      </div>\n      <div class=\"bb-bookings-action col-sm-1\">\n        <button ng-click=\"cancel(booking)\" class=\"btn btn-danger bb-push\">\n          Cancel\n        </button>\n      </div>\n      <pagination total-items=\"pagination.num_items\"\n        ng-model=\"pagination.current_page\" items-per-page=\"pagination.page_size\"\n        max-size=\"pagination.max_size\" boundary-links=\"true\" rotate=\"false\"\n        num-pages=\"pagination.num_pages\" ng-show=\"past_bookings\"></pagination>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("member_upcoming_bookings.html","<div ng-show=\"loading\"><img src=\'/BB_wait.gif\' class=\"loader\"></div>\n<div ng-hide=\"loading\" class=\"bb-upcoming clearfix\">\n  <div class=\"bb-head\">\n    <span id=\"your_bookings\">Your future appointments:</span>\n  </div>\n  <div id=\"bookings\">\n    <div ng-if=\"upcoming_bookings.length == 0\">\n      <h3>You don\'t currently have any appointments.</h3>\n    </div>\n    <div ng-repeat=\"booking in upcoming_bookings | filter:{deleted: false} |\n      orderBy: \'datetime.unix()\' \" class=\"booking-row\">\n      <div class=\"type\">\n        <div style=\"background-color:{{booking.getColour()}}\"></div>\n      </div>\n      <div class=\"datetime\">\n        <div>{{booking.datetime.format(\'Do MMM YYYY HH:mm\')}}</div>\n      </div>\n      <div class=\"describe\">\n        <div class=\"detail\">{{booking.full_describe}}</div>\n        <div class=\"resource\">{{booking.resource}}</div>\n      </div>\n      <div class=\"bb-bookings-action\">\n        <button ng-click=\"cancel(booking)\" class=\"btn btn-danger bb-push\">Cancel</button>\n        <button ng-click=\"edit(booking)\" class=\"btn bb-push\">Details</button>\n      </div>\n    </div>\n  </div>\n</div>\n");
$templateCache.put("pick_company.html","<form name=\"pick_company_form\" ng-submit=\"selectedCompany()\" role=\"form\">\n  <p>Pick Company</p>\n  <div ng-repeat=\"admin in administrators\" class=\"radio\">\n    <label>\n      <input id=\"company{{admin.company_id}}\" type=\"radio\"\n        ng-model=\"$parent.selected_admin\" ng-value=\"admin\" required\n        name=\"company\">\n      {{admin.company_name}}\n    </label>\n  </div>\n  <input type=\"submit\" class=\"btn btn-default\">\n</form>\n");
$templateCache.put("pick_company_modal_form.html","<div class=\"modal-header\">\n  <h3 class=\"modal-title\">{{title}}</h3>\n</div>\n<form name=\"pick_company_form\" ng-submit=\"submit(pick_company_form)\">\n  <div class=\"modal-body\" sf-schema=\"schema\" sf-form=\"form\"\n    sf-model=\"pick_company_form\">\n  </div>\n  <div class=\"modal-footer\">\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"OK\">\n    <button class=\"btn btn-default\" ng-click=\"cancel($event)\">Dismiss</button>\n  </div>\n</form>\n");}]);