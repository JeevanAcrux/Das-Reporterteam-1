this.appUrl = window.parent.appUrl;
this.jwtToken = window.parent.iframeJwtToken;
this.courseId = window.parent.courseId;

function generateiFrameURLs(page, iframeCount) {
    for(var i = 1; i <= iframeCount; i++) {
        var _url = this.appUrl + '?assignmentId=' + assessmentMap[(page - 1)][(i - 1)] + '&jwtToken=' + this.jwtToken + '&appPortal=Student&userType=LEARNER&isInlineMode=true' + '&MBAppCourseId=' + this.courseId;
        console.log(_url);
        var iframe = document.getElementById('iFrame-' + i);
        iframe.src = _url;
    }
}