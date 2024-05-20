"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.make_album = void 0;
function make_album(artist, title, tracks) {
    let album = { artist, title };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}
exports.make_album = make_album;
