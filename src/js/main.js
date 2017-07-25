window.$ = window.jQuery = require("jquery"); // Hace jQuery accesible públicamente

import SongsService from "./SongsService";
import UIManager from "./UIManager";
import SongsListManager from "./SongsListManager";

const songService = new SongsService("/songs/");
const songsListUIManager = new UIManager(".songs-list");

const songsListManager = new SongsListManager(songService, songsListUIManager);
songsListManager.init();