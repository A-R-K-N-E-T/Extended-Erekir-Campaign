Events.on(ClientLoadEvent, cons(e => {
    Planets.erekir.startSector = 90;
    try {
        let targetSector = SectorPresets.lake; 
        if (targetSector != null) {
            let mapFile = tree.get("maps/betterlake.msav");
            if (mapFile.exists()) {
                let map = Maps.loadMap(mapFile);
                targetSector.generator = new SectorGen(targetSector, map);
                Log.info("Успешно заменена карта для сектора: " + targetSector.name);
            } else {
                Log.err("Файл кастомной карты betterlake не найден в папке maps!");
            }
        }
    } catch (err) {
        Log.err("Ошибка при замене карты сектора: " + err);
    }
}));
