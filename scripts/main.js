Events.on(ClientLoadEvent, cons(e => {
    // 1. Ваш код для изменения стартового сектора Эркира
    Planets.erekir.startSector = 90;

    // 2. Замена карты для сектора "Озеро" (lake)
    try {
        let targetSector = SectorPresets.lake; 

        if (targetSector != null) {
            let modFiles = Vars.mods.locateMod("eec");
            
            if (modFiles != null) {
                let mapFile = modFiles.root.child("maps").child("betterlake.msav");
                
                if (mapFile.exists()) {
                    let map = Maps.loadMap(mapFile);
                    targetSector.generator = new SectorGen(targetSector, map);
                    Log.info("Успешно заменена карта для сектора lake на betterlake.msav");
                } else {
                    Log.err("Файл betterlake.msav не найден в папке maps вашего мода!");
                }
            }
        } else {
            Log.err("Сектор lake не найден!");
        }
    } catch (err) {
        Log.err("Ошибка при замене карты сектора: " + err);
    }
}));
