var ddg_spice_lastfm_artist_album = function(api_result) {
    var skip = {
        albums: 1,
        records: 1,
        cd: 1,
        cds: 1
    };

    // Don't do anything if we find an error.
    if(api_result.error || !api_result.topalbums || !api_result.topalbums.album || api_result.topalbums.album.length === 0) {
        return;
    }

    var artist = api_result.topalbums.album[0].artist.name;
    if(DDG.isRelevant(artist, skip)) {
        Spice.render({
            data              : api_result,
            header1           : "Albums from " + artist,
            force_big_header  : true,
            source_name       : "Last.fm",
            source_url        : "http://www.last.fm/search?q=" + artist + "&type=album",
            template_normal   : "artist_album"
        });
    }
};