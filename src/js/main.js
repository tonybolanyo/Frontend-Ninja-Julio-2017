window.$ = window.jQuery = require("jquery"); // Hace jQuery accesible públicamente

import SongsService from "./SongsService";
import UIManager from "./UIManager";
import SongsListManager from "./SongsListManager";
import SongFormManager from "./SongFormManager";
import PubSub from "pubsub-js";

const songService = new SongsService("/songs/");
const songsListUIManager = new UIManager(".songs-list");

const songsListManager = new SongsListManager(songService, songsListUIManager, PubSub);
songsListManager.init();

const songFormManager = new SongFormManager(".song-form", songService, PubSub);
songFormManager.init();
