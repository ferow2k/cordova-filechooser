module.exports = {
    open: function (success, failure, type, title) {
        if (type == null)
            type = '*/*';
        if (title == null)
            title = 'Select file';
        cordova.exec(success, failure, "FileChooser", "open", [type, title]);
    }
};
