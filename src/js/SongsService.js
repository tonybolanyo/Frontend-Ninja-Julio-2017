const $ = require("jquery");

export class SongsService {

    constructor() {
        console.log("Songs Service");
    }

    // Obtener listado de canciones
    list(successCallback, errorCallback) {
        $.ajax({
            url: "/songs/",
            success: successCallback,
            error: errorCallback
        });
    }

    // Crear o actualizar canción
    save(song) {}

    // Crear una cancion
    create(song) {}

    // Obtener el detalle de canción
    getDetail(songId) {}

    // Actualizar una canción
    update(song) {}

    // Borrar una canción
    delete(songId) {}

}